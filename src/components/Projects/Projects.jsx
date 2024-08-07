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
        
        project_videos_desktop.forEach((videos) => {
            videos.addEventListener('mouseover', (e) => {
                e.target.play(); 
            })

            videos.addEventListener('mouseleave', (e) => {
                e.target.pause(); 
            })

        })

        const project_videos_mobile = document.querySelectorAll('.project_videos_mobile');
        
        project_videos_mobile.forEach((videos) => {
            videos.addEventListener('mouseover', (e) => {
                e.target.play(); 
            })

            videos.addEventListener('mouseleave', (e) => {
                e.target.pause(); 
            })

        })
    }, [])

    useEffect(() => {
        const projects_wrapper = document.querySelectorAll('.projects_wrapper')[0];
        const projects = document.querySelectorAll('.projects_desktop_mobile');
        

        projects.forEach((project) => {
            
            let top = window.scrollY;
            let offset = project.offsetTop - (projects_wrapper.offsetHeight/2);

            if(top >= offset) {
                project.classList.add('appear_projects');
            }
            else {
                project.classList.remove('appear_projects');
            }
        })

        window.addEventListener('scroll', () => {
            
            projects.forEach((project) => {
                let top = window.scrollY;
                let offset = project.offsetTop-(projects_wrapper.offsetTop/2);
                

                if(top >= offset) {
                    project.classList.add('appear_projects');
                }
                else {
                    project.classList.remove('appear_projects');
                }
            })
        })
        
    })

    const handleClickDown = (e) => {
        
        let className;
        let tt;
        const name = (e.target.tagName);


        if(name === 'path') {
            className = (e.target.parentElement.parentElement.parentElement.parentElement.classList)[1];
            tt = e.target.parentElement.parentElement.parentElement;
            
        }
        else {
            className = (e.target.parentElement.parentElement.parentElement.classList)[1];
            tt = e.target.parentElement.parentElement;
        }
        
        const downArrow = tt.children[0];
        const upArrow = tt.children[1];

        const project_parent = document.querySelectorAll(`.${className}`)[0];
        
        const childNode = (project_parent.children[1]).classList[0];
        
        const temp = document.querySelectorAll(`.${childNode}`)[0];
        
        temp.classList.remove('notActive');
        temp.classList.add('active');

        setTimeout(() => {
            downArrow.classList.add('hidden');
            upArrow.classList.remove('hidden');
        }, 1000)

        
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

        setTimeout(() => {
            downArrow.classList.remove('hidden');
            upArrow.classList.add('hidden');
        }, 1000)

        
    }

    

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

                <div className='projects_wrapper'>

                    <div className="projects_parent_desktop">

                        <div className="projects_desktop projects_desktop_mobile">

                            <div className="projects_left_desktop">
                                <div className="project_big_desktop project_diary_desktop">
                                    
                                    <video className='project_videos_desktop' src='videos/Diary.mp4' muted />
                                    
                                    <div className='project_details_diary_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_desktop'>
                                            <p>Diary</p>
                                        </div>
                                        <div className='big_project_content_desktop'>
                                            <p>Developed a fully-functional Notion clone, enabling users to create, edit, and organize notes and tasks with rich text formatting and real-time collaboration features. The application supports drag-and-drop capabilities, customizable templates, and seamless data synchronization across devices, providing a versatile workspace for both personal and team productivity.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Rich Text Editor</li>
                                            <li>Task Management</li>
                                            <li>Database Integration</li>
                                            <li>User Authentication</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The Notion clone application built using Next.js and Tailwind CSS offers a robust solution for note-taking, task management, and collaboration. By utilizing modern web development frameworks and libraries, the project delivers a responsive and user-friendly interface that facilitates productivity and organization. The application aims to replicate and enhance the features of Notion, providing users with a powerful tool for managing their personal and professional tasks and projects.</p>
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
                                            <button onClick={handleClickDown} className='downArrow big_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_medium_desktop project_blood_desktop">
                                    <video className='project_videos_desktop' src='videos/BloodBank.mp4' muted />
                                    <div className='project_details_blood_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_desktop'>
                                            <p>LifeFlow</p>
                                        </div>
                                        <div className='medium_project_content_desktop'>
                                            <p>This project involves the development of a comprehensive blood donation application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application is designed to connect blood donors with recipients, facilitating the process of blood donation and improving the efficiency of blood banks.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>User Registration and Authentication</li>
                                            <li>Donor and Recipient Profiles</li>
                                            <li>Search and Match</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The blood donation application built using the MERN stack aims to improve the efficiency and effectiveness of the blood donation process. By leveraging modern web technologies, the application connects donors and recipients in a secure and user-friendly manner, enhancing the overall blood donation experience and contributing to saving lives.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                bloodBank.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop projects_desktop_mobile">

                            <div className="projects_left_desktop">
                                <div className="project_medium_desktop video_portfolio_desktop">
                                    <video className='project_videos_desktop' src='videos/Portfolio.mp4' muted />
                                    <div className='project_details_portfolio_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_desktop'>
                                            <p>Portfolio</p>
                                        </div>
                                        <div className='medium_project_content_desktop'>
                                            <p>This project involves the development of a personal portfolio website using HTML, CSS, and JavaScript. The portfolio showcases personal projects, skills, and experiences, providing an interactive and visually appealing platform for individuals to present their work to potential employers or clients.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Project Showcase</li>
                                            <li>Skills Display</li>
                                            <li>Responsive Design</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The application aims to provide a comprehensive and engaging online showcase that reflects the individual’s personal brand and professional capabilities.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                portfolio.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_big_desktop project_quill_desktop">
                                    
                                    <video className='project_videos_desktop' src='videos/Quill.mp4' muted />
                                    
                                    <div className='project_details_quill_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_desktop'>
                                            <p>Quill</p>
                                        </div>
                                        <div className='big_project_content_desktop'>
                                            <p>This project aims to develop an AI-powered web application using Next.js that can extract and provide accurate answers to user queries from PDF documents. Leveraging the capabilities of natural language processing (NLP) and machine learning, the application facilitates efficient and intelligent information retrieval from extensive PDF content.</p>
                                            <br></br>
                                            <p>Key Features : </p>
                                            <li>PDF Upload and Parsing</li>
                                            <li>Natural Language Query Processing</li>
                                            <li>Interactive User Interface</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The AI-powered PDF answer extraction application built using Next.js offers an innovative solution for efficiently retrieving information from PDF documents. By combining advanced NLP and machine learning techniques with modern web development frameworks, the project aims to deliver a powerful tool for quick and accurate answer extraction, enhancing productivity and information accessibility.</p>
                                            {/* <p>Created a platform where users can upload PDFs and receive accurate answers to their questions via embedded AI.Composed an AI system to provide precise and contextually relevant answers from uploaded PDFs. This project aims to develop an AI-powered web application using Next.js that can extract and provide accurate answers to user queries from PDF documents. Leveraging the capabilities of natural language processing (NLP).</p> */}
                                        </div>
                                    </div>
                                    
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                quill.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow big_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop projects_desktop_mobile">

                            <div className="projects_left_desktop">
                                <div className="project_big_desktop project_quillcraft_desktop">
                                    <video className='project_videos_desktop one' src='videos/QuillCraft.mp4' muted />
                                    <div className='project_details_quillcraft_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_desktop'>
                                            <p>QuillCraft</p>
                                        </div>
                                        <div className='big_project_content_desktop'>
                                            <p>This project focuses on the development of a comprehensive blogging application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>User Authentication and Authorization</li>
                                            <li>Blog Post Management</li>
                                            <li>Commenting System</li>
                                            <li>Likes and Reactions</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The blogging application built using the MERN stack offers a robust platform for users to express themselves and engage with a community. By leveraging the power of modern web technologies, the application ensures a seamless and interactive user experience, making it easy for users to create and manage content.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                quillCraft.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow big_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_medium_desktop video_weather_desktop">
                                    <video className='project_videos_desktop' src='videos/Dynamic Weather.mp4' muted />
                                    <div className='project_details_weather_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_desktop'>
                                            <p>Weather Forecast</p>
                                        </div>
                                        <div className='medium_project_content_desktop'>
                                            <p>This project involves the development of a weather forecast teller application using Fetch API, CSS, and HTML. The application provides users with real-time and forecasted weather information for any specified location, offering a user-friendly and visually appealing interface to access weather details.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Real-Time Weather Data</li>
                                            <li>Responsive Design</li>
                                            <li>Forecast Information</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The weather forecast teller application built using Fetch API, CSS, and HTML offers a practical solution for accessing current and forecasted weather information. By leveraging the Fetch API for data retrieval and combining it with HTML and CSS for layout and styling, the project delivers a user-friendly and responsive tool for checking weather conditions.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                weather.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="projects_desktop projects_desktop_mobile">

                            <div className="projects_left_desktop">
                                <div className="project_medium_desktop video_connect_desktop">
                                    <video className='project_videos_desktop one' src='videos/connect.mp4' muted />
                                     <div className='project_details_connect_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_desktop'>
                                            <p>Connect</p>
                                        </div>
                                        <div className='medium_project_content_desktop'>
                                            <p>This project involves the development of a secure chatting application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application ensures the privacy and security of user communications through end-to-end encryption.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Real-time Messaging</li>
                                            <li>End-to-End Encryption</li>
                                            <li>User Authentication</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The secure chatting application leverages the power of the MERN stack to provide a reliable and encrypted messaging platform. By combining real-time communication with end-to-end encryption, the application aims to offer users a safe and private environment for their conversations.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                connect.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="projects_right_desktop">
                                <div className="project_big_desktop project_blog_desktop">
                                    <video className='project_videos_desktop' src='videos/BlogitOut.mp4' muted />
                                    <div className='project_details_blog_desktop notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_desktop'>
                                            <p>BlogitOut</p>
                                        </div>
                                        <div className='big_project_content_desktop'>
                                            <p>Built a collaborative online writing platform that supports real-time editing blogs with user interactions for example liking, commenting, bookmarking blogs. This project focuses on the development of a comprehensive blogging application using the MERN stack . The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>User Authentication and Authorization</li>
                                            <li>Blog Post Management</li>
                                            <li>Commenting System</li>
                                            <li>Likes and Reactions</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The blogging application built using the MERN stack offers a robust platform for users to express themselves and engage with a community. By leveraging the power of modern web technologies, the application ensures a seamless and interactive user experience, making it easy for users to create and manage content.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_desktop'>
                                        <Marquee className='h-fit w-fit overflow-hidden p-2'>
                                            {
                                                BlogitOut.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_desktop flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center mt-[1rem] relative'>
                                            <button onClick={handleClickDown} className='downArrow big_arrow_desktop'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_desktop hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='projects_parent_mobile'>

                        <div className='projects_single_mobile projects_desktop_mobile'>
                            
                            <div className="projects_top_mobile">
                                <div className="project_big_mobile project_diary_mobile">
                                    
                                    <video className='project_videos_mobile' src='videos/Diary.mp4' muted />
                                    
                                    <div className='project_details_diary_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_mobile'>
                                            <p>Diary</p>
                                        </div>
                                        <div className='big_project_content_mobile'>
                                            <p>Developed a fully-functional Notion clone, enabling users to create, edit, and organize notes and tasks with rich text formatting and real-time collaboration features. The application supports drag-and-drop capabilities, customizable templates, and seamless data synchronization across devices, providing a versatile workspace for both personal and team productivity.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Rich Text Editor</li>
                                            <li>Task Management</li>
                                            <li>Database Integration</li>
                                            <li>User Authentication</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The Notion clone application built using Next.js and Tailwind CSS offers a robust solution for note-taking, task management, and collaboration. By utilizing modern web development frameworks and libraries, the project delivers a responsive and user-friendly interface that facilitates productivity and organization. The application aims to replicate and enhance the features of Notion, providing users with a powerful tool for managing their personal and professional tasks and projects.</p>
                                        </div>
                                    </div>
                                    
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                diary.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_mobile diary_tags_mobile flex-shrink-0 tracking-[0.1rem]'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>

                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow big_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_mobile hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>

                        <div className='projects_single_mobile projects_desktop_mobile'>
                            
                            <div className="projects_right_mobile">
                                <div className="project_big_mobile project_quill_mobile">
                                    
                                    <video className='project_videos_mobile' src='videos/Quill.mp4' muted />
                                    
                                    <div className='project_details_quill_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_mobile'>
                                            <p>Quill</p>
                                        </div>
                                        <div className='big_project_content_mobile'>
                                            <p>This project aims to develop an AI-powered web application using Next.js that can extract and provide accurate answers to user queries from PDF documents. Leveraging the capabilities of natural language processing (NLP) and machine learning, the application facilitates efficient and intelligent information retrieval from extensive PDF content.</p>
                                            <br></br>
                                            <p>Key Features : </p>
                                            <li>PDF Upload and Parsing</li>
                                            <li>Natural Language Query Processing</li>
                                            <li>Interactive User Interface</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The AI-powered PDF answer extraction application built using Next.js offers an innovative solution for efficiently retrieving information from PDF documents. By combining advanced NLP and machine learning techniques with modern web development frameworks, the project aims to deliver a powerful tool for quick and accurate answer extraction, enhancing productivity and information accessibility.</p>
                                            {/* <p>Created a platform where users can upload PDFs and receive accurate answers to their questions via embedded AI.Composed an AI system to provide precise and contextually relevant answers from uploaded PDFs. This project aims to develop an AI-powered web application using Next.js that can extract and provide accurate answers to user queries from PDF documents. Leveraging the capabilities of natural language processing (NLP).</p> */}
                                        </div>
                                    </div>
                                    
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                quill.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_mobile flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    
                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow big_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_mobile hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='projects_double_mobile projects_desktop_mobile'>
                            
                            <div className="projects_bottom_mobile">
                                <div className="project_medium_mobile project_blood_mobile">
                                    <video className='project_videos_mobile' src='videos/BloodBank.mp4' muted />
                                    <div className='project_details_blood_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_mobile'>
                                            <p>LifeFlow</p>
                                        </div>
                                        <div className='medium_project_content_mobile'>
                                            <p>This project involves the development of a comprehensive blood donation application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application is designed to connect blood donors with recipients, facilitating the process of blood donation and improving the efficiency of blood banks.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>User Registration and Authentication</li>
                                            <li>Donor and Recipient Profiles</li>
                                            <li>Search and Match</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The blood donation application built using the MERN stack aims to improve the efficiency and effectiveness of the blood donation process. By leveraging modern web technologies, the application connects donors and recipients in a secure and user-friendly manner, enhancing the overall blood donation experience and contributing to saving lives.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                bloodBank.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_mobile flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_mobile hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="projects_bottom_mobile">
                                <div className="project_medium_mobile video_portfolio_mobile">
                                    <video className='project_videos_mobile' src='videos/Portfolio.mp4' muted />
                                    <div className='project_details_portfolio_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_mobile'>
                                            <p>Portfolio</p>
                                        </div>
                                        <div className='medium_project_content_mobile'>
                                            <p>This project involves the development of a personal portfolio website using HTML, CSS, and JavaScript. The portfolio showcases personal projects, skills, and experiences, providing an interactive and visually appealing platform for individuals to present their work to potential employers or clients.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Project Showcase</li>
                                            <li>Skills Display</li>
                                            <li>Responsive Design</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The application aims to provide a comprehensive and engaging online showcase that reflects the individual’s personal brand and professional capabilities.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                portfolio.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_mobile flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_mobile hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='projects_double_mobile projects_desktop_mobile'>

                            <div className="projects_left_mobile">
                                <div className="project_medium_mobile video_connect_mobile">
                                    <video className='project_videos_mobile one' src='videos/connect.mp4' muted />
                                     <div className='project_details_connect_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_mobile'>
                                            <p>Connect</p>
                                        </div>
                                        <div className='medium_project_content_mobile'>
                                            <p>This project involves the development of a secure chatting application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application ensures the privacy and security of user communications through end-to-end encryption.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Real-time Messaging</li>
                                            <li>End-to-End Encryption</li>
                                            <li>User Authentication</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The secure chatting application leverages the power of the MERN stack to provide a reliable and encrypted messaging platform. By combining real-time communication with end-to-end encryption, the application aims to offer users a safe and private environment for their conversations.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                connect.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_mobile flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_mobile hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                            <div className="projects_right_mobile">
                                <div className="project_medium_mobile video_weather_mobile">
                                    <video className='project_videos_mobile' src='videos/Dynamic Weather.mp4' muted />
                                    <div className='project_details_weather_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='medium_project_title_mobile'>
                                            <p>Weather Forecast</p>
                                        </div>
                                        <div className='medium_project_content_mobile'>
                                            <p>This project involves the development of a weather forecast teller application using Fetch API, CSS, and HTML. The application provides users with real-time and forecasted weather information for any specified location, offering a user-friendly and visually appealing interface to access weather details.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>Real-Time Weather Data</li>
                                            <li>Responsive Design</li>
                                            <li>Forecast Information</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The weather forecast teller application built using Fetch API, CSS, and HTML offers a practical solution for accessing current and forecasted weather information. By leveraging the Fetch API for data retrieval and combining it with HTML and CSS for layout and styling, the project delivers a user-friendly and responsive tool for checking weather conditions.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                weather.map((tag, index) => (
                                                    <span key={index} className='tag_medium_span_mobile flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow medium_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow medium_arrow_mobile hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='projects_single_mobile projects_desktop_mobile'>

                            <div className="projects_right_mobile">
                                <div className="project_big_mobile project_blog_mobile">
                                    <video className='project_videos_mobile' src='videos/BlogitOut.mp4' muted />
                                    <div className='project_details_blog_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_mobile'>
                                            <p>BlogitOut</p>
                                        </div>
                                        <div className='big_project_content_mobile'>
                                            <p>Built a collaborative online writing platform that supports real-time editing blogs with user interactions for example liking, commenting, bookmarking blogs. This project focuses on the development of a comprehensive blogging application using the MERN stack . The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>User Authentication and Authorization</li>
                                            <li>Blog Post Management</li>
                                            <li>Commenting System</li>
                                            <li>Likes and Reactions</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The blogging application built using the MERN stack offers a robust platform for users to express themselves and engage with a community. By leveraging the power of modern web technologies, the application ensures a seamless and interactive user experience, making it easy for users to create and manage content.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                BlogitOut.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_mobile flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow big_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_mobile hidden'>
                                                <UpArrow />
                                            </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='projects_single_mobile projects_desktop_mobile'>

                            <div className="projects_left_mobile">
                                <div className="project_big_mobile project_quillcraft_mobile">
                                    <video className='project_videos_mobile one' src='videos/QuillCraft.mp4' muted />
                                    <div className='project_details_quillcraft_mobile notActive w-full transition-all duration-1000 ease-in-out'>
                                        <div className='big_project_title_mobile'>
                                            <p>QuillCraft</p>
                                        </div>
                                        <div className='big_project_content_mobile'>
                                            <p>This project focuses on the development of a comprehensive blogging application using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to create, manage, and share blog posts while ensuring a seamless and interactive user experience.</p>
                                            <br></br>
                                            <p>Key Features :</p>
                                            <li>User Authentication and Authorization</li>
                                            <li>Blog Post Management</li>
                                            <li>Commenting System</li>
                                            <li>Likes and Reactions</li>
                                            <br></br>
                                            <p>Conclusion : </p>
                                            <p>The blogging application built using the MERN stack offers a robust platform for users to express themselves and engage with a community. By leveraging the power of modern web technologies, the application ensures a seamless and interactive user experience, making it easy for users to create and manage content.</p>
                                        </div>
                                    </div>
                                    <div className='project_tag_mobile'>
                                        <Marquee speed={25} className='h-fit w-fit overflow-hidden'>
                                            {
                                                quillCraft.map((tag, index) => (
                                                    <span key={index} className='tag_big_span_mobile flex-shrink-0 tracking-widest'>{tag}</span>
                                                ))
                                            }
                                        </Marquee>
                                    </div>
                                    <div className='w-full flex justify-center items-center relative'>
                                            <button onClick={handleClickDown} className='downArrow big_arrow_mobile'>
                                                <DownArrow />
                                            </button>
                                            <button onClick={handleClickUp} className='upArrow big_arrow_mobile hidden'>
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

