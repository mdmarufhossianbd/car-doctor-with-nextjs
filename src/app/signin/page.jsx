import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import loginImg from '../../../public/assets/images/login/login.svg';

const Signin = () => {
    return (
        <div className='max-w-7xl mx-auto my-16 flex items-center gap-20'>
            <div>
                <Image src={loginImg} width={600} height={800} alt='login' />
            </div>
            <div className='border rounded-md w-1/2 px-16'>
                <p className='text-6xl font-semibold text-center my-20'>Sign In</p>
                <form className='flex flex-col gap-4'>                    
                    <div className='flex flex-col gap-4'>
                        <label className='font-medium text-lg'>Email</label>
                        <input className='border px-4 py-2 rounded-md focus:outline-none' type="email" name="email" placeholder='Your email' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='font-medium text-lg'>Confirm Password</label>
                        <input className='border px-4 py-2 rounded-md focus:outline-none' type="password" name="email" placeholder='Your email' />
                    </div>
                    <input className='bg-[#FF3811] text-white py-3 rounded-md' type="submit" value="Sign Up" />
                </form>
                <p className='text-center my-5'>Or Sign Up with</p>
                <div className='text-5xl flex gap-3 justify-center'>
                    <FaFacebook />
                    <FcGoogle />
                </div>
                <p className='text-center my-10'>You havn&apos;t an account? <Link className='text-[#FF3811] font-medium' href={'/signup'}>Signup</Link></p>
            </div>
        </div>
    );
};

export default Signin;