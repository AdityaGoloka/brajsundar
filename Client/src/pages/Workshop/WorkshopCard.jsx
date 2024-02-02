import React from "react";

const WorkshopCard = () => {
  return (
    <div>
      <div
        href="#"
        className="flex flex-col border rounded-lg shadow md:flex-row max-w-3xl bg-transparent border-none cursor-pointer hover:bg-white/5 py-5"
      >
        <div className="max-w-xs">
          <img
            className="rounded-t-lg"
            src="https://dme2wmiz2suov.cloudfront.net/User(90154388)/CourseBundles(35130)/2337580-Blue_White_Photocentric_Song_Playlist_Youtube_Thumbnail.png"
            alt=""
          />
        </div>
        <div className="flex w flex-col p-4 leading-normal max-w-5xl">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-5xl">
            {/* Adjusted width using max-w-3xl */}
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-3xl">
            {/* Adjusted width using max-w-3xl */}
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;