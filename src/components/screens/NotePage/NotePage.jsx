import React from "react";
import { useParams } from "react-router-dom";
// import data from "../../../data.js";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import cn from "classnames";

const NotePage = () => {
  const { id } = useParams();
  const leftArrow = Number(id) - 1;
  const rightArrow = data.length - Number(id);
  console.log(data[id - 1].isCompleted);
  console.log(data);
  return (
    <div>
      <div className="bg-gray-900 h-screen text-white  mx-auto">
        <Link to="/home">
          <p className="w-3/5 mx-auto py-3">
            <AiOutlineHome size={50} />
          </p>
        </Link>

        <div className="w-3/5 mx-auto py-10 text-4xl  flex">
          {leftArrow ? (
            <Link to={`/note/${[Number(id) - 1]}`}>
              <FaArrowLeft size={50} color="white" />
            </Link>
          ) : (
            ""
          )}

          <h1
            className={cn("mx-auto", {
              "line-through": data[id - 1].isCompleted,
            })}
          >
            {data[id - 1].title}
          </h1>
          {rightArrow ? (
            <Link to={`/note/${[Number(id) + 1]}`}>
              <FaArrowRight size={50} color="white " />
            </Link>
          ) : (
            ""
          )}
        </div>
        <p className="w-3/5 mx-auto text-xl">{data[id - 1].text}</p>
      </div>
    </div>
  );
};

export default NotePage;
