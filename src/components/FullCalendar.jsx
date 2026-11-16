import { useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuPlus, LuCalendar, LuClock, LuMapPin } from "react-icons/lu";

const FullCalendar = () => {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [events, setEvents] = useState([
        { id: 1, date: new Date(2026, 10, 16), title: 'Design Review', time: '10:00 AM - 11:30 AM', location: 'Meeting Room A', color: 'teal' },
        { id: 2, date: new Date(2026, 10, 16), title: 'Sync with Team', time: '02:00 PM - 03:00 PM', location: 'Online', color: 'slate' },
        { id: 3, date: new Date(2026, 10, 20), title: 'Project Deadline', time: '05:00 PM', location: 'Workspace', color: 'teal' },
    ]);

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
        });
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
        calendarCells.push({
            date: new Date(years, month, i),
            day: i,
            isCurrentMonth: true,
        });
    }

    const remainCells = 7 - (calendarCells.length % 7);
    if (remainCells < 7) {
        for (let i = 1; i <= remainCells; i++) {
            calendarCells.push({
                date: new Date(years, month + 1, i),
                day: i,
                isCurrentMonth: false,
            });
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
    const handleToday = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
    };

    const today = new Date();
    const selectedDayEvents = events.filter((e) => isSameDay(e.date, selectedDate));

    return (
        /* สไตล์ MUI Paper Background พื้นหลังสะอาดตา */
        <div className="h-screen flex flex-col bg-slate-50/60 p-4 overflow-hidden select-none box-border">
            {/* Toolbar - MUI AppBar / Toolbar style */}
            <div className="flex items-center justify-between pb-3 shrink-0">
                <div className="flex items-center gap-3">
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">
                        {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h1>
                    <span className="hidden md:inline-flex items-center rounded-full bg-teal-50 px-3 py-0.5 text-xs font-semibold text-teal-700 border border-teal-200/80 shadow-2xs">
                        {events.length} Events Total
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    {/* MUI Outlined Button style */}
                    <button
                        type="button"
                        onClick={handleToday}
                        className="inline-flex items-center justify-center rounded-lg text-xs font-medium transition-all border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-teal-700 h-9 px-3.5 shadow-2xs cursor-pointer active:scale-98"
                    >
                        Today
                    </button>

                    {/* MUI Button Group style */}
                    <div className="inline-flex items-center rounded-lg border border-slate-300 bg-white shadow-2xs overflow-hidden">
                        <button
                            type="button"
                            onClick={handlePrevMonth}
                            className="inline-flex items-center justify-center h-9 w-9 text-slate-600 hover:text-teal-700 hover:bg-slate-100 border-r border-slate-300 transition-colors cursor-pointer"
                            aria-label="Previous month"
                        >
                            <LuChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={handleNextMonth}
                            className="inline-flex items-center justify-center h-9 w-9 text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors cursor-pointer"
                            aria-label="Next month"
                        >
                            <LuChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* MUI Contained Primary Button style */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg text-xs font-medium transition-all bg-teal-600 text-white hover:bg-teal-700 h-9 px-4 shadow-sm hover:shadow cursor-pointer active:scale-98"
                    >
                        <LuPlus className="w-4 h-4" />
                        <span>Add Event</span>
                    </button>
                </div>
            </div>

            {/* Main Grid: MUI Paper Container */}
            <div className="flex-1 min-h-0 grid grid-cols-12 gap-4">
                {/* ตารางปฏิทินหลัก (ฝั่งซ้าย - 9 ส่วน) */}
                <div className="col-span-12 lg:col-span-9 flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
                    {/* Days Header */}
                    <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50/80 shrink-0">
                        {daysOfWeek.map((day, idx) => (
                            <div
                                key={idx}
                                className="py-2.5 text-center text-xs font-bold text-slate-600 tracking-wider border-r last:border-r-0 border-slate-200/60"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Cells */}
                    <div className="flex-1 grid grid-cols-7 grid-rows-6">
                        {calendarCells.map((item, idx) => {
                            const isSelected = isSameDay(item.date, selectedDate);
                            const isToday = isSameDay(item.date, today);
                            const isCurrent = item.isCurrentMonth;

                            const dayEvents = events.filter((e) => isSameDay(e.date, item.date));

                            return (
                                <div
                                    key={idx}
                                    onClick={() => isCurrent && setSelectedDate(item.date)}
                                    className={`p-2 border-b border-r border-slate-200/70 nth-[7n]:border-r-0 transition-colors flex flex-col justify-between group overflow-hidden ${
                                        isCurrent
                                            ? isSelected
                                                ? 'bg-teal-50/60 ring-1 ring-inset ring-teal-500/30'
                                                : 'bg-white hover:bg-slate-50/60 cursor-pointer'
                                            : 'bg-slate-50/40 text-slate-300 cursor-default'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium transition-all ${
                                                !isCurrent
                                                    ? 'text-slate-300'
                                                    : isSelected
                                                    ? 'bg-teal-600 text-white shadow-xs font-semibold'
                                                    : isToday
                                                    ? 'bg-teal-100 text-teal-800 font-semibold'
                                                    : 'text-slate-700 group-hover:text-teal-700'
                                            }`}
                                        >
                                            {item.day}
                                        </span>

                                        {isCurrent && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedDate(item.date);
                                                }}
                                                className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-slate-400 hover:text-teal-700 hover:bg-teal-100/50 transition-all cursor-pointer"
                                                title="Add Event"
                                            >
                                                <LuPlus className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>

                                    {/* MUI Chip Style for Events */}
                                    <div className="mt-0.5 flex flex-col gap-1 overflow-y-auto">
                                        {dayEvents.map((ev, evIdx) => (
                                            <div
                                                key={evIdx}
                                                className={`px-2 py-0.5 rounded-md text-[11px] font-medium truncate border shadow-2xs ${
                                                    ev.color === 'teal'
                                                        ? 'bg-teal-50 text-teal-700 border-teal-200'
                                                        : 'bg-slate-100 text-slate-700 border-slate-200'
                                                }`}
                                            >
                                                {ev.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* แผง Agenda ฝั่งขวา (3 ส่วน) - MUI Card Style */}
                <div className="col-span-12 lg:col-span-3 flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs p-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                        <div className="flex items-center gap-2">
                            <LuCalendar className="w-4 h-4 text-teal-600" />
                            <h2 className="text-sm font-bold text-slate-900">
                                {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </h2>
                        </div>
                        <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/80 shadow-2xs">
                            {selectedDayEvents.length} Events
                        </span>
                    </div>

                    <div className="flex-1 overflow-y-auto flex flex-col gap-2.5 pr-1">
                        {selectedDayEvents.length > 0 ? (
                            selectedDayEvents.map((ev) => (
                                <div 
                                    key={ev.id} 
                                    className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col gap-1.5 hover:border-teal-400 hover:shadow-xs transition-all"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-900">{ev.title}</span>
                                        <span className={`w-2 h-2 rounded-full ${ev.color === 'teal' ? 'bg-teal-600' : 'bg-slate-400'}`}></span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                        <LuClock className="w-3 h-3 text-slate-400" />
                                        <span>{ev.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                        <LuMapPin className="w-3 h-3 text-slate-400" />
                                        <span>{ev.location}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                                    <LuCalendar className="w-6 h-6 text-slate-400" />
                                </div>
                                <p className="text-xs font-medium text-slate-700">No events scheduled</p>
                                <p className="text-[11px] text-slate-400 mt-0.5">Select another date or add an event.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullCalendar;