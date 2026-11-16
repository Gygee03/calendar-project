import { useState } from 'react';
import { LuCheck, LuListTodo } from "react-icons/lu";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'task 1', completed: false },
        { id: 2, text: 'task 2', completed: false },
        { id: 3, text: 'task 3', completed: false },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="p-4 flex-1 flex flex-col bg-white">
            <div className="flex items-center gap-2 mb-3">
                <LuListTodo className="w-3.5 h-3.5 text-teal-600" />
                <h2 className="text-xs font-semibold text-slate-800 tracking-tight">
                    To-Do
                </h2>
            </div>
            <div className='flex flex-col gap-1'>
                {tasks.map((task) => (
                    <label
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className="flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-slate-50 cursor-pointer transition-colors group select-none border border-transparent hover:border-slate-200/60"
                    >
                        <div className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border transition-all ${
                            task.completed
                                ? 'bg-teal-50 border-teal-500 text-teal-600'
                                : 'bg-white border-slate-300 group-hover:border-teal-500'
                        }`}>
                            {task.completed && <LuCheck className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>

                        <span className={`text-xs transition-colors ${
                            task.completed
                                ? 'line-through text-slate-400'
                                : 'text-slate-600 group-hover:text-slate-900'
                        }`}>
                            {task.text}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default TodoList;