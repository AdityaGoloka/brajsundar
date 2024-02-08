import React, { useState, useEffect } from "react";
import CoachingCard from "./CoachingCard";
import RatingCard from "./RatingCard";
import VideoDuration from "./VideoDuration";
import PriceFilterCard from "./PriceFilterCard.jsx";
import RateDropDown from "./RateDropDown.jsx";
import axios from "axios";
const Coaching = () => {
  const [coaching, setCoaching] = useState([]);

  useEffect(() => {
    const getAllCourseData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/coaching/getCoaching"
      );
      console.log(response.data.data);
      setCoaching(response.data.data);
    };
    getAllCourseData();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mb-7">Coaching</h1>
      </div>{" "}
      {/* <div className="mx-[7rem] flex gap-10 justify-between lg:flex-row flex-col"> */}
      <div>
        {/* <div className="lg:block hidden">
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
        </div> */}
        <div className="flex flex-col gap-4 items-center">
          {coaching.map((coaching) => (
            <CoachingCard
              key={coaching._id}
              id={coaching._id}
              CoachingName={coaching.CoachingName}
              CoachingSlug={coaching.CoachingSlug}
              coachingThumbnail={coaching.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coaching;
