import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "./style.css";


interface Props {
  onFileUploaded: (file: File) => void;
}
const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (aceeptedFiles) => {
      const file = aceeptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="" />
      ) : (
        <p>
          <FiUpload />
          Imagem do estabelecimento
        </p>
      )}
      {/* {isDragActive ? ( 
        <p>
          <FiPlus /> Pode soltar :)
        </p>
      ) : (
        <p>
          <FiUpload />
          Clique e selecione uma foto ou arraste até aqui
        </p>
      )} */}
    </div>
  );
};

export default Dropzone;
