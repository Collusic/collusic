import axios from "axios";
function Upload() {
  const [midi, setMidi] = useState(null);

  const onChange = (e) => {
    const formData = new FormData();
    formData.append("file", midi);
    const res = await axios.post("/api/upload", formData);
    console.log(res);
  };

  const onClick = () => {};

  return (
    <div>
      <input type="midi" onChange={onChange} />
      <button onClick={onClick}>제출</button>
    </div>
  );
}

export default Upload;
