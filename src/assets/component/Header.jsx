

import {FaBars, FaBell, FaSearch, FaUserCircle} from 'react-icons/fa'

export default function Header() {
  return (
    <div 
      className="bg-slate-800 px-4 py-3  sm:flex justify-between ml-64 hidden ">
        <div className="flex gap-2 items-center">
          <FaBars className='text-white text-2xl font-bold mt-1 '/>
          <h1 className="text-white text-2xl font-bold w-36 ">E-commerce</h1>
        </div>

        <div className="flex  items-center mt-2 justify-center gap-2">
          <div className="relative ">
            <span className=' absolute text-2xl'>
              <FaSearch className='mt-2 ml-2'/>  
            </span> 
            <input className='text-md p-1 rounded-md  w-auto md:w-80 px-1 py-2'></input>
          </div>
          <div className="text-white text-3xl">
            <FaBell />
          </div>



         <div className="relative ">
          <button className="text-white text-3xl group shadow-xl">
            <FaUserCircle className='mt-2'/>
            <div className="z-10 hidden absolute  bg-white group-focus:block shadow-xl sm:w-32 top-full right-0 rounded-lg">
              <ul className='text-black text-sm py-2 px-5 flex flex-col gap-3'>
                <a href="" className=' hover:border-b-2 border-black  '><li>Profile</li></a>
                <li className='hover:border-b-2 border-black '>Setting</li>
                <li className='hover:border-b-2 border-black '>Login</li>
              </ul>
            </div>
          </button>
         </div>
        
        </div>
 
    </div>
  )
}
