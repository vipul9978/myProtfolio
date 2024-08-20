import React, { useState, useEffect } from 'react';
import './cursor.css';
import gsap from 'gsap';

const Cursor = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [skewX, setSkewX] = useState(1);
    const [skewY, setSkewY] = useState(1);

    useEffect(() => {
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;

            const deltaX = clientX - lastX;
            const deltaY = clientY - lastY;

            // Update last positions
            lastX = clientX;
            lastY = clientY;

            // Calculate skew based on movement direction
            const newSkewX = deltaX * 0.01;
            const newSkewY = deltaY * 0.01;

            // Clamp skew values within a reasonable range
            const clampedSkewX = gsap.utils.clamp(0.8, 1.2, newSkewX);
            const clampedSkewY = gsap.utils.clamp(0.8, 1.2, newSkewY);

            setCursorX(clientX);
            setCursorY(clientY);

            setSkewX(1 + clampedSkewX);
            setSkewY(1 + clampedSkewY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="cursor"
            style={{
                transform: `translate(${cursorX}px, ${cursorY}px) scale(${skewX}, ${skewY})`,
            }}
        />
    );
};

export default Cursor;
