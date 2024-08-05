import React from 'react'
import './style.css'

function Projects() {

  return (
    <>
        <div className="projects_container flex flex-col w-full h-fit">
            <div className='projects_sidebar_one items-end w-full h-fit'>
                
                <div className='h-fit w-full'>
                    <div className='border-[2px] border-black '></div> 
                </div>
                <p className='text-black  mb-[-.5rem] pl-[.5rem] text-[.8rem] font-[700] tracking-[.5rem]'>PROJECTS</p>
                <div className='h-fit w-full'>
                    <div className='border-[2px] border-black '></div> 
                </div>
                <div className='flex h-fit mr-[4rem]'>
                    <div className='h-[60px] border-[2px] border-black'></div>
                </div>
                
            </div>

            <div className='projects_wrapper_desktop'>

                <div className="projects_parent_desktop">

                    <div className="projects_desktop">

                        <div className="projects_left_desktop">
                            <div className="project_big_desktop"></div>
                        </div>
                        
                        <div className="projects_right_desktop">
                            <div className="project_small_desktop"></div>
                            <div className="project_medium_desktop"></div>
                        </div>

                    </div>

                    <div className="projects_desktop">

                        <div className="projects_right_desktop">
                            <div className="project_small_desktop"></div>
                            <div className="project_medium_desktop"></div>
                        </div>

                        <div className="projects_left_desktop">
                            <div className="project_big_desktop"></div>
                        </div>

                    </div>

                    <div className="projects_desktop">

                        <div className="project_medium_desktop"></div>
                        <div className="project_medium_desktop"></div>

                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default Projects