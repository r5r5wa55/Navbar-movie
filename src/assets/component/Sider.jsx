import { FaAdjust, FaAlipay, FaBlog, FaHome, FaSass } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Sider() {
  return (
    <div className="sm:w-64 bg-slate-800 h-full sm:fixed text-white w-full">
        <div className="sm:w-56 px-5  mx-auto w-full">
            <h1 className=" text-xl font-bold py-5 ">Admin Dashbord</h1>
            <h1 className="border-b-2 "></h1>
        </div>
        <div className="w-60 mx-auto  gap-2 ">
          <Link to='/'>
               <div className="flex items-center my-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer">
                    <FaHome className="text-3xl mx-2 "/>
                    <h1 className=" text-xl  font-bold">Home</h1>
               </div>
          </Link>
          <Link to='/movie'>
               <div className="flex items-center my-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer">
                    <FaBlog className="text-3xl mx-2 "/>
                    <h1 className=" text-xl  font-bold">FaBlog</h1>
               </div>
           </Link>
           <div className="flex items-center my-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer">
                <FaAdjust className="text-3xl mx-2 "/>
                <h1 className=" text-xl  font-bold">FaAdjust</h1>
           </div>
           <div className="flex items-center my-3 hover:bg-blue-700 rounded-md p-2 cursor-pointer">
                <FaAlipay className="text-3xl mx-2 "/>
                <h1 className=" text-xl  font-bold">FaAlipay</h1>
           </div>
           <div className="flex items-center  hover:bg-blue-700 rounded-md p-2 cursor-pointer">
                <FaSass className="text-3xl mx-2 "/>
                <h1 className=" text-xl  font-bold ">FaSass</h1>
           </div>
           <div className="h-2">
              
           </div>
        </div>
    </div>
  )
}
