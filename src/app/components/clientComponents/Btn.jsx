"use client"

import Link from "next/link";

const Btn = ({ btnText }) => {
    return (
        <Link href={'/'} className="text-[#FF3811] font-medium px-7 py-4 border border-[#FF3811] rounded-md hover:bg-[#FF3811] hover:text-white">
            {btnText}
        </Link>
    );
};

export default Btn;