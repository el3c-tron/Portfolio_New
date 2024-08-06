import React, { useEffect } from 'react'
import './style.css'
import Marquee from 'react-fast-marquee';
import tagColors from '../../data/tags.json'
import { DownArrow, Logo, UpArrow } from '../Svgs';

const diary = ["NextJs", "TailwindCSS", "mySQL", "Typescript", "Prisma", "Clerk", "Convex", "shadCn", "Zod"];
const quill = ["NextJs", "Typescript", "TailwindCSS", "mySQL", "Prisma", "OpenAI", "shadCn", "Zod", "_trpc", "Stripe"];
const quillCraft = ["ReactJs", "Javascript", "TailwindCSS", "MongoDB", "mongoose", "NodeJs", "ExpressJs", "Redux", "multer"];
const BlogitOut = ["Ejs", "Javascript", "CSS", "MongoDB", "mongoose", "NodeJs", "ExpressJs", "HTML", "multer"];
const portfolio = ["HTML", "CSS", "Javascript"];
const connect = ["ReactJs", "Javascript", "CSS", "MongoDB", "mongoose", "NodeJs", "ExpressJs", "Redux", "AES-256", "Socket.io"];
const bloodBank = ["Ejs", "Javascript", "CSS", "MongoDB", "mongoose", "NodeJs", "ExpressJs", "HTML", "multer"];
const weather = ["HTML", "CSS", "Javascript", "REST-Api"];

