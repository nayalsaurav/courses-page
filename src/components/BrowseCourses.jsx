import React from "react";
import FilterSection from "./FilterSection";
import Courses from "./Courses";

const BrowseCourses = ({ data,options}) => {
  const [currentFilter, setCurrentFilter] = React.useState('All');

  function filterHandler(title) {
    setCurrentFilter(title);
  }

  return (
    <div className="flex-1 bg-[#4A4E69]">
      <FilterSection options={options} onFilterChange={filterHandler} />
      <Courses data={data} title={currentFilter}/>
    </div>
  );
};

export default BrowseCourses;
