import React from "react";
import NoteItem from "./NoteItem";
import data from "../../../data.js";

const Home = () => {
  return (
    <div className="bg-gray-900 h-screen text-white  mx-auto">
      <h1 className="text-center py-10 text-4xl">My notes</h1>
      {data.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Home;
