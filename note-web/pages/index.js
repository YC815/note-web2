import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import db from '../data/note.json'

const HomePage = () => {
  const [textAreas, setTextAreas] = useState([
    { id: 1, content: "" }
  ]);

  // console.log(db.note)

  // useEffect(() => {
    
  //   axios.get("/data/note.json").then(res => {
  //     setTextAreas(res.data.note);
  //   });
  // }, []);

  const addTextArea = () => {
    setTextAreas([...textAreas, { id: textAreas.length + 1, content: "" }]);
  };

  const removeTextArea = (id) => {
    setTextAreas(textAreas.filter(t => t.id !== id));
  };


  // useEffect(() => {
  //   axios.post("/data/note.json", { note: textAreas });
  // }, [textAreas]);

  return (
    <div style={{ backgroundColor: '#333', height: '100vh' }}>
      {textAreas.map(t => (
        <div key={t.id} style={{ display: 'flex', alignItems: 'flex-start' }}>
          <button style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }} onClick={() => removeTextArea(t.id)}>
            ╳
          </button>
          <textarea 
            style={{ padding: '20px', width: '2500px', height: '234px' }} 
            value={t.content}
          />
        </div>
      ))}
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', position: 'fixed', bottom: '20px', right: '20px' }} onClick={addTextArea}>
        +
      </button>
    </div>
  );
};

export default HomePage;
