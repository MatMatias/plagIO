import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";
import path from "path";
import fs from "fs/promises";

type Plagiarism = {
  "@_name": string,
  "@_this_offset": string,
  "@_this_length": string
}

type Data = {
  text: string,
  plagiarisms: Plagiarism[]
}

type XMLJson = {
  "?xml": { "@_version": string, "@_encoding": string },
  document: { feature: Plagiarism[] },
  "@_xmlns:xsi": string,
  "@_xsi:noNamespaceSchemaLocation": string,
  "@_reference": string
}


async function parseXML(path: string) {
  const options = {
    ignoreAttributes: false
  };
  const parser = new XMLParser(options);

  const data = await fs.readFile(path, { encoding: "utf-8" });
  const jsonObj = parser.parse(data);

  return jsonObj;
}

function getPlagiarisms(xmlJson: XMLJson) {
  return xmlJson.document.feature.slice(2)
}

const testDir = path.join(process.cwd(), "test");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number, message: string, data?: Data }>
) {

  if (req.method === "POST") {
    res.status(200).json({ status: 200, message: "File sent" });
  }

  else if (req.method === "GET") {
    const text = req.body;
    const xmlJson = await parseXML(`${testDir}/suspicious-document00001.xml`);
    const plagiarisms = getPlagiarisms(xmlJson);

    res.status(201).json({ status: 201, message: "Text and plagiarisms received", data: { text: text, plagiarisms: plagiarisms } });
  }

  else {
    res.status(405).send({ status: 405, message: "Only GET or POST requests allowed" });
  }
}
