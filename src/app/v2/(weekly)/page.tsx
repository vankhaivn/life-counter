"use client";

import { CountdownBox, PhaseIndicator } from "@components/index";

import { useWeekdayCountdown } from "@hooks/index";

export default function WeeklyPage() {
    const { days, hours, minutes, seconds, message, phase, dayName, targetDay } =
        useWeekdayCountdown();

    // Define phase-based styling
    let accentColor = "border-blue-500"; // Default (phase 1)
    let boxColor = "bg-gray-800/80";
    let statusColor = "text-blue-400";
    let motivationalText = "Keep working hard, Friday is coming!";

    if (phase === 2) {
        accentColor = "border-yellow-500";
        statusColor = "text-yellow-400";
        motivationalText = "It's Friday! The weekend is almost here!";
    } else if (phase === 3) {
        accentColor = "border-green-500";
        statusColor = "text-green-400";
        motivationalText = "Enjoy your weekend! Monday is approaching...";
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <div className="w-full max-w-3xl bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 shadow-xl">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Weekday Countdown
                    </h1>

                    <div className="flex items-center justify-center gap-x-4 mb-8">
                        <PhaseIndicator phase={phase} dayName={dayName} />
                        <div
                            className={`text-lg md:text-xl font-medium border-l-4 ${accentColor} pl-3 py-1 inline-block ${statusColor}`}
                        >
                            {message}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <CountdownBox value={days} label="Days" color={boxColor} />
                        <CountdownBox value={hours} label="Hours" color={boxColor} />
                        <CountdownBox value={minutes} label="Minutes" color={boxColor} />
                        <CountdownBox value={seconds} label="Seconds" color={boxColor} />
                    </div>

                    <div
                        className={`mt-10 px-4 py-3 rounded-lg bg-gray-800/50 max-w-md mx-auto ${statusColor} text-sm font-medium`}
                    >
                        {days === 0 && hours === 0 && minutes === 0 && seconds === 0
                            ? `It's ${targetDay}!`
                            : motivationalText}
                    </div>

                    <div className="mt-8 text-sm text-gray-500 flex items-center justify-center font-semibold">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
