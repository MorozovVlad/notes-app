import React from "react";
import Check from "./item/Check";
import { Link } from "react-router-dom";
// import data from "../../../data.js";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";

const NoteItem = ({ note, changeNote, removeNote }) => {
  return (
    <div className="w-3/5 mx-auto bg-slate-800 text-xl mb-2 flex content-center py-4 rounded-lg cursor-pointer">
      <button onClick={() => changeNote(note.id)}>
        <Check isCompleted={note.isCompleted} />
      </button>

      <Link
        to={`/note/${note.id}`}
        note={note}
        className={cn("", {
          "line-through": note.isCompleted,
        })}
      >
        {note.title}
      </Link>
      <button className="ml-auto mr-4" onClick={() => removeNote(note.id)}>
        <BsTrash size={30} />
      </button>
    </div>
  );
};

export default NoteItem;
