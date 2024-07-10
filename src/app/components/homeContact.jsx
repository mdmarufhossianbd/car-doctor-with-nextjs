import { FaMapLocationDot } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";

const HomePageContact = () => {
    return (
        <div className='grid grid-cols-3 bg-[#151515] text-white rounded-xl px-20 py-28'>
            <div className="flex items-center gap-5">
                <LuCalendarClock className="text-5xl text-[#FF3811]" />
                <div className="flex gap-3 flex-col">
                    <h4 className="font-semibold">We are open monday-friday</h4>
                    <h4 className="text-2xl font-semibold">7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <PiPhoneCallFill className="text-5xl text-[#FF3811]" />
                <div className="flex gap-3 flex-col">
                    <h4 className="font-semibold">Have a question?</h4>
                    <h4 className="text-2xl font-semibold">+2546 251 2658</h4>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <FaMapLocationDot className="text-5xl text-[#FF3811]" />
                <div className="flex gap-3 flex-col">
                    <h4 className="font-semibold">Need a repair? our address</h4>
                    <h4 className="text-2xl font-semibold">Liza Street, New York</h4>
                </div>
            </div>
        </div>
    );
};

export default HomePageContact;