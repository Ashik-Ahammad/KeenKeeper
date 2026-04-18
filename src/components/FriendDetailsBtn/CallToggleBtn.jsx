"use client";
import { CalledFriendContext } from "@/context/callBtn.context";
import { PhoneCall } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "sonner";

const CallToggleBtn = ({ friend }) => {
  const { calledFriend, setCalledFriend, activities, setActivities } =
    useContext(CalledFriendContext);

  const handleCallButton = () => {
    console.log("call clicked");

    const exists = calledFriend.find((f) => f.id === friend.id);
    if (!exists) {
      setCalledFriend([...calledFriend, friend]);
    }


    const newActivity = {
      id: Date.now(),
      name: friend.name,
      type: "Call",
      date: new Date().toISOString(),
    };

    setActivities((prev) => [...prev, newActivity]);

    toast.success(`Calling ${friend.name} 📞`);
  };

  return (
    <button
      onClick={handleCallButton}
      className="border p-3 sm:p-4 border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
    >
      <PhoneCall className="w-5 h-5" />
      Call
    </button>
  );
};

export default CallToggleBtn;
