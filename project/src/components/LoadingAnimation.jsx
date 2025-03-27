import React, { useEffect } from 'react';
import '../css/LoadingAnimation.css';

const LoadingAnimation = () => {
  useEffect(() => {
    // This ensures the animation restarts when the component mounts
    const cowBody = document.querySelector('.cow-body');
    const cowTail = document.querySelector('.cow-tail');
    const cowEars = document.querySelectorAll('.cow-ear');
    
    // Reset animations if needed
    cowBody.style.animation = 'none';
    cowTail.style.animation = 'none';
    cowEars.forEach(ear => ear.style.animation = 'none');
    
    // Trigger reflow
    void cowBody.offsetWidth;
    
    // Restart animations
    cowBody.style.animation = '';
    cowTail.style.animation = '';
    cowEars.forEach(ear => ear.style.animation = '');
  }, []);

  return (
    <div className="loading-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 150"
        className="cow-animation"
      >
        {/* Body */}
        <ellipse className="cow-body" cx="100" cy="80" rx="45" ry="35" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        
        {/* Head */}
        <circle cx="100" cy="50" r="25" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        
        {/* Ears */}
        <ellipse className="cow-ear" cx="75" cy="40" rx="10" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        <ellipse className="cow-ear" cx="125" cy="40" rx="10" ry="15" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="90" cy="45" r="5" fill="#333" />
        <circle cx="110" cy="45" r="5" fill="#333" />
        
        {/* Nose */}
        <ellipse cx="100" cy="60" rx="10" ry="7" fill="#ffcccc" stroke="#333" strokeWidth="1" />
        <circle cx="95" cy="58" r="2" fill="#333" />
        <circle cx="105" cy="58" r="2" fill="#333" />
        
        {/* Spots */}
        <ellipse cx="80" cy="85" rx="15" ry="12" fill="#333" />
        <ellipse cx="120" cy="70" rx="10" ry="8" fill="#333" />
        
        {/* Legs */}
        <rect x="70" y="110" width="10" height="30" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        <rect x="120" y="110" width="10" height="30" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        <rect x="85" y="110" width="10" height="30" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        <rect x="105" y="110" width="10" height="30" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
        
        {/* Tail */}
        <path className="cow-tail" d="M145,80 Q160,60 155,40" fill="none" stroke="#333" strokeWidth="2" />
        
        {/* Udder */}
        <ellipse cx="100" cy="110" rx="15" ry="10" fill="#ffcccc" stroke="#333" strokeWidth="1" />
      </svg>

      <div className="loading-text">Loading Cow Breed Advisory System...</div>
    </div>
  );
};

export default LoadingAnimation;
