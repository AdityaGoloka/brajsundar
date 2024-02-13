import React, { useState, useEffect } from "react";
import CoachingCard from "./CoachingCard";
// import RatingCard from "./RatingCard";
// import VideoDuration from "./VideoDuration";
// import PriceFilterCard from "./PriceFilterCard.jsx";
// import RateDropDown from "./RateDropDown.jsx";
import axios from "axios";

const Coaching = () => {
  const [coaching, setCoaching] = useState([]);
  const [displayedCoaching, setDisplayedCoaching] = useState(2);

  useEffect(() => {
    const getAllCourseData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/coaching/getCoaching"
      );
      console.log(response.data.data);
      setCoaching(response.data.data);
    };
    getAllCourseData();


    const handleLoadMore = () => {
      setDisplayedCoaching((prevCount) => prevCount + 2);
    };


  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mb-7">Coaching</h1>
      </div>{" "}

      <div>
        <div className="flex flex-col gap-4 items-center">
          {coaching.slice(0, displayedCoaching).map((coaching) => (
            <CoachingCard
              key={coaching._id}
              id={coaching._id}
              CoachingName={coaching.CoachingName}
              CoachingSlug={coaching.CoachingSlug}
              coachingThumbnail={coaching.thumbnail}
            />
          ))}
          {displayedCoaching < coaching.length && (
            <button
              type="button"
              className="px-14 mx-auto text-lg focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={handleLoadMore}
            >
              Enroll Now
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Coaching;
