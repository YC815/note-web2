import db from "../../data/note.json"


export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Do something with the data, e.g. save it to a database, process it, etc.
    res.status(200).json({ message: 'Data received', data });
  } else if (req.method === 'GET') {
    res.status(200).json(db);
  }
}
