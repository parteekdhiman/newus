import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [statusMessage, setStatusMessage] = useState("Initializing systems...");

    useEffect(() => {
        const statusMessages = [
            "Initializing systems...",
            "Loading curriculum...",
            "Preparing workspace...",
            "Setting up tools...",
            "Almost ready...",
            "Welcome to learning!"
        ];

        const interval = setInterval(() => {
            setStatusMessage(prev => {
                const currentIndex = statusMessages.indexOf(prev);
                return statusMessages[(currentIndex + 1) % statusMessages.length];
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const createSparkle = () => {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '2px';
        sparkle.style.height = '2px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        sparkle.style.pointerEvents = 'none';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    };

    useEffect(() => {
        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
            @keyframes sparkle {
                0% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
        document.head.appendChild(sparkleStyle);

        const sparkleInterval = setInterval(createSparkle, 500);
        return () => clearInterval(sparkleInterval);
    }, []);

    return (
        <div className="floating-particles">
            <div className="loader-container">
                <h1 className="loading-text">TechEdu Institute</h1>
                
                <div className="cube-container">
                    <div className="cube">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                    </div>
                </div>
                
                <div className="progress-bar">
                    <div className="progress-fill"></div>
                </div>
                
                <p className="status-text" id="statusText">{statusMessage}</p>
            </div>
        </div>
    );
};

export default Preloader;
