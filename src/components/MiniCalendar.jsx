import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { useState } from 'react';

const MiniCalenDar = () => {
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const years = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayIndex = new Date(years, month, 1).getDay();
    const daysInCurrentMonth = new Date(years, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(years, month, 0).getDate();

    const calendarCells = [];

    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const dayNum = daysInPrevMonth - i;
        calendarCells.push({
            date: new Date(years, month - 1, dayNum),
            day: dayNum,
            isCurrentMonth: false,
        })
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const dayNum = i;
        calendarCells.push({
            date: new Date(years, month, dayNum),
            day: dayNum,
            isCurrentMonth: true,
        })
    }

    const remainCells = 7 - (calendarCells.length % 7);
    if (remainCells < 7) {
        for (let i = 1; i <= remainCells; i++) {
            const dayNum = i;
            calendarCells.push({
                date: new Date(years, month + 1, dayNum),
                day: dayNum,
                isCurrentMonth: false,
            })
        }
    }
    const isSameDay = (d1, d2) => {
        if (!d1 || !d2) return false;
        return (
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
        );
    };

    const handlePrevMonth = () => setCurrentDate(new Date(years, month - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(years, month + 1, 1));

    return (
        <div>
            <div className="bg-slate-50 w-2xs max-w-sm py-5 px-3">
                {/* Header */}
                <div className="flex justify-between items-center">
                    {/* Month and Years */}
                    <b className="text-lg font-semibold text-teal-700">
                        {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </b>
                    {/* Prev and Next Icon */}
                    <div className="flex text-teal-700 items-center">
                        <button onClick={handlePrevMonth}>
                            <LuChevronLeft />
                        </button>
                        <button onClick={handleNextMonth}>
                            <LuChevronRight />
                        </button>
                    </div>
                </div>

                {/* Day */}
                <div className="mt-5 mb-3">
                    <div className="grid grid-cols-7 justify-center place-items-center">
                        {daysOfWeek.map((day, idx) => (
                            <span key={idx} className="text-sm font-semibold text-teal-700">
                                {day}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Date */}
                <div className="grid grid-cols-7 place-items-center">
                    {calendarCells.map((item, idx) => {
                        const isSelected = isSameDay(item.date, selectedDate);
                        const isCurrent = item.isCurrentMonth;

                        let buttonClass = 'bg-transparent text-teal-600';

                        if (!isCurrent) {
                            buttonClass = 'text-slate-300 hover:bg-transparent cursor-default';
                        }
                        else if (isSelected) {
                            buttonClass = 'bg-teal-600 text-white font-medium shadow-xs shadow-teal-200 hover:bg-teal-700';
                        }

                        return (
                            <div key={idx} className="relative flex flex-col items-center justify-between">
                                <button
                                    type="button"
                                    disabled={!isCurrent}
                                    onClick={() => setSelectedDate(item.date)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-base transition-colors ${buttonClass}`}
                                >
                                    {item.day}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default MiniCalenDar;