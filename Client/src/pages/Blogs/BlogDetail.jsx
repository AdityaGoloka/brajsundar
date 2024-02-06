import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const [singleBlogData, setSingleBlogData] = useState({});

    useEffect(() => {
        const getSingleBlogData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/articles/getArticle/${id}`);
                const blog = response.data.findArticle;
                console.log(blog);
                setSingleBlogData(blog);
            } catch (error) {
                console.log("Error Fetching Blog Data: ", error);
            }
        }

        getSingleBlogData();
    }, [id]);

    const formatDate = (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleDateString();
    };

    return (
        <div>
            <div className="min-h-screen">
                <div className="container mx-auto p-6">
                    <div className="max-w-3xl mx-auto rounded-md shadow-md overflow-hidden">
                        {/* Blog Image */}
                        <img
                            src={singleBlogData.thumbnail} // Replace with your actual image source
                            alt={singleBlogData.title}
                            className="w-full h-64 object-contain object-center"
                        />

                        {/* Blog Details */}
                        <div className="p-6">
                            {/* Blog Title */}
                            <h1 className="text-3xl font-semibold mb-4">{singleBlogData.title}</h1>

                            {/* Published Date */}
                            <p className="text-gray-500 mb-4">Published on: {formatDate(singleBlogData.createdAt)}</p>

                            {/* Blog Content */}
                            <div className="prose max-w-full">
                                {/* Replace the content below with your actual blog content */}
                                <p>
                                    {singleBlogData.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
