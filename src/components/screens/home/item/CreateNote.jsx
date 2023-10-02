import React from "react";
import { useState } from "react";

const CreateNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="w-3/5 mx-auto bg-slate-800 text-xl mb-2 content-center py-4 rounded-lg cursor-pointer">
      <input
        className="bg-slate-800 border-none w-full mx-5 outline-none"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addNote(title)}
        placeholder="Enter title"
      />
      <input
        className="bg-slate-800 border-none w-full mx-5 outline-none py-3"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={(e) => e.key === "Enter" && addNote(text)}
        placeholder="Enter text"
      />
    </div>
  );
};

export default CreateNote;
