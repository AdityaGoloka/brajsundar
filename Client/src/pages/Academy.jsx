import React from "react";
import CourseCards from "../components/courseCards";
const Academy = () => {
  return (
    <div className="mx-[10rem]">
      {/* <div>
        {" "}
        <h1 className="text-3xl font-bold">Academy</h1>
      </div> */}
      <div className="my-8">
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="font-bold text-3xl my-5">Live Courses </h1>
          <a
            type="button"
            href="/academy/courses"
            className="text-white tetx-2xl  border-2 border-gray-600 border-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-10  py-2.5  focus:outline-none bg-tranparent hover:bg-white/10 w-100 h-12"
          >
            Explore
          </a>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <CourseCards />
          <CourseCards />
          <CourseCards />
        </div>
      </div>
      <div className="my-14"></div>
      <div className="my-5">
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="font-bold text-3xl my-5">Workshop</h1>
          <a
            type="button"
            href="/academy/workshop"
            className="text-white tetx-2xl  border-2 border-gray-600 border-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-10  py-2.5  focus:outline-none bg-tranparent hover:bg-white/10 w-100 h-12"
          >
            Explore
          </a>
        </div>{" "}
        <div className="grid grid-cols-3  ">
          <CourseCards />
          <CourseCards />
          <CourseCards />
        </div>
      </div>
      <div className="my-14"></div>

      <div className="my-5">
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="font-bold text-3xl my-5">Coaching</h1>
          <a
            type="button"
            href="/academy/workshop"
            className="text-white tetx-2xl  border-2 border-gray-600 border-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-10  py-2.5  focus:outline-none bg-tranparent hover:bg-white/10 w-100 h-12"
          >
            Explore
          </a>
        </div>{" "}
        <div className="grid grid-cols-3 ">
          <CourseCards />
          <CourseCards />
          <CourseCards />
        </div>
      </div>
    </div>
  );
};

export default Academy;
