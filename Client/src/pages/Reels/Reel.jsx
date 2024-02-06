import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RateDropDown from './RateDropDown';
import RatingCard from '../Videos/RatingCard';
import VideoDuration from '../Videos/VideoDuration';
import ReelCard from './ReelCard';
import PriceFilterCard from '../Videos/PriceFilterCard';

const Reel = () => {
    const [reelData, setReelData] = useState([]);

    useEffect(() => {
        const getAllReels = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/reels/getReels");
                console.log(response.data.data);
                setReelData(response.data.data);
            } catch (error) {
                console.log("Error Fetching Reels: ", error);
            }
        }

        getAllReels();
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-bold mb-7">Reels</h1>
            </div>{" "}

            <div className='mx-[7rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
                {reelData.map((reel) => (
                    <ReelCard
                        key={reel.id}
                        reelName={reel.reelName}
                        url={reel.url}
                        reelThumbnail={reel.reelThumbnail}
                    />
                ))}
            </div>
        </div>
    )
}

export default Reel