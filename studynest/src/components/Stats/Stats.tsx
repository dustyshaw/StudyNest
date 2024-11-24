import React, { useEffect, useState } from "react";
import BarChartComponent from "./RadialBarChart";
import { UserAccount } from "../../@types/userAccount";

interface StatsProps {
  user: UserAccount;
}

const Stats: React.FC<StatsProps> = ({ user }) => {
  const streak = user.streak;

  const dayNumber = new Date().getDay();

  const daysOfWeekAbreviated = ["Su", "M", "T", "W", "Th", "F", "Sa"];

  const [streakDots, setStreakDots] = useState<string[]>([]);
  useEffect(() => {
    const newStreakDots: string[] = [];
    const threshold = dayNumber - streak;

    for (let i = 0; i < 7; i++) {
      if (i > threshold) {
        newStreakDots.push("active");
      } else {
        newStreakDots.push("inactive");
      }
    }

    setStreakDots(newStreakDots);
  }, [streak]);

  return (
    <>
      <div>{user.streak} day streak</div>
      <div className="flex justify-between mt-2">
        {daysOfWeekAbreviated.map((day, index) => (
          <div key={index} className="text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-2">
        {streakDots.map((dot, key) => (
          <div key={key} className="flex flex-col items-center">
            <div
              className={`w-3 h-3 rounded-full ${
                dot === "active" ? "bg-lime-500" : "bg-gray-300"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <BarChartComponent />
    </>
  );
};

export default Stats;
