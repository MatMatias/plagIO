import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plagon</title>
        <meta name="description" content="plagon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <h1>Verificador de plágio</h1>
        <h3>Copie e cole ou faça upload do seu texto.</h3>
      </div>
      <span>total de chars</span>
      <main className={styles.main}>
        <textarea placeholder="Insira aqui o texto para verificar o plágio">
          Plagon
        </textarea>
        <div>
          <p>Upload</p>
          <button>Verifique o plágio</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
