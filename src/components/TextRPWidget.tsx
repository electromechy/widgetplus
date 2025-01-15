import React, { useEffect } from 'react';
import VideoStream from './VideoStream';
import { sendWelcomeMessage } from '../utils/api';

// Function to get URL parameters
const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    roomId: params.get('roomId'),
    userId: params.get('userId'),
  };
};

// Main Widget Component
const TextRPWidget: React.FC = () => {
  const { roomId, userId } = getUrlParams();

  useEffect(() => {
    if (roomId && userId) {
      sendWelcomeMessage(roomId, userId);
    }
  }, [roomId, userId]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>IMU.TV Demo Widget</h1>
      <p>Your Room ID: {roomId}</p>
      <p>Your User ID: {userId}</p>
      <VideoStream />
    </div>
  );
};

export default TextRPWidget;
