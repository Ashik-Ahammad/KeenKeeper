"use client";

import React, { useContext, useState } from "react";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import { CalledFriendContext } from "@/context/callBtn.context";

const TimelinePage = () => {
  const { activities = [] } = useContext(CalledFriendContext);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const isSort = filter === "Newest" || filter === "Oldest";

  const filteredActivities = activities
    .filter((item) => {

      const matchesType =
        isSort || filter === "All"
          ? true
          : item.type.toLowerCase() === filter.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      return matchesType && matchesSearch;
    })
    .sort((a, b) => {
      if (filter === "Newest") {
        return new Date(b.date) - new Date(a.date);
      }
      if (filter === "Oldest") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

  return (
    <div
      className="p-4 sm:p-6 mt-6 md:mt-10 min-h-screen w-full md:w-9/12 lg:w-7/12
overflow-x-hidden mx-auto"
    >
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      <div className="mb-4 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full sm:w-auto flex-1 bg-white border-2 border-gray-300"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select bg-white border-2 border-gray-300"
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option disabled>──────────</option>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      {filteredActivities.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-4">
          {filteredActivities.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow rounded flex items-center gap-4"
            >

              <div>
                {item.type === "Call" ? (
                  <PhoneCall />
                ) : item.type === "Video" ? (
                  <Video />
                ) : (
                  <MessageSquareMore />
                )}
              </div>


              <div>
                <p>
                  <strong>{item.type}</strong> with{" "}
                  <span className="text-green-700">{item.name}</span>
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleString("en-US")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;