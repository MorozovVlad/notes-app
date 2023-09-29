import React from "react";
import Check from "./item/Check";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="w-3/5 mx-auto bg-slate-800 text-xl mb-2 flex content-center py-4 rounded-lg cursor-pointer">
        <Check />
        {note.title}
      </div>
    </Link>
  );
};

export default NoteItem;
