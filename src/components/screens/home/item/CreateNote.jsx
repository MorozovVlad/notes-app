import React from "react";
import { useState } from "react";

const CreateNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="w-3/5 mx-auto bg-slate-700 text-xl mb-1 content-center py-1 rounded-lg cursor-pointer">
      <input
        className="bg-slate-700 border-none w-full px-5 outline-none py-1"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addNote(title)}
        placeholder="Enter title"
      />
      <input
        className="bg-slate-700 border-none  w-full px-5 outline-none py-1 h-10"
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
