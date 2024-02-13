import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState(2);

  useEffect(() => {
    const getAllCourseData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/course/getCourse"
        );
        console.log(response.data.data);
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    getAllCourseData();
  }, []);

  const handleLoadMore = () => {
    setDisplayedCourses((prevCount) => prevCount + 2);
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mb-7">Live Courses</h1>
      </div>

      <div className="flex flex-col gap-4 w-full mx-auto items-center justify-center">
        {courses.slice(0, displayedCourses).map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            courseName={course.CourseName}
            courseSlug={course.CourseSlug}
            courseThumbnail={course.thumbnail}
          />
        ))}
        {displayedCourses < courses.length && (
          <button
            type="button"
            className="px-14 mb-[7rem] mx-auto text-lg focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={handleLoadMore}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Courses;
