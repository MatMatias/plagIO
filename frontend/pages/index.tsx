import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Header, UploadArea } from "@/components/index";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plagon</title>
        <meta name="description" content="plagon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.title}>
        <h1 className={styles.h1}>Verificador de plágio</h1>
      </section>
      <main>
        <div className={styles.uploadArea}>
          <UploadArea />
        </div>
      </main>
    </div>
  );
};

export default Home;
