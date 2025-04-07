export const PhaseIndicator = ({ phase, dayName }: { phase: number; dayName: string }) => {
    let title = "";
    let description = "";
    let colorClass = "";
    let icon = "";

    if (phase === 1) {
        title = "Working Phase";
        description = "Focus and productivity time";
        colorClass = "text-blue-400";
        icon = "💼";
    } else if (phase === 2) {
        title = "Best Workday";
        description = "Friday feeling!";
        colorClass = "text-yellow-400";
        icon = "🎉";
    } else {
        title = "Holiday Phase";
        description = "Rest and recharge";
        colorClass = "text-green-400";
        icon = "🏖️";
    }

    return (
        <div className="bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
            <div className={`font-medium text-sm flex items-center justify-center ${colorClass}`}>
                <span className="mr-2">{icon}</span>
                <span>
                    {title} • Today is {dayName}
                </span>
            </div>
            <div className="text-xs text-gray-400 mt-1">{description}</div>
        </div>
    );
};
