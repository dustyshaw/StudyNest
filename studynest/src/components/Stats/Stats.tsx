import React, { useEffect, useState } from "react";
import BarChartComponent from "./RadialBarChart";
import { UserAccount } from "../../@types/userAccount";
import { BoltIcon } from "@heroicons/react/24/solid";

interface StatsProps {
  user: UserAccount;
}

const Stats: React.FC<StatsProps> = ({ user }) => {
  const streak = user.streak;
  const dayNumber = new Date().getDay();
  const daysOfWeekAbreviated = ["Su", "M", "T", "W", "Th", "F", "Sa"];

  const [streakDots, setStreakDots] = useState<string[]>([]);
  useEffect(() => {
    const threshold = dayNumber - streak;

    const newStreakDots = Array.from({ length: 7 }, (_, i) =>
      i >= threshold && i < dayNumber ? "active" : "inactive"
    );

    setStreakDots(newStreakDots);
  }, [streak, dayNumber]);

  return (
    <div className="m-8">
      <h1 className="text-2xl">Your Stats</h1>
      <div className="mt-8 flex justify-between xl:px-16 px-3">
        {daysOfWeekAbreviated.map((day, index) => (
          <div key={index} className="text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-2 xl:px-16 px-3">
        {streakDots.map((dot, key) => (
          <div key={key} className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full ${
                dot === "active"
                  ? "bg-lime-500 border border-lime-600"
                  : "bg-gray-300 border border-gray-400"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="xl:px-16 text-gray-600 flex flex-row mt-2">
        <BoltIcon className="w-6 text-gray-950 me-1" />
        <span className="font-semibold text-gray-700 me-1">{user.streak}</span>{" "}day
        streak
      </div>
      <BarChartComponent />
    </div>
  );
};

export default Stats;
