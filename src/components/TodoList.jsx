import { useState } from 'react';
import { LuCheck } from "react-icons/lu";

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
        <div>
            <div className="p-5">
                <h2 className="text-sm font-semibold text-slate-800 tracking-tight mb-3.5">
                    To-Do
                </h2>
                <div className='flex flex-col gap-1.5'>
                    {tasks.map((task) => (
                        <label
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className="flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group select-none"
                        >
                            <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-all ${task.completed
                                ? 'bg-teal-50 border-teal-500 text-teal-600'
                                : 'bg-white border-slate-300 group-hover:border-teal-500'
                                }`}>
                                {task.completed && <LuCheck className="w-3 h-3 stroke-[2.5]" />}
                            </div>

                            <span className={`text-sm transition-colors ${task.completed
                                ? 'line-through text-slate-400'
                                : 'text-slate-600 group-hover:text-slate-900'
                                }`}>
                                {task.text}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;