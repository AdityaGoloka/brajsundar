import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import RatingCard from "./RatingCard";
import VideoDuration from "./VideoDuration";
import PriceFilterCard from "./PriceFilterCard.jsx";
import RateDropDown from "./RateDropDown.jsx";
import axios from "axios";
const Courses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getAllCourseData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/course/getCourse"
      );
      console.log(response.data.data);
      setCourse(response.data.data);
    };

    getAllCourseData();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mb-7">Courses</h1>
      </div>{" "}
      {/* <div className="lg:mx-[7rem] flex gap-10 justify-center lg:flex-row flex-col"> */}
      <div className="">
        {/* <div className="lg:block hidden"> */}
        {/* ratings
          <div className="w-full my-5 mb-10">
            <RateDropDown />
          </div>
          <div className="w-full my-10">
            <h1 className="font-bold">Ratings</h1> <RatingCard />
          </div>

          <div className="w-full my-10">
            <h1 className="font-bold">Video Duration</h1> <VideoDuration />
          </div>
          <div className="w-full my-10">
            <h1 className="font-bold">Video Duration</h1> <PriceFilterCard />
          </div> */}
        {/* </div> */}

        <div className="flex flex-col gap-4 w-full mx-auto items-center ">
          {course.map((courses) => (
            <CourseCard
              key={courses._id}
              id={courses._id}
              courseName={courses.CourseName}
              courseSlug={courses.CourseSlug}
              courseThumbnail={courses.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
