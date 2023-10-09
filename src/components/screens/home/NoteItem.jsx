import React from "react";
import Check from "./item/Check";
import { Link } from "react-router-dom";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";

const NoteItem = ({ note, changeNote, removeNote }) => {
  let date = new Date(note.date).toLocaleString();
  return (
    <div className="w-3/5 mx-auto bg-slate-800 text-xl mb-2 flex content-center py-4 rounded-lg cursor-pointer hover:bg-slate-500 transition-colors ease-in-out duration-300 portrait:w-full portrait:text-base">
      <button onClick={() => changeNote(note.id)}>
        <Check isCompleted={note.isCompleted} />
      </button>

      <Link
        to={`/note/${note.id}`}
        note={note}
        className={cn(
          "w-full portrait:w-2/3  flex items-center text-ellipsis",
          {
            "line-through": note.isCompleted,
          }
        )}
      >
        <p className=" w-96 text-ellipsis overflow-hidden ...  portrait:w-3/5 portrait: overflow-hidden ...">
          {note.title}
        </p>
        <span className="ml-auto mr-5 text-right portrait:text-sm">{date}</span>
      </Link>
      <button className="ml-auto mr-5" onClick={() => removeNote(note.id)}>
        <BsTrash
          size={30}
          className="hover:text-red-700 transition-colors ease-in-out duration-200"
        />
      </button>
    </div>
  );
};

export default NoteItem;
