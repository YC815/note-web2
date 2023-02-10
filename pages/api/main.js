/* import axios from "axios"; */
import db from "../../data/note.json";
import fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // console.log(data);
    fs.writeFileSync("data/note.json", JSON.stringify(data));
    console.log("post data:", data);
    res.status(200).json({ message: "Data received", data });
  } else if (req.method === "GET") {
    const d = fs.readFileSync("data/note.json", "utf-8");
    console.log("getd:", d);
    res.status(200).json(db);
  }
}

/* fs.readFileSync("data/note.json", "utf-8", (err, data) => { */
/* onsole.log("data:", data); */
/*   // if (err) { */
/*   //   console.error(err); */
/*   //   res.status(500).json({ error: "Error reading file" }); */
/*   // } else { */
/*   const db2 = JSON.parse(data); */
/*   console.log("db2:", db2); */
/*   res.status(200).json(db2); */
/*   // } */
/* }); */
