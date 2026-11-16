import MiniCalendar from "./MiniCalendar";
import TodoList from "./TodoList";

const MiniSideBar = () => {
    return (
        <div className="bg-white w-72 h-screen border-r border-slate-200/90 flex flex-col divide-y divide-slate-100 overflow-hidden select-none shadow-xs">
            <MiniCalendar />
            <TodoList />
        </div>
    );
}

export default MiniSideBar;