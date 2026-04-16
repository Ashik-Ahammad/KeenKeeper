import React from "react";
import Link from "next/link";

const Friends = async () => {
  const res = await fetch("http://localhost:3000/data/friends.json");
  const friendsData = await res.json();

  return (
    <div className="w-10/12 mx-auto mb-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {friendsData.map((friend) => (
          <Link key={friend.id} href={`/friends/${friend.id}`}>
            <div
              data-aos="fade-left"
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300 hover:cursor-pointer flex flex-col items-center"
            >
              <div className="flex justify-center">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                />
              </div>

              <h2 className="text-xl font-extrabold text-[#28384f] mt-4 group-hover:text-emerald-600 transition-colors">
                {friend.name}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {friend.days_since_contact}d ago
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-xs rounded-full bg-[#cbfadb] text-[#244D3F] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3">
                <span
                  className={`px-4 py-1.5 text-sm rounded-full font-bold capitalize ${
                    friend.status === "overdue"
                      ? "bg-[#ef4444] text-white"
                      : friend.status === "almost due"
                      ? "bg-[#efad44] text-white"
                      : friend.status === "on-track"
                      ? "bg-[#244D3F] text-white"
                      : "bg-gray-600 text-white"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;