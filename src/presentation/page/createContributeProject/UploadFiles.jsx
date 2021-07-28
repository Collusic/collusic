import React, { useState } from "react";
import axios from "axios";
import styled from "./styled";

function Uploadfiles() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3000/project/contributeProject",
        formData
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <styled.UploadMidi>
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </styled.UploadMidi>
  );
}

export default Uploadfiles;
