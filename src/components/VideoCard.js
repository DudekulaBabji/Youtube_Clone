import React from 'react'

const VideoCard = ({info}) => {
    //console.log()
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72  h-[280px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col'>
        <img 
        className='w-full h-[160px] object-cover rounded-md'
        src={thumbnails.medium.url}  alt='thumbnail'/>
        <ul className="mt-2 flex-1">
            <li className='font-semibold text-sm leading-tight line-clamp-2'>{title}</li>
            <li className="text-gray-600 text-sm">{channelTitle}</li>
            <li className="text-gray-500 text-xs">{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard