import React from "react";
import { FaBoxArchive } from "react-icons/fa6";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";

const FriendsDetailPage = async ({ params }) => {
  const { friendsId } = await params;

  const res = await fetch("http://localhost:3000/data/friends.json");
  const friends = await res.json();

  const friend = friends.find((f) => f.id === Number(friendsId));

  if (!friend) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">Friend not found</h2>
      </div>
    );
  }

  const getStatusColor = (status) => {
    if (status === "on-track") return "bg-green-800";
    if (status === "almost due") return "bg-yellow-500";
    if (status === "overdue") return "bg-red-700";
    return "bg-gray-500";
  };

  return (
    <div className="px-4 sm:px-6 md:p-6 mt-6 md:mt-10 min-h-screen w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />

          <h2 className="text-xl font-bold">{friend.name}</h2>

          <div
            className={`inline-block px-3 py-1 text-white text-sm rounded-full capitalize mt-2 ${getStatusColor(
              friend.status
            )}`}
          >
            {friend.status}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4 italic">"{friend.bio}"</p>

          <p className="text-gray-400 mt-3 text-sm sm:text-base wrap-break-word">
            {friend.email}
          </p>

          <div className="mt-6 space-y-3">
            <button className="w-full border border-gray-100 shadow-sm py-2 rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer flex flex-row gap-x-2 items-center justify-center">
              <HiOutlineBellSnooze /> Snooze 2 Weeks
            </button>

            <button className="w-full border border-gray-100 shadow-sm py-2 rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer flex flex-row gap-x-2 items-center justify-center">
              <FaBoxArchive />
              Archive
            </button>

            <button className="w-full border border-gray-100 shadow-sm py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors hover:cursor-pointer flex flex-row gap-x-2 items-center justify-center">
              <RiDeleteBin5Line />
              Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {friend.days_since_contact}
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800">{friend.goal}</h2>
              <p className="text-gray-500 text-sm md:text-base">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {new Date(friend.next_due_date).toLocaleDateString()}
              </h2>
              <p className="text-gray-500 text-sm md:text-base">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-left">
            <div>
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Connect every {friend.goal} days
              </p>
            </div>
            <button className="border px-6 py-2 sm:px-4 sm:py-1 rounded-lg hover:bg-gray-100 border-gray-200 shadow-sm transition-colors w-full sm:w-auto hover:cursor-pointer">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <button className="border p-3 sm:p-4 border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors hover:cursor-pointer flex flex-col items-center justify-center gap-2">
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                <span className="text-sm sm:text-base font-medium">Call</span>
              </button>

              <button className="border p-3 sm:p-4 border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors hover:cursor-pointer flex flex-col items-center justify-center gap-2">
                <MessageSquareMore className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                <span className="text-sm sm:text-base font-medium">Text</span>
              </button>

              <button className="border p-3 sm:p-4 border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors hover:cursor-pointer flex flex-col items-center justify-center gap-2">
                <Video className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                <span className="text-sm sm:text-base font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailPage;