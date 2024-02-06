import React from 'react'

const ReelCard = ({ reelName, url, reelThumbnail }) => {
    return (
        <div>
            <a href={url} target='_blank'>
                <div className="flex flex-col border rounded-lg shadow md:flex-row max-w-xl bg-transparent border-none cursor-pointer hover:bg-white/5 py-5">
                    <div className="max-w-xs">
                        <img src={reelThumbnail} target='_blank' className='rounded-t-lg' />
                    </div>

                    <div className="flex flex-col p-4 leading-normal max-w-5xl">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-5xl">
                            {reelName}
                        </h5>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ReelCard