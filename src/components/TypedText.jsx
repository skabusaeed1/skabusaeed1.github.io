import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

 export const TypedText = () => {
    const typedElementRef = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(typedElementRef.current, {
        strings: ['Aspiring Full Stack Web Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        fadeOut: true,
        loop: true,
      });
  
      return () => {
        typed.destroy(); // Cleanup on component unmount
      };
    }, []);
  
    return <span style={{color:'rgb(241, 157, 16)'}}  className="role" ref={typedElementRef} />;
  };
  