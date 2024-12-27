import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ data }) => {
  if (!data) return null;

  const { id, title, description, image } = data;
  const [liked, setLiked] = useState(false);
  function previousLike() {
    array.forEach(id => {
      if(id===data.id){
        setLiked(true);
      }
    });
  }
  function likeHandler() {
    setLiked((prevLiked) => {
      const newLiked = !prevLiked;
      if (newLiked) {
        toast.dark("Added to Liked Courses", {
          autoClose: 2000,
        });
      } else {
        toast.dark("Removed from Liked Courses",{
          autoClose: 2000,
        });
      }
      return newLiked;
    });
  }

  return (
    <div className="w-[300px] bg-[#2A2A44] bg-opacity-80 rounded-md overflow-hidden">
      <img
        className="w-full min-h-[168px] object-cover"
        src={image.url}
        alt={image.alt || "Course Image"}
      />
      <div className="relative p-4">
        <h2 className="text-white font-semibold text-[1rem] leading-6">
          {title}
        </h2>
        <p className="text-white text-base mt-2">
          {description.substring(0, 100) + "..."}
        </p>
        <div
          className="absolute top-[-1.5rem] right-2 p-2 bg-white rounded-full cursor-pointer"
          onClick={likeHandler}
        >
          {liked ? (
            <FcLike size={25} color="red" />
          ) : (
            <FcLikePlaceholder size={25} color="white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
