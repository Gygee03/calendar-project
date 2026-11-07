import { LuCalendar1 } from "react-icons/lu";
import { LuChartArea } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";

const SideNavBar = () => {
    return (
        <div>
            <div className='flex flex-col justify-between bg-teal-600 text-white w-fit h-screen px-3 py-5'>
                <div>
                    <ul className="flex flex-col justify-center items-center">
                        <li className="w-8 h-8 flex justify-center items-center my-2"><LuCalendar1 /></li>
                        <li className="w-8 h-8 flex justify-center items-center my-2"><LuChartArea /></li>
                        <li className="w-8 h-8 flex justify-center items-center my-2"><LuBell /></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col justify-center items-center">
                        <li className="w-8 h-8 flex justify-center items-center my-2"><LuSettings /></li>
                        <li className="w-8 h-8 flex justify-center items-center my-2"><LuUserRound /></li>
                    </ul>
                </div>

            </div>
        </div>
    )
};

export default SideNavBar;