import MiniCalendar from "./MiniCalendar_3";
import TodoList from "./TodoList_3";

const MiniSideBar = () => {
    return (
        <div className="bg-white w-72 h-screen border-r border-slate-200/80 flex flex-col divide-y divide-slate-100 overflow-hidden select-none">
            <MiniCalendar />
            <TodoList />
        </div>
    );
}

export default MiniSideBar;