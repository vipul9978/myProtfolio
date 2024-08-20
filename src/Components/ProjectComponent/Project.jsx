import React, { useEffect, useRef } from 'react';
import './Project.css';

const projects = [
    { imgUrl: "images/6450c451bb77671ff3e9a68d_Webdesign - 06-1.webp", type: "demo1", title: "second" },
    { imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp", type: "demo1", title: "third" },
    { imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp", type: "demo1", title: "fourth" },
    { imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp", type: "demo1", title: "five" },
    { imgUrl: "images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp", type: "demo1", title: "six" },
];

const Project = () => {
    const projectDivRef = useRef(null);

    useEffect(() => {
        const projectDiv = projectDivRef.current;

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Increase the multiplier for a bigger movement
            const offsetX = (clientX / windowWidth - 0) * -3000; // Increased multiplier
            const offsetY = (clientY / windowHeight - 0) * -1200;

            // Apply the transform
            projectDiv.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <section className='projectSection'>
                    <h1 className='works_title'>Select a project</h1>
                <div className='projectDiv' ref={projectDivRef}>
                    <div className='container flex'>
                        {projects.map((elem) => {
                            const { imgUrl, title } = elem;
                            return (
                                <div className='projects' key={title}>
                                    <a href="#">
                                        <img height={"100%"} width={"100%"} src={imgUrl} alt={title} />
                                    </a>
                                    <h2>{title}</h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;
