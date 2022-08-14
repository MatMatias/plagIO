import type { Plagiarism } from "@/types/types";
import { buildTextHTML } from "../utils/buildTextHtml";
import { Header } from "@/components/index";
import parse from "html-react-parser";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Check.module.css";

const Check: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [plagiarisms, setPlagiarisms] = useState<Plagiarism[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/check", {
        method: "GET",
      });

      const responseJson = await response.json();
      setText(responseJson.data.text);
      setPlagiarisms(responseJson.data.plagiarisms);
    })();
  }, []);

  const phrasesCounter = text.split(".").length;
  const plagiarismCounter = plagiarisms.length;

  let styledText = "";

  if (plagiarismCounter > 0) {
    styledText = buildTextHTML(plagiarisms, text, `${styles.plagiarizedPart}`);
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.titlesContainer}>
          <h1 className="text-bold">Relatório de Varredura de plágio</h1>
          <div className={styles.subtitlesContainer}>
            <h3>
              <span className="text-bold">Frases: </span>
              {phrasesCounter}
            </h3>
            <h3>
              <span className="text-bold">Possíveis plágios: </span>
              {plagiarismCounter}
            </h3>
          </div>
        </section>
        <section className={styles.textArea}>
          <article>{parse(styledText)}</article>
        </section>
        <div className={styles.buttonContainer}>
          <Link href="/">
            <button className="secondary-button">Inicar nova pesquisa</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Check;
