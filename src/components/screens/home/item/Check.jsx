import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import cn from "classnames";

const Check = ({ isCompleted }) => {
  return (
    <div
      className={cn("border-2 rounded-lg border-pink-400 w-7 h-7 mx-4", {
        "bg-pink-400": isCompleted,
      })}
    >
      {isCompleted && <AiOutlineCheck size={25} color="black" />}
    </div>
  );
};

export default Check;
