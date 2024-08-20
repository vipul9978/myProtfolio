import React, { useEffect, useRef } from 'react';
import './Home.css';
import Button from '../Button/Button';
import gsap from 'gsap';
import Cursor from '../cursor/cursor';
import HomeAnim from '../Animation/HomeAnim';


const Home = () => {
    const containerRef = useRef(null);

    // Throttle function
    const throttleFunction = (func, delay) => {
        let lastCall = 0;
        return function (...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return func(...args);
        };
    };

    useEffect(() => {
        const container = containerRef.current;

        const handleMouseMove = throttleFunction((dets) => {
            const creatediv = document.createElement('span');
            creatediv.className = 'floatingDiv'; // Add a class to style it easily
            container.appendChild(creatediv);

            const createImg = document.createElement('img');
            creatediv.appendChild(createImg);

            const imageSources = [
                'images/bruvisite.webp',
                'images/vision.webp',
                'images/recycle.webp',
                'images/portfolio.webp',
                'images/street_law.webp',
                '/images/brussels_dance.webp',
                'images/bruvisite.webp',
                'images/vision.webp',
                'images/recycle.webp',
                'images/portfolio.webp',
                'images/street_law.webp',
                '/images/brussels_dance.webp'
            ];

            const randomIndex = Math.floor(Math.random() * imageSources.length);
            createImg.src = imageSources[randomIndex];

            const divSize = 300; 
            creatediv.style.width = `${divSize}px`;
            creatediv.style.height = `${divSize}px`;

            creatediv.style.left = `${dets.clientX - divSize / 4}px`;
            creatediv.style.top = `${dets.clientY - divSize / 4}px`;

            const tl = gsap.timeline();
            
            tl.to(createImg, {
                scale: 1,
                borderRadius: "0%",
            }).to(createImg, {
                scale: 0,
                opacity: 0,
            });

            setTimeout(() => {
                container.removeChild(creatediv);
            }, 800);
        }, 100);

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (

        <>
      <HomeAnim />

        <section className='HomeSection'>
            <Cursor />

            <div className="container flex" ref={containerRef}>
                <div className='box flex'>
                    <div className='start'>
                        <h1>Front-End Dev.</h1>
                    </div>
                    <div className='end'>
                        <h1>Living In</h1>
                        <div>
                            <h3>Rajasthan</h3>
                            <h3>Bharat</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homeFooter flex'>
                <div className='container flex'>
                    <div>
                        <p>Web Developer</p>
                        <p>Web Developer</p>
                        <p>Web Developer</p>
                    </div>

                    <Button>
                        Work Together
                    </Button>
                </div>
            </div>
        </section>
        </>

    );
};

export default Home;
