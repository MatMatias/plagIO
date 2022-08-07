import styles from "@/styles/UploadArea.module.css";
import { Dropzone } from "@/app-components/index";
import { HomeContext } from "@/contexts/index";
import { isFileUndefined, getButtonStyleIfDisabled } from "./utils";
import { useContext, Fragment } from "react";
import Router from "next/router";

const submitFile = async (file: any) => {
  const response = await fetch("/api/check", {
    method: "POST",
    body: file
  })

  return response.json();
}

const UploadArea = () => {
  const { file, setFile } = useContext(HomeContext);

  return (
    <Fragment>
      <Dropzone />
      <div className={styles.buttonGroup}>
        <button className="secondary-button" onClick={() => setFile(undefined)}>
          Limpar arquivo
        </button>
        <button
          className={getButtonStyleIfDisabled(file)}
          disabled={isFileUndefined(file)}
          onClick={async () => {
            const { status } = await submitFile(file)

            if (status === 200) {
              Router.push("/check")
            } else {
              alert(`An error ocurred\nStatus: ${status}`)
            }
          }}
        >
          Verificar plágio
        </button>
      </div>
    </Fragment>
  );
};

export { UploadArea };
