import axios from "axios";
import React, { useState } from "react";

function Upload() {
  const [midi, setMidi] = useState(null);

  const onChange = (e) => {
    setMidi(e.target.files[0]);
  };

  const onClick = async () => {
    const formData = new FormData();
    formData.append("file", midi);
    const res = await axios.post("/api/upload", formData);
    console.log(res);
  };

  return (
    <div>
      <input type="midi" onChange={onChange} />
      <button onClick={onClick}>제출</button>
    </div>
  );
}

export default Upload;
