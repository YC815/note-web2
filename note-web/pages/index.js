import React, { useState, useEffect } from "react";
import axios from "axios";
// import db from '../data/note.json'

const HomePage = () => {
  const [textAreas, setTextAreas] = useState([{ id: 1, content: "" }]);

  // console.log(db.note)

  useEffect(() => {
    axios.get("/api/main").then((res) => {
      setTextAreas(res.data.note);
    });
  }, []);

  const addTextArea = () => {
    setTextAreas([...textAreas, { id: textAreas.length + 1, content: "" }]);
    axios
      .post("/api/main", { note: textAreas })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const removeTextArea = (id) => {
    setTextAreas(textAreas.filter((t) => t.id !== id));
  };

  const handleTextAreaChange = (event, id) => {
    console.log("id:", id);
    const newTextAreas = textAreas.map((textArea) =>
      textArea.id === id
        ? { ...textArea, content: event.target.value }
        : textArea
    );
    setTextAreas(newTextAreas);
    axios
      .post("/api/main", { note: newTextAreas })
      .then((res) => console.log("post success:", res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    console.log("ta:", textAreas);
  }, [textAreas]);

  return (
    <div style={{ backgroundColor: "#333", height: "100vh" }}>
      {textAreas.map((t) => (
        <div key={t.id} style={{ display: "flex", alignItems: "flex-start" }}>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
            }}
            onClick={() => removeTextArea(t.id)}
          >
            ╳
          </button>
          <textarea
            style={{ padding: "20px", width: "2500px", height: "234px" }}
            value={t.content}
            onChange={(event) => handleTextAreaChange(event, t.id)}
          />
        </div>
      ))}
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          position: "fixed",
          bottom: "30px",
          right: "20px",
        }}
        onClick={addTextArea}
      >
        +
      </button>
    </div>
  );
};
export default HomePage;
