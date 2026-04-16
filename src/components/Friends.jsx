import React from "react";
import Link from "next/link";

const Friends = async () => {

  const res = await fetch("http://localhost:3000/data/friends.json");

  const friendsData = await res.json();

  const getStatusBadge = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-[#f4ac3c] text-white";
      default:
        return "bg-emerald-500 text-white";
    }
  };

  return (
    <div className="w-11/12 mx-auto mb-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {friendsData.map((friend) => (
          <Link
            key={friend.id}
            href={`/friends/${friend.id}`}
            className="group flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative mb-5">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500 p-0.5"
              />
            </div>

            <h3 className="text-xl font-extrabold text-[#28384f] mb-2 group-hover:text-emerald-600 transition-colors">
              {friend.name}
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              {friend.days_since_contact}d ago
            </p>

            <div className="bg-[#def7ec] text-[#046c4e] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              {friend.tags[0] || "Friend"}
            </div>

            <div
              className={`px-4 py-1.5 rounded-full text-sm font-bold capitalize ${getStatusBadge(friend.status)}`}
            >
              {friend.status}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;
