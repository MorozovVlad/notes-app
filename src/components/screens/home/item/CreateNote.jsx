import React from "react";
import { useState } from "react";

const CreateNote = ({ _data, setData }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  console.log(_data);
  const addNote = (title, text) => {
    if (_data.length == 0) {
      var id = 0;
    } else {
      var id = _data.length;
    }
    setData((_data) => [
      ..._data,
      {
        id,
        title,
        text,
        isCompleted: false,
        date: new Date().toISOString(),
      },
    ]);
    setTitle("");
    setText("");
  };

  return (
    <div className="w-3/5 mx-auto bg-slate-700 text-xl mb-0 content-center pt-1 rounded-lg cursor-pointer portrait:w-full ">
      <input
        className="bg-slate-700 border-none w-full px-5 outline-none py-3"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter title"
      />
      <hr />
      <textarea
        className="bg-slate-700 border-none  w-full h-36 px-5 outline-none py-3"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter text"
      />
      <hr />
      <button
        className="text-center w-full bg-slate-600 rounded-b-lg p-4 text-3xl hover:bg-slate-500 transition-colors ease-in-out duration-300 portrait:w-full"
        onClick={() => {
          addNote(title, text);
        }}
      >
        add a note
      </button>
    </div>
  );
};

export default CreateNote;
