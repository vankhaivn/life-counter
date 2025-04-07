export const CountdownBox = ({
    value,
    label,
    color,
}: {
    value: number;
    label: string;
    color: string;
}) => {
    return (
        <div
            className={`flex flex-col items-center ${color} rounded-lg p-4 w-24 h-24 md:w-28 md:h-28 justify-center transition-all hover:translate-y-1`}
        >
            <div className="text-2xl md:text-3xl font-bold">{value < 10 ? `0${value}` : value}</div>
            <div className="text-xs mt-1 text-gray-300 font-medium uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
};
