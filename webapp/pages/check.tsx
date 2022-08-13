import type { Plagiarism } from "@/types/types";
import { Header } from "@/components/index";
import { NextPage } from "next";
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

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.firstColContainer}>
        <h1 className="text-bold">Relatório de Varredura de plágio</h1>
        <section className={styles.titlesContainer}>
          <h3>
            <span className="text-bold">Frases: </span>
            {phrasesCounter}
          </h3>
          <h3>
            <span className="text-bold">Possíveis plágios: </span>
            {plagiarismCounter}
          </h3>
        </section>
        <section className={styles.textArea}>
          <article>{text}</article>
        </section>
        <div className={styles.buttonContainer}>
          <button className="secondary-button">Inicar nova pesquisa</button>
        </div>
      </main>
    </div>
  );
};

export default Check;
