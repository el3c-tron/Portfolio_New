import React from 'react'
import './style.css'

function Footer() {
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
                            className='footer_contact_name outline-none focus:outline-[#1a8cff] placeholder:opacity-30 placeholder:font-[200] placeholder:tracking-widest' 
                    />
                    <input className='footer_contact_email outline-none focus:outline-[#1a8cff] placeholder:opacity-30 placeholder:font-[200] placeholder:tracking-widest' placeholder='Email (example@example.com)'/>
                    <textarea className='footer_contact_message outline-none focus:outline-[#1a8cff]  placeholder:opacity-30 placeholder:font-[200] placeholder:tracking-widest' placeholder='Message'></textarea>
                    <button className='footer_contact_button'>
                        Send Message
                    </button>
                </div>

            </div>
            <div className="footer_footer">
                <div className="footer_left">
                    <p className='footer_left_resume'>Hire Me</p>
                    <p className='footer_left_github'>Github</p>
                    <p className='footer_left_linkedin'>Linkedin</p>
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