import { useScroll } from "framer-motion";
import React, { useState } from "react";

const VideoCard = ({ bookName, thumbnail, bookLink, bookDetail }) => {
  console.log(bookName, thumbnail, bookLink, bookDetail);
  const [view, setView] = useState(false);
  const getYoutubeVideoId = (url) => {
    const regex = /[?&]v=([^?&]+)/;
    const match = url.match(regex);
    return match && match[1];
  };

  const trimmedBookDetail = bookDetail.slice(0, 200); // Adjust the number of characters as needed

  let amazonLink = bookLink;
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setView(true);

    // Determine the Amazon link based on the selected country
    switch (selectedCountry) {
      case "US":
        amazonLink = "https://www.amazon.com";
        break;
      case "CA":
        amazonLink = "https://www.amazon.ca";
        break;
      case "FR":
        amazonLink = "https://www.amazon.fr";
        break;
      case "DE":
        amazonLink = "https://www.amazon.de";
        break;
      case "IN":
        amazonLink = "https://www.amazon.in";
        break;
      default:
        amazonLink = ""; // Default to empty string if no match
    }
  };

  return (
    <div className=" bg-gray-800/30   md:px-10 mx-4 my-4 md:w-[40rem]">
      {/* <a href={bookLink} target="_blank"> */}{" "}
      <div
        className="flex flex-col 
        rounded-lg shadow md:flex-row max-w-3xl 2xl:max-w-5xl bg-transparent border-none cursor-pointer  py-5"
      >
        <div className=" mx-auto px-5 my-auto md:max-w-[50%]">
          {/* <iframe 
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(video_url)}`} 
                    alt="video" 
                    className='rounded-t-lg' /> */}
          {/* <img src={thumbnail} alt="" className="w-[20rem]" /> */}
          <img
            // src="https://d2lnag86znkprh.cloudfront.net/Images/Book/65b8088ea6c92bf273b6312c/thumbnail_1.png"
            src={`https://brajsundar.s3.ap-south-1.amazonaws.com/` + thumbnail}
            alt="book_name"
            className="w-[20rem]"
          />
        </div>

        <div
          className="flex w flex-col p-4 leading-normal max-w-5xl md:max-w-[70%] 
        text-center md:text-left my-auto px-10"
        >
          <h5
            className="mb-2 text-2xl font-bold
             tracking-tight text-gray-200 max-w-5xl 2xl:text-3xl"
          >
            {bookName}
          </h5>
          {/* <p className="mb-3 font-normal text-gray-200 w-3xl">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p> */}
          <p className="mb-3 font-normal text-gray-200 w-3xl  2xl:text-xl">
            {trimmedBookDetail}
          </p>
          <div
            className="relative z-0 w-full mb-5 group my-2
           flex flex-col gap-10"
          >
            <div className="relative z-0 w-full group md:w-full ">
              <select
                id="countries"
                className=" border border-white/30 text-gray-900
                 text-md   rounded-lg focus:ring-blue-500 
                 block w-full p-2.5  
                 placeholder-gray-400 text-white/70 bg-gray-900 w-[50%] md:w-[100%] mx-auto md:mx-0 2xl:p-4
                  2xl:text-xl"
                onChange={handleCountryChange}
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="IN">India</option>
              </select>
            </div>
            <div className="mx-auto items-center justify-center my-3 my-auto">
              {" "}
              {view && (
                <a
                  href={amazonLink}
                  target="_blank"
                  className="text-white    focus:outline-none 
                font-medium rounded-lg text-md w-full 
                sm:w-auto px-20 py-2.5   text-center border 
                hover:bg-white/10 2xl:py-4 2xl:text-xl my-auto"
                >
                  Purchase
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};

export default VideoCard;
