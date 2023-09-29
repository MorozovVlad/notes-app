import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data.js";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NotePage = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="bg-gray-900 h-screen text-white  mx-auto">
        <Link to="/home">
          <p className="w-3/5 text-xl pt-5 mx-auto">home</p>
        </Link>

        <div className="w-3/5 mx-auto py-10 text-4xl  flex">
          {Number(id) - 1 && (
            <Link to={`/note/${[Number(id) - 1]}`}>
              <FaArrowLeft size={50} color="white" />
            </Link>
          )}

          <h1 className="mx-auto">{data[id - 1].title}</h1>

          <Link to={`/note/${[Number(id) + 1]}`}>
            <FaArrowRight size={50} color="white " />
          </Link>
        </div>
        <p className="w-3/5 mx-auto text-xl">{data[id - 1].text}</p>
      </div>
    </div>
  );
};

export default NotePage;
