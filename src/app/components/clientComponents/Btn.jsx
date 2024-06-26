"use client"

const Btn = ({ btnText }) => {
    return (
        <button className="text-[#FF3811] font-medium px-7 py-4 border border-[#FF3811] rounded-md hover:bg-[#FF3811] hover:text-white">
            {btnText}
        </button>
    );
};

export default Btn;