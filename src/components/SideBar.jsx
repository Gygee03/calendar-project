import { LuCalendar1 } from "react-icons/lu";
import { LuChartArea } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";

const SideNavBar = () => {
    return (
        <div>
            <div className='bg-blue-500 text-white w-fit p-3'>
                <ul className="flex flex-col justify-center items-center">
                    <li className="w-8 h-8 flex justify-center items-center"><LuCalendar1 /></li>
                    <li className="w-8 h-8 flex justify-center items-center"><LuChartArea /></li>
                    <li className="w-8 h-8 flex justify-center items-center"><LuUserRound /></li>
                </ul>
            </div>
        </div>
    )
};

export default SideNavBar;