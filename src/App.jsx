import React, { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import { filterData,apiUrl } from './data';
import BrowseCourses from './components/BrowseCourses';
import Footer from './components/Footer';
const App = () => {
  const [filter, setFilter] = useState(filterData);
  const [data, setData] = useState([]);
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


  useEffect(() => {
    async function getData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // console.log(data?.data);
      setData(data?.data);
    }
    getData();
  },[]);
  return (
    <div className="min-h-screen flex flex-col font-poppins ">
      <Navbar />
      <BrowseCourses data={data} options={filter} />
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App