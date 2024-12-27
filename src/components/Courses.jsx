import React, { useState } from "react";
import Card from "./Card";

const Courses = ({ data, title }) => {
  // console.log(data);
  let allCourses = Object.values(data).flat();
  if (title !== "All") {
    allCourses = data[title] || [];
  }
  const [likedCourses, setLikedCourses] = useState([]);
  function likedCoursesHandler(courseId) {
    setLikedCourses((prevLikedCourses) => {
      if (prevLikedCourses.includes(courseId)) {
        return prevLikedCourses.filter((id) => id !== courseId);
      } else {
        return [...prevLikedCourses, courseId];
      }
    });
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4 w-11/12 max-w-[1200px] mx-auto items-stretch">
      {allCourses.map((course) => (
        <Card key={course.id} data={course} fxn = {likedCoursesHandler} likedCourses= {likedCourses} />
      ))}
    </div>
  );
};

export default Courses;
