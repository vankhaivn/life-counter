import { useEffect, useState } from "react";

export const useWeekdayCountdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [message, setMessage] = useState("");
    const [phase, setPhase] = useState(1); // 1: Working, 2: Friday, 3: Weekend
    const [dayName, setDayName] = useState("");
    const [targetDay, setTargetDay] = useState("");

    useEffect(() => {
        const calculateCountdown = () => {
            const now = new Date();
            const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 5 is Friday, 6 is Saturday
            let targetDate;
            let targetDayName = "";
            let currentPhase = 1;

            // Get current day name
            const currentDayName = now.toLocaleDateString("en-US", { weekday: "long" });
            setDayName(currentDayName);

            // Logic to determine the target date based on the current day
            if (currentDay >= 1 && currentDay <= 4) {
                // Monday to Thursday (Phase 1) - counting down to Friday
                targetDate = new Date(now);
                const daysToFriday = 5 - currentDay;
                targetDate.setDate(now.getDate() + daysToFriday);
                targetDate.setHours(0, 0, 0, 0);
                targetDayName = "Friday";
                currentPhase = 1;
            } else if (currentDay === 5) {
                // Friday (Phase 2) - counting down to Saturday
                targetDate = new Date(now);
                targetDate.setDate(now.getDate() + 1);
                targetDate.setHours(0, 0, 0, 0);
                targetDayName = "Saturday";
                currentPhase = 2;
            } else {
                // Saturday and Sunday (Phase 3) - counting down to Monday
                targetDate = new Date(now);
                const daysToMonday = currentDay === 6 ? 2 : 1; // 2 days if Saturday, 1 day if Sunday
                targetDate.setDate(now.getDate() + daysToMonday);
                targetDate.setHours(0, 0, 0, 0);
                targetDayName = "Monday";
                currentPhase = 3;
            }

            setTargetDay(targetDayName);

            // Calculate the time remaining
            const timeRemaining = targetDate.getTime() - now.getTime();

            // Calculate days, hours, minutes, seconds
            const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor(
                (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);
            setPhase(currentPhase);

            // Update message based on the calculated time remaining
            if (daysRemaining === 1) {
                setMessage(`1 day left until ${targetDayName}`);
            } else if (daysRemaining === 0) {
                setMessage(`Less than a day until ${targetDayName}`);
            } else {
                setMessage(`${daysRemaining} days left until ${targetDayName}`);
            }
        };

        calculateCountdown();
        const timer = setInterval(calculateCountdown, 1000);

        return () => clearInterval(timer);
    }, []);

    return { days, hours, minutes, seconds, message, phase, dayName, targetDay };
};
