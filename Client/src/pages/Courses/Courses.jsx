import React from "react";
import CourseCard from "./CourseCard";
import RatingCard from "./RatingCard";
import VideoDuration from "./VideoDuration";
import PriceFilterCard from "./PriceFilterCard.jsx";
import RateDropDown from "./RateDropDown.jsx";
const Courses = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mb-7">Courses</h1>
      </div>{" "}
      <div className="lg:mx-[7rem] flex gap-10 justify-between lg:flex-row flex-col">
        <div className="lg:block hidden">
          {/* ratings */}
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
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Courses;