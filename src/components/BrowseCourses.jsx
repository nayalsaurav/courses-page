import React from "react";
import FilterSection from "./FilterSection";
import Courses from "./Courses";
import { RotatingLines } from "react-loader-spinner";
const BrowseCourses = ({ data,options,loading}) => {
  const [currentFilter, setCurrentFilter] = React.useState('All');

  function filterHandler(title) {
    setCurrentFilter(title);
  }

  return (
    <div className="flex-1 bg-[#4A4E69]">
      <FilterSection options={options} onFilterChange={filterHandler} />
      {loading && (
        <div className="flex justify-center items-center h-[50vh]">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <Courses data={data} title={currentFilter} />
    </div>
  );
};

export default BrowseCourses;
