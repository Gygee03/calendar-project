import MiniCalenDar from "./MiniCalendar";
import TodoList from "./TodoList";

const MiniSideBar = () => {
    return (
        <div className="bg-slate-50 w-2xs max-w-sm h-screen py-0 px-0">
            <MiniCalenDar />
            <TodoList />
        </div>
    );
}

export default MiniSideBar;