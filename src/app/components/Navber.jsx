import Image from 'next/image';
import Link from 'next/link';
import { CiSearch, CiShoppingCart } from "react-icons/ci";

import logo from '../../../public/assets/logo.svg';
import Btn from './clientComponents/btn';

const Navber = () => {
    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between border-b-2 border-purple-400 rounded-lg">
            <Link href={'/'}><Image src={logo} alt='Car Doctor Logo' width={110} height={86.78} /></Link>
            <div className='flex gap-5'>
                {
                    navLinks.map(link => <Link key={link.path} href={link.path} className='font-medium hover:bg-[#FF3811] px-5 py-2 rounded hover:text-white'>{link.title}</Link>)
                }
            </div>
            <div className='flex items-center gap-4'>
                <CiShoppingCart className='text-3xl '/>
                <CiSearch className='text-3xl '/>                
                <Btn btnText={'Appointment'}></Btn>
            </div>
        </div>
    );
};

export default Navber;