function Projects() {

    useEffect(() => {
        const project_videos_desktop = document.querySelectorAll('.project_videos_desktop');
        // console.log(project_videos_desktop);
        
        project_videos_desktop.forEach((videos) => {
            videos.addEventListener('mouseover', (e) => {
                e.target.play(); 
            })

            videos.addEventListener('mouseleave', (e) => {
                e.target.pause(); 
            })

        })
    }, [])

    const handleClickDown = (e) => {
        // console.log("hello");
        
        let className;
        let tt;
        const name = (e.target.tagName);


        if(name === 'path') {
            className = (e.target.parentElement.parentElement.parentElement.parentElement.classList)[1];
            tt = e.target.parentElement.parentElement.parentElement;
            // console.log(tt);
            
        }
        else {
            className = (e.target.parentElement.parentElement.parentElement.classList)[1];
            tt = e.target.parentElement.parentElement;
            // console.log(tt);
        }
        
        // console.log(className);
        const downArrow = tt.children[0];
        const upArrow = tt.children[1];

        const project_parent = document.querySelectorAll(`.${className}`)[0];
        
        const childNode = (project_parent.children[1]).classList[0];
        // console.log((project_parent.children[1]).classList);
        // console.log(childNode);
        
        
        const temp = document.querySelectorAll(`.${childNode}`)[0];
        // console.log(temp);
        
        temp.classList.remove('notActive');
        temp.classList.add('active');

        downArrow.classList.add('hidden');
        upArrow.classList.remove('hidden');
    }

    const handleClickUp = (e) => {
        let className;
        let tt;

        const name = (e.target.tagName);


        if(name === 'path') {
            className = (e.target.parentElement.parentElement.parentElement.parentElement.classList)[1];
            tt = e.target.parentElement.parentElement.parentElement;
            // console.log(tt);
            
        }
        else {
            className = (e.target.parentElement.parentElement.parentElement.classList)[1];
            tt = e.target.parentElement.parentElement;
            // console.log(tt);
        }

        const downArrow = tt.children[0];
        const upArrow = tt.children[1];

        console.log(downArrow);
        console.log(upArrow);
        
        
        const project_parent = document.querySelectorAll(`.${className}`)[0];
        
        const childNode = (project_parent.children[1]).classList[0];
        // console.log((project_parent.children[1]).classList);
        
        const temp = document.querySelectorAll(`.${childNode}`)[0];
        // console.log(temp);
        
        temp.classList.add('notActive');
        temp.classList.remove('active');

        downArrow.classList.remove('hidden');
        upArrow.classList.add('hidden');
    }

    // useEffect(() => {
        
    //     // console.log(arrow);
    //     let downArrow = document.querySelectorAll('.downArrow')[0];
    //     let upArrow = document.querySelectorAll('.upArrow')[0];
        
    //     downArrow.addEventListener('click', (e) => {
    //     console.log(e.target);
        
    //     const className = (e.target.parentElement.parentElement.parentElement.classList)[1];
    //     // console.log(className);
        

    //     const project_parent = document.querySelectorAll(`.${className}`)[0];
        
    //     const childNode = (project_parent.children[1]).classList[0];
    //     // console.log((project_parent.children[1]).classList);
        
    //     const temp = document.querySelectorAll(`.${childNode}`)[0];
    //     // console.log(temp);
        
    //     temp.classList.remove('max-h-0');
    //     temp.classList.add('max-h-[500px]');

    //     downArrow.classList.add('hidden');
    //     upArrow.classList.remove('hidden');
    // })

    // upArrow.addEventListener('click', (e) => {
    //     console.log(e.target);
    //     const className = (e.target.parentElement.parentElement.parentElement.classList)[1];
        
    //     const project_parent = document.querySelectorAll(`.${className}`)[0];
        
    //     const childNode = (project_parent.children[1]).classList[0];
    //     // console.log((project_parent.children[1]).classList);
        
    //     const temp = document.querySelectorAll(`.${childNode}`)[0];
    //     // console.log(temp);
        
    //     temp.classList.add('max-h-0');
    //     temp.classList.remove('max-h-[500px]');

    //     downArrow.classList.remove('hidden');
    //     upArrow.classList.add('hidden');
    // })
        
    // }, [])

    
    
    // arrow.addEventListener('mouseclick', (e) => {
    //     const className = (e.target.parentElement.parentElement.parentElement.classList)[1];
        
    //     const project_parent = document.querySelectorAll(`.${className}`)[0];
    //     // console.log(className);
        
    //     const childNode = project_parent.children[1];
    //     childNode.classList.remove('overflow-hidden');
    //     childNode.classList.remove('h-[0]');
    //     childNode.classList.add('h-fit');
    // })

    // const handleExpand = (e) => {
    //     const className = (e.target.parentElement.parentElement.parentElement.classList)[1];
        
    //     const project_parent = document.querySelectorAll(`.${className}`)[0];
    //     // console.log(className);
        
    //     const childNode = project_parent.children[1];
    //     childNode.classList.remove('overflow-hidden');
    //     childNode.classList.remove('h-[0]');
    //     childNode.classList.add('h-fit');

    // }

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

                        {/* <div className="projects_desktop">

                            <div className="projects_left_desktop">
                                <div className="project_big_desktop video_1_desktop">
                                    <video className='project_videos_desktop project_big_video_desktop one' src='videos/Diary.mp4' muted />
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_small_desktop video_2_desktop">
                                    <video className='project_videos_desktop project_big_video_desktop' src='videos/Dynamic Weather.mp4' muted />
                                </div>
                                <div className="project_medium_desktop video_3_desktop">
                                    <video className='project_videos_desktop project_big_video_desktop' src='videos/BloodBank.mp4' muted />
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop">

                            <div className="projects_right_desktop">
                                <div className="project_small_desktop video_4_desktop">
                                    <video className='project_videos_desktop project_big_video_desktop' src='videos/Portfolio.mp4' muted />
                                </div>
                                <div className="project_medium_desktop video_5_desktop">
                                    <video className='project_videos_desktop project_big_video_desktop' src='videos/BlogitOut.mp4' muted />
                                </div>
                            </div>

                            <div className="projects_left_desktop">
                                <div className="project_big_desktop ">
                                    <video className='project_videos_desktop project_big_video_desktop' src='videos/Quill.mp4' muted />
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop">

                            <div className="project_medium_desktop ">
                                    <video className='project_videos_desktop project_big_video_desktop video_7_desktop' src='videos/QuillCraft.mp4' muted />
                            </div>
                            <div className="project_medium_desktop ">
                                    <video className='project_videos_desktop project_big_video_desktop video_8_desktop' src='videos/connect.mp4' muted />
                            </div>

                        </div> */}

                        <div className="projects_desktop">

                            <div className="projects_left_desktop">
                                <div className="project_big_desktop project_diary_desktop">
                                    
                                    <video className='project_videos_desktop' src='videos/Diary.mp4' muted />
                                    
                                    <div className='project_details_diary_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[2rem] tracking-widest w-fit font-[700] '>Diary</p>
                                        </div>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Developed a fully-functional Notion clone, enabling users to create, edit, and organize notes and tasks with rich text formatting and real-time collaboration features. The application supports drag-and-drop capabilities, customizable templates, and seamless data synchronization across devices, providing a versatile workspace for both personal and team productivity.</p>
                                            <br></br>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Developed a fully-functional Notion clone, enabling users to create, edit, and organize notes and tasks with rich text formatting and real-time collaboration features. The application supports drag-and-drop capabilities, customizable templates, and seamless data synchronization across devices, providing a versatile workspace for both personal and team productivity.</p>
                                        </div>
                                    </div>
                                    
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_desktop diary_tags_desktop flex-shrink-0 tracking-[0.1rem]'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>

                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow hidden w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_medium_desktop project_blood_desktop">
                                    <video className='project_videos_desktop' src='videos/BloodBank.mp4' muted />
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop">

                            <div className="projects_left_desktop">
                                <div className="project_medium_desktop video_portfolio_desktop">
                                    <video className='project_videos_desktop' src='videos/Portfolio.mp4' muted />
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_big_desktop project_quill_desktop">
                                    
                                    <video className='project_videos_desktop' src='videos/Quill.mp4' muted />
                                    
                                    <div className='project_details_quill_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[2rem] tracking-widest w-fit font-[700] '>Quill</p>
                                        </div>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Created a platform where users can upload PDFs and receive accurate answers to their questions via embedded AI.Composed an AI system to provide precise and contextually relevant answers from uploaded PDFs. This project aims to develop an AI-powered web application using Next.js that can extract and provide accurate answers to user queries from PDF documents. Leveraging the capabilities of natural language processing (NLP).</p>
                                            <br></br>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Created a platform where users can upload PDFs and receive accurate answers to their questions via embedded AI.Composed an AI system to provide precise and contextually relevant answers from uploaded PDFs. This project aims to develop an AI-powered web application using Next.js that can extract and provide accurate answers to user queries from PDF documents. Leveraging the capabilities of natural language processing (NLP).</p>
                                        </div>
                                    </div>
                                    
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow hidden w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop">

                            <div className="projects_left_desktop">
                                <div className="project_big_desktop project_quillcraft_desktop">
                                    <video className='project_videos_desktop one' src='videos/QuillCraft.mp4' muted />
                                    <div className='project_details_quillcraft_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[2rem] tracking-widest w-fit font-[700] '>QuillCraft</p>
                                        </div>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Built a collaborative online writing platform that supports real-time editing blogs with user interactions for example liking, commenting, bookmarking blogs. This project focuses on the development of a comprehensive blogging application using the MERN stack . The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                            <br></br>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Built a collaborative online writing platform that supports real-time editing blogs with user interactions for example liking, commenting, bookmarking blogs. This project focuses on the development of a comprehensive blogging application using the MERN stack . The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow hidden w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_medium_desktop video_weather_desktop">
                                    <video className='project_videos_desktop' src='videos/Dynamic Weather.mp4' muted />
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop">

                            <div className="projects_left_desktop">
                                <div className="project_medium_desktop video_connect_desktop">
                                    <video className='project_videos_desktop one' src='videos/connect.mp4' muted />
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_big_desktop project_blog_desktop">
                                    <video className='project_videos_desktop' src='videos/BlogitOut.mp4' muted />
                                    <div className='project_details_blog_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[2rem] tracking-widest w-fit font-[700] '>BlogitOut</p>
                                        </div>
                                        <div className='w-full mt-[2rem] h-fit'>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Built a collaborative online writing platform that supports real-time editing blogs with user interactions for example liking, commenting, bookmarking blogs. This project focuses on the development of a comprehensive blogging application using the MERN stack . The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                            <br></br>
                                            <p className='text-[#000D15] text-[.8rem] tracking-widest w-fit font-[400]'>Built a collaborative online writing platform that supports real-time editing blogs with user interactions for example liking, commenting, bookmarking blogs. This project focuses on the development of a comprehensive blogging application using the MERN stack . The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow hidden w-fit h-fit rounded-xl absolute bottom-[-2.1rem] bg-[#fbfbfb] shadow-[0px_0px_10px_1px_rgba(0,0,0,.1)]'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Projects

