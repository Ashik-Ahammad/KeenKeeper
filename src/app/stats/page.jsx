'use client'
import React, { useContext } from "react";
import { CalledFriendContext } from "@/context/callBtn.context";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const { activities } = useContext(CalledFriendContext);

  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  activities.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = [
    { name: "Call", value: counts.Call, fill: "#234F40" },
    { name: "Text", value: counts.Text, fill: "#8038F4" },
    { name: "Video", value: counts.Video, fill: "#37A162" },
  ].filter((item) => item.value > 0);

  return (
    <div className="p-4 sm:p-6 mt-6 md:mt-10 min-h-screen w-11/12 md:w-9/12 lg:w-7/12 mx-auto">
      <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">
        Stats
      </h1>

      {activities.length === 0 ? (
        <p data-aos="flip-left" className="text-center text-gray-500">No interactions logged yet.</p>
      ) : (
        <div className="bg-white shadow rounded-xl p-4 sm:p-6 flex flex-col items-center">
          <div className="w-full h-64 sm:h-80 md:h-96">
            <h2 className="text-lg">By Interaction Type</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="50%"
                  outerRadius="90%"
                  paddingAngle={5}
                  cornerRadius={5}
                />
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsPage;
