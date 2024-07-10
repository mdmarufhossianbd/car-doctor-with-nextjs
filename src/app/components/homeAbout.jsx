import Image from 'next/image';
import aboutImage1 from '../../../public/assets/images/about_us/parts.jpg';
import aboutImage2 from '../../../public/assets/images/about_us/person.jpg';
import RegBgBtn from './clientComponents/RegBgBtn';
const HomeAbout = () => {
    return (
        <div className='flex gap-16'>
            <div className='relative'>                
                <Image className='w-[90%] h-[80%] object-cover rounded-lg' src={aboutImage2} width='100%' height='100%' alt='about us person' />
                <Image className='w-[55%] h-[60%] object-cover absolute border-8 border-white rounded bottom-0 right-0' src={aboutImage1} width={320} height={350} alt='about us parts'/>
            </div>
            <div className='flex flex-col justify-between gap-10'>
                <p className='text-[#FF3811] font-medium'>About Us</p>
                <h2 className="text-5xl w-3/4 font-semibold text-[#151515]">We are qualified & of experience in this field</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                </p>
                <p>
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                </p>
                <div className='w-1/3'><RegBgBtn text={'Get More Info'} /></div>
            </div>
        </div>
    );
};

export default HomeAbout;