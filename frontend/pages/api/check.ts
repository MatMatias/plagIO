import type { NextApiRequest, NextApiResponse } from "next";
import type { Plagiarism } from "@/types/types";
import { getPlagiarisms, parseXML } from "@/utils/index";
import path from "path";
import { openDb } from "database/open-database";

type Data = {
  text: string;
  plagiarisms: Plagiarism[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string; data?: Data }>
) {
  const database = await openDb();

  if (req.method === "POST") {
    await database.exec(`INSERT INTO Plagiarism (text) VALUES ("${req.body}")`);
    res.status(200).json({ status: 200, message: "File sent" });
  } else if (req.method === "GET") {
    /*** SEND TEXT (req.body) TO THE NEURAL NET ***/
    /*** GET THE XML OUTPUTED FROM THE NEURAL NET AND SEND IT AS A RESPONSE ***/
    const testDir = path.join(process.cwd(), "test");
    const xmlJson = await parseXML(`${testDir}/suspicious-document00001.xml`);
    const plagiarisms = getPlagiarisms(xmlJson);

    const { text } = await database.get(
      `SELECT text FROM Plagiarism WHERE id = (SELECT MAX(id) FROM Plagiarism)`
    );

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
