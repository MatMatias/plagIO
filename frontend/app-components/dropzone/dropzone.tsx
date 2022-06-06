import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "@/styles/Dropzone.module.css";

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.container}>
      <input {...getInputProps()} />
      {
        isDragActive ? (
          <p>Solte o arquivo aqui</p>
        ) : (
          <p>Arraste o arquivo, ou clique para selecionar</p>
        )
      }
    </div >
  );
};

export { Dropzone };
