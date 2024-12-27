import React, { useEffect, useState } from 'react';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import { filterData,apiUrl } from './data';
import BrowseCourses from './components/BrowseCourses';
import Footer from './components/Footer';
const App = () => {
  const [filter, setFilter] = useState(filterData);
  const [data, setData] = useState([]);
  const [likedCourses, setLikedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
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
      try{
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data?.data);
      }
      catch(error){
        console.error(error);
        toast.error("Failed to fetch data");

      }
      finally{
        setLoading(false);
      }
    }
    getData();
  },[]);
  return (
    <div className="min-h-screen flex flex-col font-poppins ">
      <Navbar />
      <BrowseCourses data={data} options={filter} loading={loading} />
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App