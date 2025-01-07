import { useEffect, useRef, useState } from 'react';

export default function CinemaExperience() {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.8,
            }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && videoRef.current) {
            videoRef.current.play();
        }
    }, [isVisible]);

    return (
        <div className="relative p-5">
            <video
                ref={videoRef}
                className="w-full max-w-[100%] h-auto rounded-lg shadow-2xl z-10 border-8 border-transparent 
                bg-gradient-to-r from-[#FF8A00] to-[#FFD700]"
                controls
                muted>
                <source src="/images/cinema.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
