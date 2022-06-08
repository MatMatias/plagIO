import { useCallback, useState, useEffect } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import styles from "@/styles/Dropzone.module.css";
import { getErrorMessages, getErrorCodesSet } from "./utils";

const Dropzone = () => {
  const [errorMessages, setErrorMessages] = useState<string[] | undefined>(
    undefined
  );

  const onDrop = useCallback((acceptedFiles: File[]) => {}, []);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    const errorCodesSet = getErrorCodesSet(fileRejections);
    setErrorMessages(getErrorMessages(errorCodesSet));
    console.log(fileRejections);
  }, []);

  useEffect(() => {
    if (errorMessages) {
      alert(errorMessages.join("\n"));
      setErrorMessages(undefined);
    }
  }, [errorMessages]);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      "text/html": [".pdf"],
    },
    maxFiles: 1,
  });

  return (
    <div {...getRootProps()} className={styles.container}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Solte o arquivo aqui</p>
      ) : (
        <p>Arraste o arquivo, ou clique para selecionar</p>
      )}
    </div>
  );
};

export { Dropzone };
