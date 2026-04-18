'use client'
import React, { createContext, useState } from 'react';

export const TextFriendContext = createContext();

const TextFriendProvider = ({ children }) => {
  const [textedFriend, setTextedFriend] = useState([]);
  const [textActivities, setTextActivities] = useState([]);

  const value = {
    textedFriend,
    setTextedFriend,
    textActivities,
    setTextActivities,
  };

  return (
    <TextFriendContext.Provider value={value}>
      {children}
    </TextFriendContext.Provider>
  );
};

export default TextFriendProvider;