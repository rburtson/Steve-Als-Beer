import React, { useEffect } from 'react';

const BubbleEffect = (): React.JSX.Element => {
  useEffect(() => {
    const createBubble = () => { // Function to create bubbles
      const bubble = document.createElement('div'); // Create a new div element for each bubble
      bubble.classList.add('bubble'); // Give the bubble the 'bubble' class
      const size = Math.random() * 30 + 10; // Create a random size for the bubble between 10-40px
      const leftPosition = Math.random() * 100; // Random bubble position (x-axis)
      const topPosition = Math.random() * 500; // Random bubble position (y-axis)
      const duration = Math.random() * 4 + 3; // Random duration for the bubble between 4-7s
      const delay = Math.random() * 2; // Random delay between each bubble between 0-2s

      // Set the bubble properties
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${leftPosition}%`;
      bubble.style.top = `${topPosition}vh`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;

      // Append the bubble to the body
      document.body.appendChild(bubble);
      setTimeout(() => { // Remove bubble once it leaves viewport
        bubble.remove();
      }, (duration + delay + 1) * 1000); // Remove it after animation duration
    };

    const intervalId = setInterval(createBubble, 300); // Initalize an interval to create bubbles in ms

    return () => clearInterval(intervalId); // Cleanup when component is inactive
  }, []); // Runs when the component is active

  return (
    <span></span> // Return nothing so when component is active, all that returns is bubbles
  )

};

export default BubbleEffect;
