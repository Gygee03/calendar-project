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
            <div className="p-5">
                {/* Header */}
                <div className="flex justify-between items-center">
                    {/* Month and Years */}
                    <b className="text-sm font-semibold text-slate-800 tracking-tight">
                        {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </b>
                    {/* Prev and Next Icon */}
                    <div className="flex text-teal-700 items-center gap-1">
                        <button onClick={handlePrevMonth} className="p-1.5 rounded-lg border border-slate-200/80 text-slate-500 hover:text-teal-700 hover:bg-slate-50 transition-colors cursor-pointer">
                            <LuChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={handleNextMonth} className="p-1.5 rounded-lg border border-slate-200/80 text-slate-500 hover:text-teal-700 hover:bg-slate-50 transition-colors cursor-pointer">
                            <LuChevronRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* Day */}
                <div className="mt-5 mb-3">
                    <div className="grid grid-cols-7 place-items-center mb-2">
                        {daysOfWeek.map((day, idx) => (
                            <span key={idx} className="text-[11px] font-medium text-slate-400">
                                {day}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Date */}
                <div className="grid grid-cols-7 gap-y-1 place-items-center">
                    {calendarCells.map((item, idx) => {
                        const isSelected = isSameDay(item.date, selectedDate);
                        const isCurrent = item.isCurrentMonth;

                        let buttonClass = 'text-slate-700 hover:bg-teal-50 hover:text-teal-700 cursor-pointer';

                        if (!isCurrent) {
                            buttonClass = 'text-slate-300 cursor-default';
                        }
                        else if (isSelected) {
                            buttonClass = 'bg-teal-600 text-white font-medium shadow-xs hover:bg-teal-700 cursor-pointer';
                        }

                        return (
                            <div key={idx} className="relative flex flex-col items-center justify-between">
                                <button
                                    type="button"
                                    disabled={!isCurrent}
                                    onClick={() => setSelectedDate(item.date)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-full text-xs transition-all ${buttonClass}`}
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