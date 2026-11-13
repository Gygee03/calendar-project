import { useState } from 'react';

const TodoList = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <div>
            <div className="bg-slate-50 w-2xs max-w-sm py-5 px-3">
                <p className="text-lg font-semibold text-teal-700">To-Do</p>
                <div>
                    <label className='flex items-center'>
                        <input type="checkbox" checked={isChecked} onClick={handleChange} className='w-4 h-4 m-3 rounded-full accent-teal-600 cursor-pointer'/>
                        <span className={isChecked ? 'line-through text-slate-400' : 'text-slate-800'}>
                            task 1
                        </span>
                    </label>
                    <label className='flex items-center'>
                        <input type="checkbox" checked={isChecked} onClick={handleChange} className='w-4 h-4 m-3 rounded-full accent-teal-600 cursor-pointer'/>
                        <span className={isChecked ? 'line-through text-slate-400' : 'text-slate-800'}>
                            task 2
                        </span>
                    </label>
                    <label className='flex items-center'>
                        <input type="checkbox" checked={isChecked} onClick={handleChange} className='w-4 h-4 m-3 rounded-full accent-teal-600 cursor-pointer'/>
                        <span className={isChecked ? 'line-through text-slate-400' : 'text-slate-800'}>
                            task 3
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TodoList;