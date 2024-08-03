import React, { useEffect } from 'react'
import data from '../data/skillsContent.json'
import tagsColors from '../data/tags.json'

const years = ["2024", "2023", "2022", "2021"];
const months = ["July", "June", "May", "October", "August", "June", "November", "September", "July", "June", "May", "April", "March", "February"];


function test() {

  useEffect(() => {

    const scrollable = document.querySelectorAll('.scrollable')[0];
    const months = document.querySelectorAll('.months')[0];
    const years = document.querySelectorAll('.years')[0];

    scrollable.addEventListener('scroll', (e) => {
      let x = Math.floor((e.target.scrollLeft + (e.target.offsetWidth/2)) / e.target.offsetWidth);
      

      let y = months.offsetWidth;
      let z = months.scrollTop;

      months.scrollLeft = x*y;

      if(x >=0 && x <= 2) years.scrollLeft = 0 * years.offsetWidth;
      else if(x >=3 && x <= 5) years.scrollLeft = 1 * years.offsetWidth;
      else if(x >=6 && x <= 7) years.scrollLeft = 2 * years.offsetWidth;
      else if(x >=8 && x <= 13) years.scrollLeft = 3 * years.offsetWidth;
      
      
    })

  }, [])



  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center p-2'>

        <div className="years h-[10%] w-[10%] scroll-smooth rounded-md bg-yellow-300 mr-2 overflow-hidden text-white flex">
          {
            years.map((year, index) => (
              <div key={index} className='h-full w-full bg-red-300 flex flex-shrink-0 justify-center items-center text-[2rem] font-bold'>
                {year}
              </div>
            ))
          }
        </div>

        <div className='months h-[10%] w-[10%] scroll-smooth flex rounded-md bg-yellow-300 mr-2 overflow-hidden text-white '>
          {
            months.map((month ,index) => (
              <div key={index} className='h-full w-full bg-red-300 flex flex-shrink-0 justify-center items-center text-[2rem] font-bold'>
                {month}
              </div>
            ))
          }
        </div>

        <div className='bg-black flex overflow-x-scroll justify-start scrollable scroll-smooth h-[50%] w-[50%] text-white rounded-md  shadow-[0px_0px_10px_5px_rgba(1,1,1,.5)]'>

          {
            data.map((project, index) => (
              <div key={index} className='w-full bg-red-500 border-2 border-white rounded-md flex-shrink-0'>
                <p className='mb-[2rem]'>
                  {project.title}
                </p>

                <p className='mb-[2rem]'>
                  {project.description}
                </p>

                <div>
                  {
                    project.tags.map((tag, index) => (
                      <span key={index} className={`p-1`} style={{'color': tagsColors[tag]}}>{tag}</span>
                    ))
                  }
                </div>
              </div>
            ))
          }

          
        </div>
      </div>
    </>
  )
}

export default test

// h-full w-full bg-red-300 flex justify-center items-center text-[2rem] font-bold