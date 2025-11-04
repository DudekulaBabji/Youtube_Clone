import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utills/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utills/helper'

export const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(()=>{
       const i= setInterval(() => {

        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20),
        }))
            
        },1500);
        return () => clearInterval(i);

    },[])

  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>{chatMessages.map((c, i) =>(<ChatMessage 
        key={i}
        name={c.name}
        message={c.message} />))}
        </div>
       
    </div>
     <form className='w-full p-2 ml-2 border border-black flex' onSubmit={(e)=>{
      e.preventDefault()
      console.log("ON FROM ", liveMessage)
      dispatch(addMessage({
        name:"Babji Aryan",
        message: liveMessage,
      }))
      setLiveMessage("")
     }}>
        <input className='px-2 w-96' type='text' value={liveMessage} onChange={(e)=>{
          setLiveMessage(e.target.value)
        }} />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}