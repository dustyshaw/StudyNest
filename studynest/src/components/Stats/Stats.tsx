import React from 'react'
import BarChartComponent from './RadialBarChart'
import { UserAccount } from '../../@types/userAccount'

interface StatsProps {
    user: UserAccount
}

const Stats: React.FC<StatsProps> = ({ user }) => {

    const streak = user.streak;

    // Render 7 days for the week
    const daysOfWeek = ["M", "T", "W", "Th", "F", "S", "S"];

    // Generate the streak dots, coloring based on the user's streak
    const streakDots = Array.from({ length: 7 }, (_, index) => {
        // If the index is less than the streak, color it (active streak day)
        return index >= 7 - streak ? "active" : "inactive";
    });

    return (
        <>
            <div>{user.streak} day streak</div>
            {/* Days of the week above the dots */}
            <div className="flex justify-between mt-2">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="text-sm">{day}</div>
                ))}
            </div>

            {/* Render the streak dots below */}
            <div className="flex justify-between mt-2">
                {streakDots.map((dot, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            className={`w-3 h-3 rounded-full ${dot === "active" ? "bg-green-500" : "bg-gray-400"
                                }`}
                        ></div>
                    </div>
                ))}
            </div>
            <BarChartComponent />
        </>
    )
}


export default Stats;