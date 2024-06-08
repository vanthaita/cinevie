'use client';
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
const VideoPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = document.getElementById('myVideo');
        const handleClick = () => {
            if (!video.paused) {
                video.pause();
                setIsPlaying(false);
            }
        };
        video.addEventListener('click', handleClick);
        return () => {
            video.removeEventListener('click', handleClick);
        };
    }, []);

    const togglePlay = () => {
        const video = document.getElementById('myVideo');
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="relative w-full h-full z-[2]">
            <video id="myVideo" className="absolute top-0 left-0 w-full h-full object-fill" src={src}></video>
            {!isPlaying && (
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 rounded-full bg-transparent p-8 border z-10" onClick={togglePlay}>
                    <Play className='md:w-16 md:h-16 h-12 w-12'/>
                </button>
            )}
        </div>
    );
};

export default function BookingHero() {
    return (
        <div className="relative w-full h-full">
            <VideoPlayer src="/video.mp4"/>
            <div className="absolute top-0 left-0 w-full  flex items-start z-[3] py-10 justify-start px-20 text-white">
                <div className="md:flex flex-row justify-end hidden items-end gap-x-4 mt-6">
                    <p className="font-bold text-3xl ">Doraemon: Nobita and the Earth Symphony Orchestra</p>
                    <p className="font-normal text-xl text-gray-300">| 6+ | JP, SUB</p>
                </div>
            </div>
        </div>
    );
}
