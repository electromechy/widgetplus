import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoStream: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hlsUrl = 'https://tvsw5-hls.secdn.net/tvsw5-chorigin/play/prod-32f2c595c32f466abbb5e49fd4690902/playlist.m3u8';

    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(console.error);
        });

        return () => {
          hls.destroy();
        };
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari and other HLS-native browsers
        video.src = hlsUrl;
        video.play().catch(console.error);
      } else {
        console.error('HLS is not supported in this browser.');
      }
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {/* Video Player */}
      <video
        ref={videoRef}
        controls
        style={{
          width: '100%',
          height: '500px',
          backgroundColor: 'black',
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Image Overlay */}
      <img
        src="https://imutv.tv/wp-content/uploads/2024/08/Untitled.jpeg"
        alt="Featured"
        style={{
          position: 'absolute',
          top: '10px', // Adjust to position the image
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          borderRadius: '10px',
          zIndex: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
};

export default VideoStream;
