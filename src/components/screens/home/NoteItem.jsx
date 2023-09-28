import React from "react";
import Check from "./item/Check";

const NoteItem = ({ note }) => {
  return (
    <div className="w-3/5 mx-auto bg-slate-800 text-xl mb-2 flex content-center py-4 rounded-lg">
      <Check />
      {note.title}
    </div>
  );
};

export default NoteItem;
