import React, { useEffect } from 'react'
import './style.css'

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
        // const icons_parent_desktop = document.querySelectorAll('.icons_parent_desktop')[0];
        // const icons_parent_mobile = document.querySelectorAll('.icons_parent_mobile')[0];
        const tml_inner_switch_desktop = document.querySelectorAll('.tml_inner_switch_desktop')[0];
        // const inner_switch_mobile = document.querySelectorAll('.inner_switch_mobile')[0];
        const tml_text_desktop = document.querySelectorAll('.tml_text_desktop')[0];
        // const nrm_text_mobile = document.querySelectorAll('.nrm_text_mobile')[0];
        

        tml_inner_switch_desktop.classList.remove('bg-[#FFADAD]');
        tml_inner_switch_desktop.classList.remove('shadow-[0px_0px_10px_5px_#ffadad50]')
        tml_inner_switch_desktop.classList.add('translate-x-[-300%]');
        tml_inner_switch_desktop.classList.add('bg-[#1a8cff]')
        tml_inner_switch_desktop.classList.add('shadow-[0px_0px_10px_5px_#1a8dff4e]')

        // inner_switch_mobile.classList.remove('bg-[#1a8cff]')
        // inner_switch_mobile.classList.remove('shadow-[0px_0px_10px_5px_#1a8dff4e]')
        // inner_switch_mobile.classList.add('translate-x-[300%]');
        // inner_switch_mobile.classList.add('bg-[#FFADAD]');
        // inner_switch_mobile.classList.add('shadow-[0px_0px_10px_5px_#ffadad50]')

        setTimeout(() => {
            // icons_parent_desktop.classList.add('page_transition_NRM');
            tml_text_desktop.classList.add('page_transition_TML');

            // icons_parent_mobile.classList.add('page_transition_NRM');
            // nrm_text_mobile.classList.add('page_transition_NRM');
        }, 200)
        setTimeout(() => {setOverview(true);}, 700)

        
        setTimeout(() => {
            tml_inner_switch_desktop.classList.remove('bg-[#1a8cff]')
            tml_inner_switch_desktop.classList.remove('shadow-[0px_0px_10px_5px_#1a8dff4e]')
            tml_inner_switch_desktop.classList.remove('translate-x-[-300%]');
            tml_inner_switch_desktop.classList.add('bg-[#FFADAD]');
            tml_inner_switch_desktop.classList.add('shadow-[0px_0px_10px_5px_#ffadad50]')
            // tml_icons_parent_desktop.classList.remove('page_transition_NRM');
            tml_text_desktop.classList.remove('page_transition_TML');
            

            // inner_switch_mobile.classList.remove('translate-x-[300%]');
            // inner_switch_mobile.classList.remove('bg-[#FFADAD]');
            // inner_switch_mobile.classList.remove('shadow-[0px_0px_10px_5px_#ffadad50]')
            // icons_parent_mobile.classList.remove('page_transition_NRM');
            // nrm_text_mobile.classList.remove('page_transition_NRM');
            // inner_switch_mobile.classList.add('bg-[#1a8cff]')
            // inner_switch_mobile.classList.add('shadow-[0px_0px_10px_5px_#1a8dff4e]')

        }, 800)
        
    }

  return (
    <>
      <div className="tml_stars_container">
        <div className="tml_container h-full">
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

                    <div className='tml_switch_parent_desktop flex flex-col justify-center items-center'>
                        <p className='tml_switch_p_desktop text-white font-light text-[14px] tracking-[3px]'>switch to timeline mode</p>
                        <div onClick={handleComponentChange} className='tml_switch_desktop cursor-pointer mt-2 rounded-md flex justify-end items-center pl-3 pr-3'>
                            <div className='tml_inner_switch_desktop rounded-md shadow-[0px_0px_10px_5px_#ffadad50] bg-[#FFADAD] '></div>
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