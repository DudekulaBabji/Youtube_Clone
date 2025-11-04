import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utills/appSlice';
import { YOUTUBE_SEARCH_API } from '../utills/contants';
import { FaSearch } from "react-icons/fa";
import { cacheResults } from '../utills/searchSlice';

export const Head = () => {
const [searchQuery, setSearchQuery]= useState("");
const [suggestions, setSuggestions] = useState([]);
const[showSuggestions, setShowSuggestions]= useState(false);

const searchCache = useSelector((store)=> store.search);
const dispatch= useDispatch()

useEffect(() => {
  const timer = setTimeout(() => {
    if (searchQuery === "") return; // prevent empty search
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions();
    }
  }, 200);

  return () => {
    clearTimeout(timer);
  };
}, [searchQuery]);

const getSearchSuggestions = async ()=>{


    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
    //console.log(json[1])

    dispatch(cacheResults({
        [searchQuery] : json[1],
    }))
}

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-9 cursor-pointer'
        alt='menu'
         src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/>
         <a href="/">
        <img 
        className='h-9 mx-2'
        alt='logo'
         src="https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png"/>
         </a>
        </div>
        <div className='col-span-10 px-10'> 
            <div>
            <input 
            className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
            type='text'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}

            />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
                🔍</button>
            </div>

            {showSuggestions && (
                <div className='fixed bg-white py-2 px-2 w-[35.5rem] shadow-lg rounded-lg border border-gray-100 absolute'>
                <ul>
                    {suggestions.map((s)=>(<li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100 flex'><FaSearch className="my-1 mr-2" />{s}</li>))}
                </ul>
            </div>)}

        </div>
        <div className='col-span-1'>
            <img 
            className='h-9'
            alt='user'
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"/>

        </div>
    </div>
  )
}
export default Head;