'use client'
import React, { createContext, useState } from 'react';

export const CalledFriendContext = createContext();

const CalledFriendProvider = ({ children }) => {
  const [calledFriend, setCalledFriend] = useState([]);
  const [activities, setActivities] = useState([]);

  const value = {
    calledFriend,
    setCalledFriend,
    activities,
    setActivities,
  };

  return (
    <CalledFriendContext.Provider value={value}>
      {children}
    </CalledFriendContext.Provider>
  );
};

export default CalledFriendProvider;