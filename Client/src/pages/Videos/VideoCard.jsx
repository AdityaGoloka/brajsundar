import React from 'react'

const VideoCard = ({ videoName, video_url }) => {

    const getYoutubeVideoId = (url) => {
        const regex = /[?&]v=([^?&]+)/;
        const match = url.match(regex);
        return match && match[1];
    };

    return (
        <div>
            <div className="flex flex-col border rounded-lg shadow md:flex-row max-w-3xl bg-transparent border-none cursor-pointer hover:bg-white/5 py-5">
                <div className="max-w-xs">
                    <iframe 
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(video_url)}`} 
                    alt="video" 
                    className='rounded-t-lg' />

                </div>

                <div className="flex w flex-col p-4 leading-normal max-w-5xl">
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-white max-w-5xl'>{videoName}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-3xl">
                        Here are the biggest enterprise technology acquisitions of 2021 so
                        far, in reverse chronological order.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard