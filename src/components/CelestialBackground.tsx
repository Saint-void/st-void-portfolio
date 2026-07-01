import React, { useEffect, useState, useMemo } from 'react';

// Africa/Lagos TimeEngine
const useTimeEngine = () => {
  const [timeState, setTimeState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    progress: 0, // 0 to 1 representing 24 hours
  });

  useEffect(() => {
    let animationFrameId: number;
    
    const updateTime = () => {
      const now = new Date();
      // Convert to Africa/Lagos time
      const lagosTimeStr = now.toLocaleString("en-US", { timeZone: "Africa/Lagos" });
      const lagosTime = new Date(lagosTimeStr);
      
      const hours = lagosTime.getHours();
      const minutes = lagosTime.getMinutes();
      const seconds = lagosTime.getSeconds();
      const milliseconds = lagosTime.getMilliseconds();
      
      // Calculate total progress through the 24 hour day (0 to 1)
      const totalSeconds = (hours * 3600) + (minutes * 60) + seconds + (milliseconds / 1000);
      const progress = totalSeconds / 86400;

      setTimeState({ hours, minutes, seconds, progress });
      animationFrameId = requestAnimationFrame(updateTime);
    };

    updateTime();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return timeState;
};

// --- Sub-components ---

const Sun = ({ progress, isDark }: { progress: number, isDark: boolean }) => {
  // mappedProgress: 0 at 6am (0.25), 1 at 6pm (0.75)
  const mappedProgress = (progress - 0.25) / 0.5;
  const angle = mappedProgress * Math.PI;
  const x = -Math.cos(angle) * 50;
  const y = -Math.sin(angle) * 50;

  // Sun visibility: only when progress is between ~0.2 (4:48am) and ~0.8 (19:12pm)
  const isVisible = progress > 0.2 && progress < 0.8;
  const opacity = isVisible ? Math.min(1, Math.sin((progress - 0.2) * Math.PI / 0.6) * 1.5) : 0;

  return (
    <div
      className="absolute top-[80%] left-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full will-change-transform"
      style={{
        transform: `translate(-50%, -50%) translate(${x}vw, ${y}vh)`,
        opacity,
        background: isDark 
          ? 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 70%)'
          : 'radial-gradient(circle, rgba(120,120,120,1) 0%, rgba(100,100,100,1) 15%, rgba(80,80,80,0.6) 40%, rgba(50,50,50,0) 75%)',
        boxShadow: isDark 
          ? '0 0 120px 60px rgba(255,255,255,0.3), inset 0 0 40px 10px rgba(255,255,255,0.9)' 
          : '0 0 120px 60px rgba(0,0,0,0.1), inset 0 0 60px 15px rgba(80,80,80,0.8)',
        filter: 'blur(2px)',
        transition: 'background 1s, box-shadow 1s'
      }}
    />
  );
};

const Moon = ({ progress, isDark }: { progress: number, isDark: boolean }) => {
  let moonProgress = progress;
  if (moonProgress < 0.25) moonProgress += 1;
  const mappedProgress = (moonProgress - 0.75) / 0.5; // 0 to 1
  
  const angle = mappedProgress * Math.PI;
  const x = -Math.cos(angle) * 50;
  const y = -Math.sin(angle) * 50;

  // Moon visibility: roughly 0.7 (16:48) to 1.0 (24:00) and 0.0 to 0.3 (7:12)
  const isVisible = progress > 0.7 || progress < 0.3;
  let opacity = 0;
  if (progress > 0.7) {
    opacity = Math.min(1, Math.sin((progress - 0.7) * Math.PI / 0.6) * 1.5);
  } else if (progress < 0.3) {
    opacity = Math.min(1, Math.sin((progress + 0.3) * Math.PI / 0.6) * 1.5);
  }

  return (
    <div
      className="absolute top-[80%] left-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full will-change-transform"
      style={{
        transform: `translate(-50%, -50%) translate(${x}vw, ${y}vh)`,
        opacity,
        background: isDark 
          ? 'radial-gradient(circle at 35% 35%, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 30%, rgba(150,150,150,1) 70%, rgba(50,50,50,0.9) 100%)'
          : 'radial-gradient(circle at 35% 35%, rgba(120,120,120,1) 0%, rgba(100,100,100,1) 30%, rgba(70,70,70,1) 70%, rgba(40,40,40,0.9) 100%)',
        boxShadow: isDark
          ? '0 0 60px 15px rgba(255,255,255,0.15), inset -15px -15px 30px rgba(0,0,0,0.7)'
          : '0 0 60px 15px rgba(0,0,0,0.1), inset -15px -15px 30px rgba(0,0,0,0.3)',
        filter: 'blur(0.5px)',
        transition: 'background 1s, box-shadow 1s'
      }}
    >
      {/* Realistic craters using opacity */}
      <div className="absolute top-[20%] left-[30%] w-[25%] h-[25%] rounded-full bg-black/15 dark:bg-black/40 blur-[2px] shadow-inner" />
      <div className="absolute top-[50%] left-[60%] w-[15%] h-[15%] rounded-full bg-black/15 dark:bg-black/40 blur-[1px] shadow-inner" />
      <div className="absolute top-[65%] left-[25%] w-[20%] h-[20%] rounded-full bg-black/15 dark:bg-black/40 blur-[2px] shadow-inner" />
      <div className="absolute top-[35%] left-[70%] w-[12%] h-[12%] rounded-full bg-black/10 dark:bg-black/30 blur-[1px] shadow-inner" />
    </div>
  );
};

