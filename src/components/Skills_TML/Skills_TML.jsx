import React, { useEffect, useState } from 'react'
import './style.css'
import { Cross, ReadMore, ScrollVertical, SwipeRight } from '../Svgs';
import data from '../../data/skillsContent.json'
import tagsColor from '../../data/tags.json'

const years = ["2024", "2023", "2022", "2021"];
const months = ["July", "June", "May", "October", "August", "June", "November", "September", "July", "June", "May", "April", "March", "February"];

function Skills_TML({setOverview}) {

//   function random(min, max) {
//         return min + Math.random() * (max + 1 - min);
//     }
    
//     useEffect(() => {
//         const container = document.getElementsByClassName('tml_stars_container')[0];
//         const canvasSize = container.offsetWidth * container.offsetHeight;
//         const starsFraction = canvasSize / 2000;

//         for(let i = 0; i < starsFraction; i++) {
//             let xPos = random(0, 100);
//             let yPos = random(-100, 100);
//             let size = random(0.1, 0.5);
//             let alpha = random(0.1,0.2);
//             let opacity1 = random(10,50);
//             let opacity2 = random(10,20);
//             let colour = '#ffffff';

//             const temp = [
//                     { opacity: opacity1 + "%" },
//                     { opacity: "40%" },
//                     { opacity: opacity1 + "%" }
//                 ];
//                 const temp_timing = {
//                 duration: 3000,
//                 iterations: Infinity,
//                 };
//             const star = document.createElement('div');
//             star.style.position = 'relative';
//             star.style.left = xPos + '%';
//             star.style.top = yPos + '%';
//             star.style.width = size + 'px';
//             star.style.height = size + 'px';
//             star.style.backgroundColor = colour;
//             star.style.opacity = '0.2';
//             star.style.boxShadow = `0px 0px 1px .5px rgba(255,255,255,${alpha})`
//             star.style.borderRadius = '50%';
//             star.style.transition = 'all 2s ease'
//             star.animate(temp, temp_timing);
//             container.appendChild(star);
//         }
//     }, [])


    

    const handleComponentChange = () => {
        const timeline_parent_desktop = document.querySelectorAll('.timeline_parent_desktop')[0];
        const timeline_parent_mobile = document.querySelectorAll('.timeline_parent_mobile')[0];
        const tml_inner_switch_desktop = document.querySelectorAll('.tml_inner_switch_desktop')[0];
        const tml_inner_switch_mobile = document.querySelectorAll('.tml_inner_switch_mobile')[0];
        const tml_text_desktop = document.querySelectorAll('.tml_text_desktop')[0];
        const tml_text_mobile = document.querySelectorAll('.tml_text_mobile')[0];
        

        tml_inner_switch_desktop.classList.remove('bg-[#FFADAD]');
        tml_inner_switch_desktop.classList.remove('shadow-[0px_0px_10px_5px_#ffadad50]')
        tml_inner_switch_desktop.classList.add('translate-x-[-300%]');
        tml_inner_switch_desktop.classList.add('bg-[#1a8cff]')
        tml_inner_switch_desktop.classList.add('shadow-[0px_0px_10px_5px_#1a8dff4e]')

        tml_inner_switch_mobile.classList.remove('bg-[#FFADAD]')
        tml_inner_switch_mobile.classList.remove('shadow-[0px_0px_10px_5px_#ffadad50]')
        tml_inner_switch_mobile.classList.add('translate-x-[-300%]');
        tml_inner_switch_mobile.classList.add('bg-[#1a8cff]');
        tml_inner_switch_mobile.classList.add('shadow-[0px_0px_10px_5px_#1a8dff4e]')

        setTimeout(() => {
            timeline_parent_desktop.classList.add('page_transition_TML');
            tml_text_desktop.classList.add('translate-x-[-100%]');

            timeline_parent_mobile.classList.add('page_transition_TML');
            tml_text_mobile.classList.add('page_transition_TML');
        }, 200)
        setTimeout(() => {setOverview(true);}, 700)

        
        setTimeout(() => {
            tml_inner_switch_desktop.classList.remove('bg-[#1a8cff]')
            tml_inner_switch_desktop.classList.remove('shadow-[0px_0px_10px_5px_#1a8dff4e]')
            tml_inner_switch_desktop.classList.remove('translate-x-[-300%]');
            tml_inner_switch_desktop.classList.add('bg-[#FFADAD]');
            tml_inner_switch_desktop.classList.add('shadow-[0px_0px_10px_5px_#ffadad50]')
            timeline_parent_desktop.classList.remove('page_transition_TML');
            tml_text_desktop.classList.remove('translate-x-[-100%]');
            

            tml_inner_switch_mobile.classList.remove('translate-x-[300%]');
            tml_inner_switch_mobile.classList.remove('bg-[#1a8cff]');
            tml_inner_switch_mobile.classList.remove('shadow-[0px_0px_10px_5px_#1a8dff4e]')
            timeline_parent_mobile.classList.remove('page_transition_TML');
            tml_text_mobile.classList.remove('page_transition_TML');
            tml_inner_switch_mobile.classList.add('bg-[#FFADAD]')
            tml_inner_switch_mobile.classList.add('shadow-[0px_0px_10px_5px_#ffadad50]')

        }, 800)
        
    }

    const handleGotit = (e) => {
        e.preventDefault();
        const timeline_content_view = document.querySelectorAll('.timeline_content_view')[0];
        const timeline_project_desktop = document.querySelectorAll('.timeline_project_desktop');

        timeline_project_desktop.forEach((project) => {
            project.classList.remove('blur');
        })


        
        timeline_content_view.classList.add('hidden');
    }

    const handleGotit_mobile = (e) => {
        e.preventDefault();
        const timeline_content_view_mobile = document.querySelectorAll('.timeline_content_view_mobile')[0];
        const timeline_project_mobile = document.querySelectorAll('.timeline_project_mobile');

        timeline_project_mobile.forEach((project) => {
            project.classList.remove('blur');
        })


        
        timeline_content_view_mobile.classList.add('hidden');
    }
    

    useEffect(() => {
        const timeline_content_desktop = document.querySelectorAll('.timeline_content_desktop')[0];
        const timeline_months_desktop = document.querySelectorAll('.timeline_months_desktop')[0];
        const timeline_years_desktop = document.querySelectorAll('.timeline_years_desktop')[0];

        const timeline_content_mobile = document.querySelectorAll('.timeline_content_mobile')[0];
        const timeline_months_mobile = document.querySelectorAll('.timeline_months_mobile')[0];
        const timeline_years_mobile = document.querySelectorAll('.timeline_years_mobile')[0];

        timeline_content_desktop.addEventListener('scroll', (e) => {
            let x = Math.floor((e.target.scrollTop + (e.target.offsetHeight/2)) / e.target.offsetHeight);
            

            let y = timeline_months_desktop.offsetHeight;
            let z = timeline_months_desktop.scrollTop;
            
            
            // timeline_content_desktop.scrollTop = x*y;
            timeline_months_desktop.scrollTop = x*y;

            if(x >=0 && x <= 2) timeline_years_desktop.scrollTop = 0 * timeline_years_desktop.offsetHeight;
            else if(x >=3 && x <= 5) timeline_years_desktop.scrollTop = 1 * timeline_years_desktop.offsetHeight;
            else if(x >=6 && x <= 7) timeline_years_desktop.scrollTop = 2 * timeline_years_desktop.offsetHeight;
            else if(x >=8 && x <= 13) timeline_years_desktop.scrollTop = 3 * timeline_years_desktop.offsetHeight;
            
            
        })

        timeline_content_mobile.addEventListener('scroll', (e) => {
            let x = Math.floor((e.target.scrollLeft + (e.target.offsetWidth/2)) / e.target.offsetWidth);
            

            let y = timeline_months_mobile.offsetWidth;
            let z = timeline_months_mobile.scrollLeft
            
            
            // timeline_content_desktop.scrollTop = x*y;
            timeline_months_mobile.scrollLeft = x*y;

            if(x >=0 && x <= 2) timeline_years_mobile.scrollLeft = 0 * timeline_years_mobile.offsetWidth;
            else if(x >=3 && x <= 5) timeline_years_mobile.scrollLeft = 1 * timeline_years_mobile.offsetWidth;
            else if(x >=6 && x <= 7) timeline_years_mobile.scrollLeft = 2 * timeline_years_mobile.offsetWidth;
            else if(x >=8 && x <= 13) timeline_years_mobile.scrollLeft = 3 * timeline_years_mobile.offsetWidth;
            
            
        })
    }, [])

  return (
    <>
      <div className="tml_stars_container">
        <div className="tml_container h-screen w-full flex flex-col">
          <div className='tml_sidebar_one items-end w-screen h-fit ml-[4.25rem] '>
              <div className='flex h-fit'>
                  <div className='h-[60px] border-[2px] border-white '></div>
              </div>
              <div className='h-fit w-full'>
                  <div className='border-[2px] border-white '></div> 
              </div>
              <p className='text-white  mb-[-.7rem] pl-[.5rem] text-[.8rem] font-[700] tracking-[.5rem]'>SKILLS</p>
              <div className='h-fit w-full mr-[4.25rem]'>
                  <div className='border-[2px] border-white mr-[4.25rem]'></div> 
              </div>
          </div>

          <div className='tml_wrapper w-full flex h-full'>
            <div className='tml_timeline_parent w-full flex'>
                
                <div className='tml_text_desktop justify-center items-center w-[4.25rem] tracking-widest text-[#E69C9C]'>
                    <p>TIMELINE MODE</p>
                </div>
                
                <div className='tml_timeline_desktop h-full w-full'>

                    <div className='timeline_parent_desktop w-full flex items-center justify-center'>

                        <div className="timeline_years_desktop overflow-hidden scroll-smooth flex flex-col items-center">
                            {
                                years.map((year, index) => (
                                <p key={index} className='pt-2 pb-2 h-full w-full flex flex-shrink-0 justify-center items-center'>
                                    {year}
                                </p>
                                ))
                            }
                        </div>
                        <div className="timeline_border_desktop h-full"></div>
                        <div className="timeline_months_desktop text-white overflow-hidden scroll-smooth flex flex-col items-center">

                            {
                                months.map((month ,index) => (
                                <p key={index} className='pt-2 pb-2 h-full w-full flex flex-shrink-0 justify-center items-center'>
                                    {month}
                                </p>
                                ))
                            }

                        </div>
                        <div className='timeline_content_parent_desktop rounded-lg flex'>

                            <div className="timeline_content_desktop rounded-lg flex-shrink-0 text-white overflow-y-scroll overflow-x-hidden scroll-smooth">
                                
                                {
                                    data.map((project, index) => {
                                        const [seeAll, setSeeAll] = useState(false);
                                        return (
                                            <div key={index} className='timeline_project_desktop blur relative rounded-lg w-full h-full flex flex-col justify-between flex-shrink-0'>
                                                <p className='project_title_desktop'>
                                                    {project.title}
                                                </p>
                                                <p className='project_description_desktop'>
                                                    {project.description}
                                                </p>
                                                <div key={index} className='project_technologies_desktop w-fit h-fit flex items-center'>
                                                    <span className='project_text_desktop flex-shrink-0'>Technologies : </span>
                                                    {
                                                        project.tags.map((tag, index) => (
                                                            (index <= 2) ? (<p key={index} className='project_tags_desktop rounded-lg' style={{'color': tagsColor[tag], 'textShadow': `0px 0px 3px ${tagsColor[tag]}`}}>{tag}</p>) : (<></>)
                                                        ))
                                                    }
                                                    {
                                                        (project.tags.length > 3) ? (
                                                            <div onClick={() => {setSeeAll(true)}} title='see all' className='tags_readmore_desktop ml-2 cursor-pointer'>
                                                                <ReadMore />
                                                            </div>
                                                        ) : (<></>)
                                                    }
                                                </div>
                                                <div className={`${((seeAll) ? 'flex flex-wrap' : ' hidden')} items-center justify-center w-full absolute bottom-5 left-0 bg-[rgba(0,0,0,1)]`}>

                                                    {
                                                        project.tags.map((tag, index) => (
                                                            (<p key={index} className='project_tags_desktop rounded-lg ml-2 mt-2 mb-2' style={{'color': tagsColor[tag], 'textShadow': `0px 0px 3px ${tagsColor[tag]}`}}>{tag}</p>)
                                                        ))
                                                    }
                                                    <div onClick={() => {setSeeAll(false)}} className='h-fit w-fit ml-2 border-2 rounded-full cursor-pointer'>
                                                        <Cross />
                                                    </div>

                                                </div>
                                            </div>
                                        )

                                    })
                                }


                            </div>

                            <div className='timeline_content_view rounded-lg'>
                                <ScrollVertical />
                                <span className='scroll_text_dekstop'>SCROLL DOWN HERE</span>
                                <button onClick={handleGotit} className='scroll_button_desktop'>
                                    Got it
                                </button>
                            </div>

                        </div>
                        

                    </div>

                    <div className='tml_switch_parent_desktop flex flex-col justify-center items-center'>
                        <p className='tml_switch_p_desktop text-white font-light text-[14px] tracking-[3px]'>switch to overview mode</p>
                        <div onClick={handleComponentChange} className='tml_switch_desktop cursor-pointer mt-2 rounded-md flex justify-end items-center pl-3 pr-3'>
                            <div className='tml_inner_switch_desktop rounded-md shadow-[0px_0px_10px_5px_#ffadad50] bg-[#FFADAD] '></div>
                        </div>
                    </div>

                </div>

                <div className='tml_timeline_mobile h-full w-full'>
                                
                    <div className='tml_text_mobile tracking-[5px] w-full mt-4'>
                        <p>TIMELINE MODE</p>
                    </div>
                    
                    <div className='timeline_parent_mobile w-screen h-fit'>
                        
                        <div className="timeline_years_mobile overflow-hidden scroll-smooth flex ">
                            {
                                years.map((year, index) => (
                                <p key={index} className='h-full w-full flex flex-row flex-shrink-0 justify-center items-center'>
                                    {year}
                                </p>
                                ))
                            }
                        </div>
                        <div className="timeline_border_mobile w-[300px]"></div>
                        <div className="timeline_months_mobile overflow-hidden text-white scroll-smooth flex">

                            {
                                months.map((month ,index) => (
                                <p key={index} className='h-full w-full flex flex-row flex-shrink-0 justify-center items-center'>
                                    {month}
                                </p>
                                ))
                            }

                        </div>
                        <div className='timeline_content_parent_mobile rounded-lg flex'>

                            <div className="timeline_content_mobile flex rounded-lg flex-shrink-0 text-white overflow-x-scroll overflow-y-hidden scroll-smooth">
                                
                                {
                                    data.map((project, index) => {
                                        const [seeAll, setSeeAll] = useState(false);
                                        return (
                                            <div key={index} className='timeline_project_mobile blur relative rounded-lg w-full h-full flex flex-col justify-between flex-shrink-0'>
                                                <p className='project_title_mobile'>
                                                    {project.title}
                                                </p>
                                                <p className='project_description_mobile'>
                                                    {project.description}
                                                </p>
                                                <div key={index} className='project_technologies_mobile w-fit h-fit flex items-center'>
                                                    <span className='project_text_mobile flex-shrink-0'>Technologies : </span>
                                                    {
                                                        project.tags.map((tag, index) => (
                                                            (index < 2) ? (<p key={index} className='project_tags_mobile rounded-md' style={{'color': tagsColor[tag], 'textShadow': `0px 0px 3px ${tagsColor[tag]}`}}>{tag}</p>) : (<></>)
                                                        ))
                                                    }
                                                    {
                                                        (project.tags.length > 2) ? (
                                                            <div onClick={() => {setSeeAll(true)}} title='see all' className='tags_readmore_mobile ml-2 cursor-pointer'>
                                                                <ReadMore />
                                                            </div>
                                                        ) : (<></>)
                                                    }
                                                </div>
                                                <div className={`${((seeAll) ? 'flex flex-wrap' : ' hidden')} items-center justify-center w-full absolute bottom-5 left-0 bg-[rgba(0,0,0,1)]`}>

                                                    {
                                                        project.tags.map((tag, index) => (
                                                            (<p key={index} className='project_tags_mobile rounded-md ml-2 mt-2 mb-2' style={{'color': tagsColor[tag], 'textShadow': `0px 0px 2px ${tagsColor[tag]}`}}>{tag}</p>)
                                                        ))
                                                    }
                                                    <div onClick={() => {setSeeAll(false)}} className='h-fit w-fit ml-2 border-[1px] rounded-full cursor-pointer'>
                                                        <Cross />
                                                    </div>

                                                </div>
                                            </div>
                                        )

                                    })
                                }


                            </div>

                            <div className='timeline_content_view_mobile rounded-lg'>
                                <SwipeRight />
                                <span className='scroll_text_mobile'>SCROLL RIGHT HERE</span>
                                <button onClick={handleGotit_mobile} className='scroll_button_mobile'>
                                    Got it
                                </button>
                            </div>

                        </div>

                        
                    </div>
                
                    <div className='mb-4'>
                        <div className='tml_switch_parent_mobile flex flex-col justify-center items-center'>
                            <p className='tml_switch_p_mobile text-white font-light text-[10px] tracking-[3px]'>switch to overview mode</p>
                            <div onClick={handleComponentChange} className='tml_switch_mobile cursor-pointer mt-2 rounded-sm flex justify-end items-center pl-[.4rem] pr-[.4rem]'>
                                <div className='tml_inner_switch_mobile rounded-sm shadow-[0px_0px_10px_5px_#ffadad50] bg-[#FFADAD]'></div>
                            </div>
                        </div>
                    </div>

                </div>


                
            </div>
            <div className='tml_sidebar_two h-full'>
                <div className='h-full border-[2px] border-white mr-[3.95rem]'></div>
            </div>
        </div>


        </div>
      </div>

    </>
  )
}

export default Skills_TML