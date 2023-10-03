import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Estilos/slider-container-video.css';
import { motion } from 'framer-motion';

const VideoSlider = ({ videos }) => {
    const [videoIndex, setVideoIndex] = useState(0);

    const opts = {
        height: '200',
        width: '300',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleDrag = (_, info) => {
        // Calcula el índice del video basado en la posición actual del slider
        const newIndex = Math.round(info.point.x / 640); // 640 es el ancho del video
        // Asegúrate de que el nuevo índice esté dentro del rango de videos
        if (newIndex >= 0 && newIndex < videos.length) {
            setVideoIndex(newIndex);
        }
    };

    return (
        <motion.div className='slider-container-video'>
            <motion.div className='slider-video' drag='x' dragConstraints={{ right: 0 }} >
                {videos.map((video, index) => (
                    <motion.div className='item-video' key={index}>
                        {videoIndex === index && <YouTube videoId={video} opts={opts} />}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default VideoSlider;