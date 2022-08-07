import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";
import path from "path";
import { openDb } from "database/open-database";
import fs from "fs/promises";

type Plagiarism = {
  "@_name": string;
  "@_this_offset": string;
  "@_this_length": string;
};

type Data = {
  text: string;
  plagiarisms: Plagiarism[];
};

type XMLJson = {
  "?xml": { "@_version": string; "@_encoding": string };
  document: { feature: Plagiarism[] };
  "@_xmlns:xsi": string;
  "@_xsi:noNamespaceSchemaLocation": string;
  "@_reference": string;
};

async function parseXML(path: string) {
  const options = {
    ignoreAttributes: false,
  };
  const parser = new XMLParser(options);

  const data = await fs.readFile(path, { encoding: "utf-8" });
  const jsonObj = parser.parse(data);

  return jsonObj;
}

function getPlagiarisms(xmlJson: XMLJson) {
  return xmlJson.document.feature.slice(2);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string; data?: Data }>
) {
  const database = await openDb();

  const text = req.body;
  if (req.method === "POST") {
    await database.exec(`INSERT INTO Plagiarism (text) VALUES ("${text}")`);
    res.status(200).json({ status: 200, message: "File sent" });
  } else if (req.method === "GET") {
    /*** SEND TEXT (req.body) TO THE NEURAL NET ***/
    /*** GET THE XML OUTPUTED FROM THE NEURAL NET AND SEND IT AS A RESPONSE ***/
    const testDir = path.join(process.cwd(), "test");
    const xmlJson = await parseXML(`${testDir}/suspicious-document00001.xml`);
    const plagiarisms = getPlagiarisms(xmlJson);

    res.status(201).json({
      status: 201,
      message: "Text and plagiarisms received",
      data: { text: text, plagiarisms: plagiarisms },
    });
  } else if (req.method === "DELETE") {
    await database.exec(
      `DELETE FROM Plagiarism WHERE id = (SELECT MAX(id) FROM Plagiarism)`
    );
    res.status(200).json({ status: 200, message: "Last plagiarism deleted" });
  } else {
    res
      .status(405)
      .send({ status: 405, message: "Only GET or POST requests allowed" });
  }
}
