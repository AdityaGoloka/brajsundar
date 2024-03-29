import React from "react";
import { NavLink } from "react-router-dom";

const CourseCard = ({ id, courseSlug, courseName, courseThumbnail }) => {
  return (
    // <NavLink to={`/academy/course-detail/${id}`}>
    <div
      className="border  border-white/10 rounded shadow-2xl  
    mx-10 lg:mx-2 lg:p-4 hover:bg -white/5 lg:w-[50rem] md:w-[40rem] 
    w-[90%] 2xl:w-[50%]"
      // style={{ width: "50rem" }}
    >
      <div
        href="#"
        className="flex flex-col border rounded-lg 
         md:flex-row max-w-3xl bg-transparent 
         cursor-pointer border-none py-5 px-5 gap-5"
      >
        <div className="max-w-xs items-center flex  2xl:w-full">
          <img
            className="rounded-t-lg mx-auto items-center w-full "
            src={"https://brajsundar.s3.ap-south-1.amazonaws.com/" +
            courseThumbnail}
            // src="https://www.brajsundar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcourse.940e90e9.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="flex w flex-col p-4 leading-normal max-w-5xl  2xl:w-full 2xl:ml-10">
          <h5
            className="mb-2 text-2xl font-bold
           tracking-tight text-gray-900 text-white  text-left lg:text-left 2xl:text-3xl 2xl:text-2xl"
          >
            {/* Adjusted width using max-w-3xl */}
            {courseName}
          </h5>
          <p className="mb-3 font-normal text-gray-200 w-3xl 2xl:w-full 2xl:text-lg text-left lg:text-left 2xl:text-lg">
            {/* Adjusted width using max-w-3xl */}
            {courseSlug}
          </p>
          <div>
            <button
              type="button"
              className="px-14 mx-auto text-lg focus:outline-none text-white
               bg-purple-700 hover:bg-purple-800  focus:ring-4 focus:ring-purple-300
                font-medium rounded-lg  px-4 py-2 mb-2 bg-purple-600 
                hover:bg-purple-700 focus:ring-purple-900"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
    // </NavLink>
  );
};

export default CourseCard;
