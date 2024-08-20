import React, { useEffect, useRef, useState } from 'react';
import './Canvas.css';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Canvas = () => {
    const canvasRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const frames = { currentIndex: 1, maxIndex: 1345 };
    const images = useRef([]);

    const preloadImages = () => {
        const imagePromises = [];

        for (let i = 1; i <= frames.maxIndex; i++) {
            const imageUrl = `/images/newVideo/frame_${i.toString().padStart(4, '0')}.jpg`;
            const img = new Image();
            img.src = imageUrl;

            const imagePromise = new Promise((resolve, reject) => {
                img.onload = () => {
                    images.current[i] = img;
                    resolve();
                };

                img.onerror = () => {
                    console.error(`Failed to load image: ${imageUrl}`);
                    reject(`Failed to load image: ${imageUrl}`);
                };
            });

            imagePromises.push(imagePromise);
        }

        Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
        }).catch(error => {
            console.error('Error loading images:', error);
        });
    };

    const loadImage = (index) => {
        const canvas = canvasRef.current;
        if (!canvas) {
            console.error('Canvas reference is not available');
            return;
        }

        const context = canvas.getContext('2d');
        const img = images.current[index];

        if (!context || !img) {
            console.error('Canvas context or image is not available');
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingQuality = 'high';
        context.imageSmoothingEnabled = true;
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        frames.currentIndex = index;
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            loadImage(Math.floor(frames.currentIndex))
        })
        preloadImages();
    }, []);


    useEffect(() => {
        if (!imagesLoaded) return;

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.main',
                start: '0% top',
                end: "bottom bottom",
                scrub: 1,
                // pin:true
            },
        })


        function updateFrame(index) {
            return {
                currentIndex: index,
                onUpdate: () => loadImage(Math.floor(frames.currentIndex))
            }
        }

        tl.to(frames, updateFrame(100), "one")

            .to(frames, updateFrame(200), "two")
            .to(".box1", { ease: "linear", opacity: "1" }, "two")

            .to(frames, updateFrame(300), "three")
            .to(".box1", { ease: "linear", opacity: "0" }, "three")

            .to(frames, updateFrame(400), "fourht")
            .to(".box2", { ease: "linear", opacity: "1" }, "fourht")

            .to(frames, updateFrame(500), "five")
            .to(".box2", { ease: "linear", opacity: "0" }, "five")

            .to(frames, updateFrame(600), "six")
            .to(".box3", { ease: "linear", opacity: "1" }, "six")

            .to(frames, updateFrame(700), "saven")
            .to(".box3", { ease: "linear", opacity: "1" }, "saven")

            .to(frames, updateFrame(800), "eight")
            .to(".box3", { width: "100%", ease: "linear", opacity: "1" }, "eight")
            .to(".box3 .one h2, .two p", { ease: "linear", opacity: "0" }, "eight")

            .to(frames, updateFrame(900), "ten")

            .to(frames, updateFrame(1000), "nine")
            .to(".box3 .one", { padding: "0", height: "0%", ease: "linear" }, "nine")
            .to(".box3 .two", { padding: "0", height: "0%", ease: "linear" }, "nine")

            .to(frames, updateFrame(1100), "ten")
            .to("canvas", { scale: "0.5", ease: "linear" }, "ten")
            .to(".box4", { opacity: "1", ease: "linear",delay:"1" }, "ten")

            .to(frames, updateFrame(1200), "eleven")
            .to(".hr", { width: "100px", ease: "linear" }, "eleven")

            .to(frames, updateFrame(1345), "tawelth")
            .to("canvas",{scale:1,ease: "linear"},"tawelth")
            .to(".box4 h3", { scale: "1.5", ease: "linear" }, "tawelth")

    }, [imagesLoaded]);

    return (
        <div className='main'>
            <div className='child'>
                <div className='box1'>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className='box2'>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className='box3 flex'>
                    <div className='one flex'>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>

                    <div className='two flex'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam laboriosam! Consequuntur molestias animi maiores, repellendus velit, veniam iusto, ratione maxime architecto hic nulla! Necessitatibus facilis nobis harum facere adipisci?</p>
                    </div>
                </div>

                <div className='box4 flex'>
                    <h3>© Vipul<hr className='hr'/>Malviya </h3>
                </div>
                <canvas ref={canvasRef} id='canvas'></canvas>
            </div>
        </div>
    );
};

export default Canvas;
