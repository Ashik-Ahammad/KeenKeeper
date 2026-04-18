"use client";

import CalledFriendProvider from "@/context/callBtn.context";
import TextFriendProvider from "@/context/textBtn.context";
import VideoFriendProvider from "@/context/videoBtn.context";

const Providers = ({ children }) => {
  return (
    <CalledFriendProvider>
      <TextFriendProvider>
        <VideoFriendProvider>
          {children}
        </VideoFriendProvider>
      </TextFriendProvider>
    </CalledFriendProvider>
  );
};

export default Providers;