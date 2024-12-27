import React from "react";
import Card from "./Card";

const Courses = ({ data, title }) => {
  // console.log(data);
  let allCourses = Object.values(data).flat();
  if (title !== "All") {
    allCourses = data[title] || [];
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4 w-11/12 max-w-[1200px] mx-auto items-stretch">
      {allCourses.map((course) => (
        <Card key={course.id} data={course} />
      ))}
    </div>
  );
};

export default Courses;
