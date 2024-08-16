import Image from 'next/image';
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <Image src="/Logo.svg" alt="Hire & Fire Logo" width={120} height={60} />
          <p className="mt-4 text-sm leading-relaxed">
            Hire & Fire is a cutting-edge job website designed to
            connect employers with top-tier talent across various
            industries. Utilizing advanced matching algorithms, it
            streamlines the hiring process, ensuring quick and
            effective placements. Employers benefit from efficient
            tools for posting jobs, screening candidates, and
            managing applications. Ideal for businesses aiming for
            growth, Hire & Fire is your go-to resource for all
            recruitment needs. Please note that it operates on an
            employer basis and does not provide jobs directly to
            workers.
          </p>
          <button className="mt-4 bg-[#f90945] text-white px-4 py-2 rounded-lg">Contact Us</button>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className='flex gap-2'>
              <Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className='flex gap-2'>
              <Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li className='flex gap-2'>
              <Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li className='flex gap-2'>
              <Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Industries We Serve</a>
            </li>
            <li className='flex gap-2'>
              <Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Blog & News</a>
            </li>
            <li className='flex gap-2'>
              <Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">FAQ</a>
            </li>
            <li className='flex gap-2'>
              <Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className='flex gap-1'><Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Permanent Recruitment</a></li>
            <li className='flex gap-1'><Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Contract Staffing</a></li>
            <li className='flex gap-1'><Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Housing & Accommodation Support</a></li>
            <li className='flex gap-1'><Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Compliance and Legal Support</a></li>
            <li className='flex gap-1'><Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Workforce Planning</a></li>
            <li className='flex gap-1'><Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Background Checks</a></li>
            <li className='flex gap-1'><Image src="/Icon 3.svg" alt='' width={16} height={16} />
              <a href="#" className="hover:underline">Onboarding Support</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Your Email Here"
              className="w-full p-2 mb-2 rounded-lg text-black"
            />
            <button className="bg-[#f90945] text-white px-4 py-2 rounded-lg w-full">Subscribe</button>
          </form>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <Image src="/Icon 9.svg" alt="Phone Icon" width={16} height={16} />
              <span className="ml-2">+40 123 456 789</span>
            </li>
            <li className="flex items-center">
              <Image src="/Icon 10.svg" alt="Email Icon" width={16} height={16} />
              <span className="ml-2">contact@hireandfire.agency</span>
            </li>
            <li className="flex items-center">
              <Image src="/Icon 8.svg" alt="Location Icon" width={16} height={16} />
              <span className="ml-2">Strada ING. Zablovschi, Nr. 10, Biroul 1, Sectorul 1, Bucuresti, Romania.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container flex border-t border-white justify-between mx-auto text-center mt-12 text-sm">
        <p className=" pt-4">
          &copy; Copyright 2024 &quot; Hire & Fire &quot; All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <p>Follow us</p>
          <div className='w-[30px] h-[30px] flex justify-center items-center  rounded-full bg-white'>
            <a href="#"><BiLogoFacebook size={20} className='text-[#f90945]' /> </a></div>
          <div className='w-[30px] h-[30px] flex justify-center items-center  rounded-full bg-white'><a href="#">< IoLogoInstagram size={20} className='text-[#f90945]' /></a></div>
          <div className='w-[30px] h-[30px] flex justify-center items-center  rounded-full bg-white'><a href="#"><AiOutlineTwitter  size={20} className='text-[#f90945]' /></a></div>
          <div className='w-[30px] h-[30px] flex justify-center items-center  rounded-full bg-white'><a href="#"><FaTelegramPlane size={20} className='text-[#f90945]' /></a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
