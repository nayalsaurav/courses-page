import React, { useState } from "react";

const FilterSection = ({ options, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("1");

  const clickHandler = (filter) => {
    setSelectedFilter(filter.id);
    onFilterChange(filter.title);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 pt-4 w-11/12 max-w-[1200px] mx-auto items-center">
      {options.map((filter) => (
        <div
          key={filter.id}
          onClick={() => clickHandler(filter)}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 ${
            selectedFilter === filter.id
              ? "border-white border-2 bg-black bg-opacity-60"
              : "border-transparent border-2"
          }`}
        >
          <div className="flex items-center">
            <button>{filter.title}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
