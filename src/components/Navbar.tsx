import Image from "next/image"
import {  FaSearch} from "react-icons/fa"
import { FaSignalMessenger } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import logo from '../assets/log.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
      <FaSearch/>
        {/* <Image src="/search.png" alt="" width={14} height={14}/> */}
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
        <FaSignalMessenger />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
        <HiOutlineSpeakerphone />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">Tadiwanashe Kunaka</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src={logo}  alt="" width={36} height={36} className="rounded-full"/>
      </div>
    </div>
  )
}

export default Navbar