import React from "react";
import NoteItem from "./NoteItem";
// import data from "../../../data.js";
import { useState } from "react";
import CreateNote from "./item/CreateNote";
import { useEffect } from "react";

const Home = () => {
  const [_data, setData] = useState([]);
  console.log(_data);
  useEffect(() => {
    const raw = localStorage.getItem("_data") || [];
    setData(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("_data", JSON.stringify(_data));
  }, [_data]);

  const changeNote = (id) => {
    const copy = [..._data];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setData(copy);
  };

  const removeNote = (id) => setData([..._data].filter((t) => t.id !== id));

  const addNote = (title, text) => {
    setData([
      ..._data,
      {
        id: new Date(),
        title,
        text,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className="bg-gray-900 h-screen text-white  mx-auto">
      <h1 className="text-center py-10 text-4xl">My notes</h1>
      {_data.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          changeNote={changeNote}
          removeNote={removeNote}
        />
      ))}
      <CreateNote addNote={addNote} />
    </div>
  );
};

export default Home;
