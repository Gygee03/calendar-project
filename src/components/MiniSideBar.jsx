import MiniCalenDar from "./MiniCalendar";
import TodoList from "./TodoList";

const MiniSideBar = () => {
    return (
        <div className="bg-white w-72 h-screen border-r border-slate-200/80 flex flex-col divide-y divide-slate-100 overflow-y-auto">
            <MiniCalenDar />
            <TodoList />
        </div>
    );
}

export default MiniSideBar;