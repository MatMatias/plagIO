import styles from "@/styles/UploadArea.module.css";
import { useState, useContext, Fragment } from "react";
import { Dropzone } from "@/app-components/index";

const UploadArea = () => {
  return (
    <Fragment>
      <Dropzone />
      <div className={styles.buttonGroup}>
        <button className="secondary-button">Limpar arquivo</button>
        <button className="disabled-button">Verificar plágio</button>
      </div>
    </Fragment>
  );
};

export { UploadArea };