const Stars = ({ progress, isDark }: { progress: number, isDark: boolean }) => {
  const isReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
  
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  // Stars visible from progress > 0.75 (6pm) or < 0.25 (6am)
  let opacity = 0;
  if (progress > 0.75) {
    opacity = Math.min(1, (progress - 0.75) * 4);
  } else if (progress < 0.25) {
    opacity = Math.min(1, (0.25 - progress) * 4);
  }

  if (!isDark) opacity = 0; // Hide stars completely in light mode

  return (
    <div className="absolute inset-0 transition-opacity duration-1000" style={{ opacity }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white will-change-opacity"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: 0.8,
            animation: isReducedMotion ? 'none' : `twinkle ${star.duration}s infinite alternate ${star.delay}s`,
            boxShadow: '0 0 2px 1px rgba(255,255,255,0.3)',
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}} />
    </div>
  );
};

const Clouds = ({ progress, isDark }: { progress: number, isDark: boolean }) => {
  const isReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  const clouds = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${10 + Math.random() * 40}%`, // Upper half of sky
      width: `${20 + Math.random() * 30}vw`,
      height: `${10 + Math.random() * 20}vh`,
      duration: isReducedMotion ? 0 : 100 + Math.random() * 150, // very slow
      delay: -(Math.random() * 100),
      opacity: 0.03 + Math.random() * 0.05,
    }));
  }, [isReducedMotion]);

  const cloudColor = isDark ? '255, 255, 255' : '0, 0, 0';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute rounded-[100%] blur-3xl will-change-transform"
          style={{
            top: cloud.top,
            width: cloud.width,
            height: cloud.height,
            background: `rgba(${cloudColor}, ${cloud.opacity})`,
            animation: cloud.duration > 0 ? `drift ${cloud.duration}s linear infinite ${cloud.delay}s` : 'none',
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(100vw); }
        }
      `}} />
    </div>
  );
};

const AtmosphericGlow = ({ progress, isDark }: { progress: number, isDark: boolean }) => {
  // Changes intensity based on time of day
  // Noon (0.5): brightest
  // Midnight (0.0/1.0): darkest
  
  const sunProximity = Math.max(0, Math.sin(progress * Math.PI * 2 - Math.PI/2));
  
  let background;
  if (isDark) {
    background = `radial-gradient(circle at 50% 100%, rgba(255,255,255,${0.05 + sunProximity * 0.1}) 0%, rgba(255,255,255,0) ${50 + sunProximity * 30}%)`;
  } else {
    background = `radial-gradient(circle at 50% 100%, rgba(0,0,0,${0.02 + sunProximity * 0.05}) 0%, rgba(0,0,0,0) ${40 + sunProximity * 40}%)`;
  }

  return (
    <div 
      className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none"
      style={{ background }}
    />
  );
};

const Horizon = ({ isDark }: { isDark: boolean }) => {
  // A subtle horizon line at the bottom
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[20vh] pointer-events-none z-10">
      <div 
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: isDark 
            ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)'
            : 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)'
        }}
      />
      {/* Abstract geometric terrain silhouette */}
      <svg className="absolute bottom-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon 
          points="0,100 0,60 10,65 20,55 30,70 45,50 60,65 75,55 85,75 100,60 100,100" 
          fill={isDark ? "white" : "black"} 
        />
      </svg>
    </div>
  );
};

export default function CelestialBackground() {
  const { progress } = useTimeEngine();
  const [isDark, setIsDark] = useState(false);

  // Check theme by looking at html class
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    // Setup observer for class changes on html
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-1000"
      style={{
        backgroundColor: isDark ? '#020203' : '#fafafa',
      }}
    >
      <AtmosphericGlow progress={progress} isDark={isDark} />
      <Stars progress={progress} isDark={isDark} />
      <Clouds progress={progress} isDark={isDark} />
      <Moon progress={progress} isDark={isDark} />
      <Sun progress={progress} isDark={isDark} />
      <Horizon isDark={isDark} />
    </div>
  );
}
