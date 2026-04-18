'use client'
import React, { createContext, useState } from 'react';

export const VideoFriendContext = createContext();

const VideoFriendProvider = ({ children }) => {
  const [videoFriend, setVideoFriend] = useState([]);
  const [videoActivities, setVideoActivities] = useState([]);

  const value = {
    videoFriend,
    setVideoFriend,
    videoActivities,
    setVideoActivities,
  };

  return (
    <VideoFriendContext.Provider value={value}>
      {children}
    </VideoFriendContext.Provider>
  );
};

export default VideoFriendProvider;