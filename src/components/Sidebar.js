import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Home, PlayCircle, Tv, Radio, Music, Trophy, Gamepad2, Film, Flame, Lightbulb, Newspaper, Globe } from 'lucide-react';



const Sidebar = () => {
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
    //early return pattern
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48 h-screen'>
        <ul className="space-y-3">
            <li className='flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition'><Link to="/" className='flex items-center gap-3'><Home size={18} />Home</Link></li>
            <li className='flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition'><PlayCircle size={18} />Shorts</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"> <Tv size={18} />Videos</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Radio size={18} />Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul className="space-y-2">
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Music size={18} />Music</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Trophy size={18} />Sports</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Gamepad2 size={18} />Gaming</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Film size={18} />Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul className="space-y-2">
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Flame size={18} />Trending</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Lightbulb size={18} />Learning</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"><Newspaper size={18} />News</li>
            <li className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition"> <Globe size={18} />Travel</li>
        </ul>
    </div>
  )
}

export default Sidebar;