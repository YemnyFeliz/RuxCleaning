import React, { useRef, useEffect } from 'react';

const BubblesBackground = () => {
    const canvasRef = useRef(null);
    const bubbles = useRef([]);
    const animationFrameId = useRef(null);

    useEffect(() => {
        console.log("🎈 BubblesBackground MOUNTED");
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Function to resize canvas dynamically
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Function to create a new bubble
        const createBubble = () => {
            const radius = Math.random() * 20 + 10;
            bubbles.current.push({
                x: Math.random() * canvas.width, 
                y: canvas.height + radius, // Start from the bottom
                radius,
                speedX: (Math.random() - 0.5) * 0.05, // Slightly slower movement
                speedY: Math.random() * -2 - 0.2, // Move up slowly
                alpha: 1,
            });
        };

        // Function to draw a single bubble
        const drawBubble = (bubble) => {
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${bubble.alpha})`;
            ctx.fill();
            ctx.closePath();
        };

        // Function to update all bubbles
        const updateBubbles = () => {
            for (let i = bubbles.current.length - 1; i >= 0; i--) {
                const bubble = bubbles.current[i];
                bubble.x += bubble.speedX;
                bubble.y += bubble.speedY;
                bubble.alpha -= 0.015;

                if (bubble.y < -bubble.radius || bubble.alpha <= 0) {
                    bubbles.current.splice(i, 1);
                } else {
                    drawBubble(bubble);
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (bubbles.current.length < canvas.width / 50) { 
                createBubble();
            }

            updateBubbles();
            animationFrameId.current = requestAnimationFrame(animate);
        };

        // Ensure proper canvas sizing
        resizeCanvas();
        animate();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default BubblesBackground;
