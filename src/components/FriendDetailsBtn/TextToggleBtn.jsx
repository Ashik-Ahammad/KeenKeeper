"use client";
import { CalledFriendContext } from "@/context/callBtn.context";
import { MessageSquareMore } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "sonner";

const TextToggleBtn = ({ friend }) => {
  const { calledFriend, setCalledFriend, activities, setActivities } =
    useContext(CalledFriendContext);

  const handleTextButton = () => {
    console.log("text clicked");

    // prevent duplicate friend
    const exists = calledFriend.find((f) => f.id === friend.id);
    if (!exists) {
      setCalledFriend([...calledFriend, friend]);
    }

   
    const newActivity = {
      id: Date.now(),
      name: friend.name,
      type: "Text",
      date: new Date().toISOString(),
    };

    setActivities((prev) => [...prev, newActivity]);

    toast.success(`Texting ${friend.name} 💬`);
  };

  return (
    <button
      onClick={handleTextButton}
      className="border p-3 sm:p-4 border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
    >
      <MessageSquareMore className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      <span className="text-sm sm:text-base font-medium">Text</span>
    </button>
  );
};

export default TextToggleBtn;