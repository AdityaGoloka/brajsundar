import React from "react";

const WorkshopCard = ({ workshopName, workshopSlug, workshopThumbnail }) => {
  return (
    <div>
      <div
        href="#"
        className="flex flex-col border rounded-lg shadow md:flex-row max-w-3xl bg-transparent border-none cursor-pointer hover:bg-white/5 py-5"
      >
        <div className="max-w-xs">
          <img
            className="rounded-t-lg"
            src={workshopThumbnail}
            alt="workshopThumbnail"
          />
        </div>
        <div className="flex w flex-col p-4 leading-normal max-w-5xl">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-5xl">
            {/* Adjusted width using max-w-3xl */}
            {workshopName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-3xl">
            {/* Adjusted width using max-w-3xl */}
            {workshopSlug}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
