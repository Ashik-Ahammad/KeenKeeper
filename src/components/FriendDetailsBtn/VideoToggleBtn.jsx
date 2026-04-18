"use client";
import { CalledFriendContext } from "@/context/callBtn.context";
import { Video } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "sonner";

const VideoToggleBtn = ({ friend }) => {
  const { calledFriend, setCalledFriend, activities, setActivities } =
    useContext(CalledFriendContext);

  const handleVideoButton = () => {
    console.log("video clicked");

    const exists = calledFriend.find((f) => f.id === friend.id);
    if (!exists) {
      setCalledFriend([...calledFriend, friend]);
    }

    const newActivity = {
      id: Date.now(),
      name: friend.name,
      type: "Video",
      date: new Date().toISOString(),
    };

    setActivities((prev) => [...prev, newActivity]);

    toast.success(`Video Calling ${friend.name} 📹`);
  };

  return (
    <button
      onClick={handleVideoButton}
      className="border p-3 sm:p-4 border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
    >
      <Video className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      <span className="text-sm sm:text-base font-medium">Video</span>
    </button>
  );
};

export default VideoToggleBtn;