import React, { useState } from 'react'
import './style.css'
import { toast } from 'sonner';

function Footer() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isEmailValidated = emailRegex.test(email);

        if(name === '') {
            toast.error("Please fill out name field !!!");
            return;
        }
        else if(email === '') {
            toast.error("Please fill out email field !!!");
            return;
        }
        else if(isEmailValidated === false) {
            toast.error(`This '${email} ' email is not complete !!!`);
            return;
        }
        else if(message === '') {
            toast.error("Please fill out message field !!!");
            return;
        }

        const subject = `Hi, from ${name}`;

        const mailtoLink = `mailto:aniketkumar2832002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;

        setName("");
        setEmail("");
        setMessage("");

        return;

    }

    const handleHireMe = () => {
        const subject = 'Saw your work, Let connect'
        const mailtoLink = `mailto:aniketkumar2832002@gmail.com?subject=${encodeURIComponent(subject)}}`;
        window.location.href = mailtoLink;

        return;
    }

    const handleGithub = () => {
        window.open('https://github.com/el3c-tron', '_blank');
        return;
    }

    const handleLinkedin = () => {

        window.open('https://www.linkedin.com/in/aniket-kumar-421891247/', '_blank');
        return;
    }

  return (
    <>
        <div className='footer_container'>
            <div className="footer_contact">
                
                <div className="footer_contact_text flex flex-col text-white justify-center items-center">
                    <p className='footer_contact_p1'>if you find my work <span className='text-[#E69C9C]'> interesting </span></p>
                    <p className='footer_contact_p2'>Let's <span className='footer_contact_span'> Collaborate </span></p>
                </div>

                <div className="footer_contact_form flex flex-col">
                    <input 
                            placeholder='Name'
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            className='footer_contact_name outline-none focus:outline-[#1a8cff] placeholder:opacity-30 placeholder:font-[200] placeholder:tracking-widest' 
                    />
                    <input 
                        className='footer_contact_email outline-none focus:outline-[#1a8cff] placeholder:opacity-30 placeholder:font-[200] placeholder:tracking-widest' 
                        placeholder='Email (example@example.com)'
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <textarea 
                        className='footer_contact_message outline-none focus:outline-[#1a8cff]  placeholder:opacity-30 placeholder:font-[200] placeholder:tracking-widest' 
                        placeholder='Message'
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                    ></textarea>
                    <button onClick={handleSendMessage} className='footer_contact_button'>
                        Send Message
                    </button>
                </div>

            </div>
            <div className="footer_footer">
                <div className="footer_left">
                    <p className='footer_left_resume' onClick={handleHireMe}>Hire Me</p>
                    <p className='footer_left_github' onClick={handleGithub}>Github</p>
                    <p className='footer_left_linkedin' onClick={handleLinkedin}>Linkedin</p>
                </div>
                <div className="footer_right">
                    <p className='footer_right_name font-["Style_Script"]'>
                            Aniket Kumar
                    </p>
                    <p className='footer_right_desc'>
                        All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer