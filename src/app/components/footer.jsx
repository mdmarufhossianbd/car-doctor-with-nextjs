import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../../../public/assets/logo.svg';

const Footer = () => {

    return (
        <div className='bg-[#151515]'>
            <div className='max-w-7xl mx-auto py-[130px] text-white grid grid-cols-4 gap-[180px]'>
                <div className='w-[220px]'>
                    <Image src={logo} width={100} height={40} alt='logo' />
                    <p className='py-5'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className='flex gap-3'>
                        <FaGoogle className='p-4 text-5xl bg-[#2d2d2d] rounded-full' />
                        <FaTwitter className='p-4 text-5xl bg-[#2d2d2d] rounded-full' />
                        <FaInstagram className='p-4 text-5xl bg-[#2d2d2d] rounded-full' />
                        <FaLinkedin className='p-4 text-5xl bg-[#2d2d2d] rounded-full' />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl font-medium mb-10'>About</h4>
                    <div className='flex flex-col gap-3'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/service'}>Service</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl font-medium mb-10'>Company</h4>
                    <div className='flex flex-col gap-3'>
                        <Link href={'/why-car-doctor'}>Why Car Doctor</Link>
                        <Link href={'/about'}>About</Link>
                    </div>
                </div>
                <div>
                <h4 className='text-xl font-medium mb-10'>Support</h4>
                    <div className='flex flex-col gap-3'>
                        <Link href={'/support'}>Support Center</Link>
                        <Link href={'/feedback'}>Feedback</Link>
                        <Link href={'/terms-and-conditions'}>Accesbility</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;  