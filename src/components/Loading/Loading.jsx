import React, { useEffect } from 'react'
import './style.css'
import Logo from '../Svgs/Logo/Logo'

function Loading() {

    function random(min, max) {
        return min + Math.random() * (max + 1 - min);
    }
    
    useEffect(() => {
        const container = document.getElementsByClassName('loading_container')[0];
        const canvasSize = container.offsetWidth * container.offsetHeight;
        const starsFraction = canvasSize / 2000;

        for(let i = 0; i < starsFraction; i++) {
            let xPos = random(0, 100);
            let yPos = random(-100, 100);
            let size = random(0.1, 0.5);
            let alpha = random(0.1,0.2);
            let opacity1 = random(10,20);
            let opacity2 = random(10,20);
            let colour = '#ffffff';

            const temp = [
                    { opacity: opacity1 + "%" },
                    { opacity: "15%" },
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
            <div className='loading_container'>
                <div className='loading_logoParent'>
                    <Logo />
                </div>
            </div>
        </>
    )
}

export default Loading