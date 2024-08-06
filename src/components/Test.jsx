import React from 'react'
import data from '../data/skillsContent.json'
import tagsColor from '../data/tags.json'
import './style.css'
import Marquee from "react-fast-marquee";

const tags = ["ReactJS", "MongoDB", "mongoose", "NodeJS", "ExpressJS", "Javascript", "Socket.io", "Encryption", "CSS"]

function Test() {
  return (
    <>
        <div className=' h-screen w-full flex justify-center items-center'>
            <div className='w-[40%] flex items-center h-fit overflow-hidden p-2'>
                <Marquee className='p-2'>
                    {
                        tags.map((tag) => (
                            <span className='tags pl-2 pr-2 pt-1 pb-1 ml-4 bg-gray-200 rounded-md flex-shrink-0'>{tag}</span>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    </>
  )
}

export default Test