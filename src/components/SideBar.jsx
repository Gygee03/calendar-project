import { LuCalendar1 } from "react-icons/lu";
import { LuChartArea } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";

const SideNavBar = () => {
    return (
        <div>
            <div className='flex flex-col justify-between bg-teal-600 border-r text-white w-fit h-screen px-3 py-5 select-none'>
                <div>
                    <ul className="flex flex-col justify-center items-center">
                        <li className="w-8 h-8 flex justify-center items-center my-2 rounded-xl bg-white/15 text-white shadow-xs cursor-pointer transition-all"><LuCalendar1 /></li>
                        <li className="w-8 h-8 flex justify-center items-center my-2 rounded-xl hover:bg-white/10 hover:text-white cursor-pointer transition-all"><LuChartArea /></li>
                        <li className="w-8 h-8 flex justify-center items-center my-2 rounded-xl hover:bg-white/10 hover:text-white cursor-pointer transition-all"><LuBell /></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col justify-center items-center">
                        <li className="w-8 h-8 flex justify-center items-center my-2 rounded-xl hover:bg-white/10 hover:text-white cursor-pointer transition-all"><LuSettings /></li>
                        <li className="w-8 h-8 flex justify-center items-center my-2 rounded-xl hover:bg-white/10 hover:text-white cursor-pointer transition-all"><LuUserRound /></li>
                    </ul>
                </div>

            </div>
        </div>
    )
};

export default SideNavBar;