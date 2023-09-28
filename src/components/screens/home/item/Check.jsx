import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const Check = ({ isCompleted }) => {
  return (
    <div className="border-2 rounded-lg border-pink-400 w-7 h-7 mx-4">
      {isCompleted && <BsCheck2Circle size={30} />}
    </div>
  );
};

export default Check;
