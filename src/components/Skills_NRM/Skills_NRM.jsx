import React, { useEffect } from 'react'
import './style.css'
import { Cpp, Css, Express, Git, Html, Javascript, Mongodb, Mysql, Nextjs, Nodejs, Reactjs, TailwindCSS, Typescript } from '../Svgs'

function Skills_NRM() {
    function random(min, max) {
        return min + Math.random() * (max + 1 - min);
    }
    
    useEffect(() => {
        const container = document.getElementsByClassName('nrm_stars_container')[0];
        const canvasSize = container.offsetWidth * container.offsetHeight;
        const starsFraction = canvasSize / 2000;

        for(let i = 0; i < starsFraction; i++) {
            let xPos = random(0, 100);
            let yPos = random(-100, 100);
            let size = random(0.1, 0.5);
            let alpha = random(0.1,0.2);
            let opacity1 = random(10,50);
            let opacity2 = random(10,20);
            let colour = '#ffffff';

            const temp = [
                    { opacity: opacity1 + "%" },
                    { opacity: "40%" },
                    { opacity: opacity1 + "%" }
                ];
                const temp_timing = {
                duration: 3000,
                iterations: Infinity,
                };
            const star = document.createElement('div');
            star.style.position = 'relative';
            star.style.left = xPos + '%';
            star.style.top = yPos + '%';
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.backgroundColor = colour;
            star.style.boxShadow = `0px 0px 1px .5px rgba(255,255,255,${alpha})`
            star.style.borderRadius = '50%';
            star.style.transition = 'all 2s ease'
            star.animate(temp, temp_timing);
            container.appendChild(star);
        }
    }, [])
    return (
        <>
            <div className='nrm_stars_container '>
                <div className='nrm_container h-screen w-full flex flex-col'>
                    <div className='nrm_sidebar_one items-end w-screen h-fit ml-[4.25rem] '>
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

                    <div className='nrm_wrapper w-full flex h-full'>
                        <div className='nrm_icons_parent w-full flex'>
                            
                            <div className='nrm_text_desktop justify-center items-center w-[4.25rem] tracking-widest text-[#1a8cff]'>
                                <p>OVERVIEW MODE</p>
                            </div>
                            
                            
                            <div className='nrm_icons_desktop h-full w-full'>
                                
                                <div className='icons_parent_desktop w-full'>
                                    <div className='icons_div_desktop flex items-center'>
                                        
                                        <div className='invisible_icon_desktop'></div>
                                        
                                        <div className='icon_desktop'>
                                            <Typescript />
                                        </div>

                                        <div className='icon_desktop'>
                                            <Nodejs />
                                        </div>

                                        <div className='icon_desktop'>
                                            <Git />
                                        </div>

                                        <div className='icon_desktop'>
                                            <Css />
                                        </div>
                                    </div>
                                    <div className='icons_div_desktop flex items-center'>
                                        <div className='icon_desktop'>
                                            <Reactjs />
                                        </div>
                                        <div className='icon_desktop'>
                                            <Mongodb />
                                        </div>
                                        <div className='icon_desktop'>
                                            <Nextjs />
                                        </div>
                                        <div className='icon_desktop'>
                                            <Mysql />
                                        </div>
                                        <div className='icon_desktop'>
                                            <Javascript />
                                        </div>
                                    </div>
                                    <div className='icons_div_desktop flex items-center'>
                                        
                                        <div className='icon_desktop'>
                                            <TailwindCSS />
                                        </div>
                                        <div className='icon_desktop'>
                                            <Html />
                                        </div>
                                        <div className='icon_desktop'>
                                            <Cpp />
                                        </div>
                                        <div className='icon_desktop'>
                                            <Express />
                                        </div>

                                        <div className='invisible_icon_desktop'></div>

                                    </div>
                                </div>

                                <div className='switch_parent_desktop flex flex-col justify-center items-center'>
                                    <p className='switch_p_desktop text-white font-light text-[14px] tracking-[3px]'>switch to timeline mode</p>
                                    <div className='switch_desktop cursor-pointer mt-2 rounded-md flex justify-start items-center pl-3'>
                                        <div className='inner_switch_desktop rounded-md'></div>
                                    </div>
                                </div>

                            </div>


                            <div className='nrm_icons_mobile h-full w-full'>
                                
                                <div className='nrm_text_mobile tracking-[5px] w-full mt-4'>
                                    <p>OVERVIEW MODE</p>
                                </div>
                                
                                <div className='icons_parent_mobile w-full h-fit'>
                                    <div className='icons_div_mobile'>
                                        <div className='icon_mobile'>
                                            <Typescript />
                                        </div>
                                        <div className='icon_mobile'>
                                            <Nodejs />
                                        </div>
                                        <div className='icon_mobile'>
                                            <Git />
                                        </div>
                                    </div>
                                    <div className='icons_div_mobile'>
                                        <div className='icon_mobile'>
                                            <Css />
                                        </div>
                                        <div className='icon_mobile'>
                                            <Mongodb />
                                        </div>
                                        <div className='icon_mobile'>
                                            <Reactjs />
                                        </div>
                                    </div>
                                    <div className='icons_div_mobile'>
                                        <div className='invisible_icon_mobile'></div>
                                        <div className='icon_mobile'>
                                            <Nextjs />
                                        </div>
                                        <div className='invisible_icon_mobile'></div>
                                    </div>
                                    <div className='icons_div_mobile'>
                                        <div className='icon_mobile'>
                                            <Mysql />
                                        </div>
                                        <div className='icon_mobile'>
                                            <Javascript />
                                        </div>
                                        <div className='icon_mobile'>
                                            <TailwindCSS />
                                        </div>
                                    </div>
                                    <div className='icons_div_mobile'>
                                        <div className='icon_mobile'>
                                            <Html />
                                        </div>
                                        <div className='icon_mobile'>
                                            <Cpp />
                                        </div>
                                        <div className='icon_mobile'>
                                            <Express />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='mb-4'>
                                    <div className='switch_parent_mobile flex flex-col justify-center items-center'>
                                        <p className='switch_p_mobile text-white font-light text-[10px] tracking-[3px]'>switch to timeline mode</p>
                                        <div className='switch_mobile cursor-pointer mt-2 rounded-sm flex justify-start items-center pl-1'>
                                            <div className='inner_switch_mobile rounded-sm'></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='nrm_sidebar_two h-full'>
                            <div className='h-full border-[2px] border-white mr-[3.95rem]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills_NRM