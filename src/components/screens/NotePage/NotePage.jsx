import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import cn from "classnames";

const NotePage = () => {
  const data = JSON.parse(localStorage._data);
  const { id } = useParams();
  const leftArrow = Number(id);
  const rightArrow = data.length - Number(id) - 1;
  let date = new Date(data[id].date).toLocaleString();
  return (
    <div>
      <div className="bg-gray-900  h-screen text-white  mx-auto w-3/5 portrait:w-full portrait:px-5">
        <Link to="/home" className="w-24">
          <p className=" ml-auto py-3">
            <AiOutlineHome size={50} />
          </p>
        </Link>

        <div className=" mx-auto pt-10 pb-5 text-4xl  flex">
          {leftArrow ? (
            <Link to={`/note/${[Number(id) - 1]}`}>
              <FaArrowLeft size={50} color="white" />
            </Link>
          ) : (
            ""
          )}

          <h1
            className={cn("mx-auto w-2/3 break-words text-center", {
              "line-through": data[id].isCompleted,
            })}
          >
            {data[id].title}
          </h1>

          {rightArrow ? (
            <Link to={`/note/${[Number(id) + 1]}`}>
              <FaArrowRight size={50} color="white " />
            </Link>
          ) : (
            ""
          )}
        </div>
        <p className=" mx-auto text-xl text-center pb-10">{date}</p>
        <p className=" mx-auto text-xl break-words pb-10">{data[id].text}</p>
      </div>
    </div>
  );
};

export default NotePage;
