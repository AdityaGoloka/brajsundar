import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/articles/getArticles"
        );
        console.log(response.data.data);
        setBlogData(response.data.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getAllBlogs();
  }, []);

  return (
    <div>
      <h1 className="mx-auto text-3xl items-center font-bold text-center">
        Blogs
      </h1>
      <div className="mx-[5rem] my-[2rem] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto items-center justify-center gap-5">
        {blogData.map((data, index) => (
          <div key={index}>
            <BlogCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
