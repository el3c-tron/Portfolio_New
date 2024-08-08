import React from 'react'
import './style.css'
import Github from '../Svgs/Github/Github'
import Linkedin from '../Svgs/Linkedin/Linkedin'
import Gmail from '../Svgs/Gmail/Gmail'
import { Board } from '../Svgs'

function Home() {

    return (
        <>
            <div className='home_container flex w-full overflow-hidden'>
                <div className='home_left flex flex-col'>
                    <div className='home_name flex justify-center items-center '>
                        <p className='home_name_p font-["Style_Script"] font-normal'>
                            Aniket Kumar
                        </p>
                    </div>

                    <div className='home_content flex flex-col'>
                        <p className='home_content_first font-light tracking-widest'>
                            Hi
                        </p>
                        <p className='home_content_second font-light tracking-widest'>
                            i'm a <span className='home_content_span font-semibold text-[#009DFF]'>Web Developer</span>
                        </p>
                        <p className='home_content_third font-light tracking-widest text-gray-600'>
                            trying to bring <span className='font-semibold text-black'>imagination</span> over the web
                        </p>
                    </div>

                    <div className='home_button_parent flex flex-col'>
                        <button className='home_button hover:shadow-shadow-[0px_0px_10px_2px_#1a8dff3c] hover:opacity-90 rounded-md shadow-[0px_0px_20px_5px_#1a8dff3c] leading-[20px] cursor-pointer transition-all ease-in-out duration-[0.3s] text-white font-semibold tracking-widest'>
                            Resume
                        </button>

                    </div>

                    <div className='home_sidebar ml-[3.8rem] mt-[4rem]'>

                        <div className='flex ml-[6.3px]'>
                            <div className='border-[3.5px] border-black rotate-45'></div>
                        </div>

                        <div className='overflow-hidden flex ml-[8px]'>
                            <div className='h-[90px] border-[2px] border-black '></div>
                        </div>

                        <div>
                            <p className='home_home'>
                                HOME
                            </p>
                        </div>

                        <div className='overflow-hidden flex ml-[8px] h-full'>
                            <div className='h-screen border-[2px] border-black '></div>
                        </div>

                        
                    </div>
                </div>
                <div className='home_right flex flex-col'>
                    <div className='board_parent h-fit w-fit'>
                            <Board />
                    </div>
                    <div className='home_image_parent flex '>
                        <img 
                            src='/hero-1.png'
                            alt='hero'
                            className='home_parent'
                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home