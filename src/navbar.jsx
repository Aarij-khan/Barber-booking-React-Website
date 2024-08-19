import React, { useState } from 'react'
import barber2 from "./assets/barber2.png"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import "./slider.css";
function Navbar() {
  const [isShow, setShow] = useState(false);
  
  return (
    <div>
      {/* slider start*/}
      <div >
        <div className={`zoomIn ${isShow ? "zoomOut" : ""}  sm:hidden block  `}>
          <div className="w-full flex justify-end p-3">
            <button
              onClick={() => setShow(false)}
              className="text-xl  text-white"
            >
              <ImCross />
            </button>
          </div>
          <div className="h-[100vh] w-full ml-4 ">
            <ul className="mt-5">
              <li className=" flex  items-center gap-3 text-xl text-white font-mono  mt-1">
                <span className="text-black">
                  <FaHome />
                </span>
                Home
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <FaHandshake />
                </span>
                <Link to="/booking">
                Appointment
                </Link>
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <IoMdContact />
                </span>
                About Us
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <FaServicestack />
                </span>
                Sevices
              </li>
              <li className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <MdContacts />
                </span>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* slider end*/}

    <div className='w-full bg-black h-18 flex items-center justify-between p-2 overflow-x-hidden '>
      <div className='flex gap-4 items-center font-mono text-xl'>
        <img src={barber2} alt="logo" className='h-[70px] w-[70px] rounded-full ml-2'/>
        <h1 className='text-orange-400'>Barber Shop</h1>
      </div>
      <ul className='sm:flex text-white gap-10 text-xl hidden sm:mr-3 font-mono font-bold'>
        <li>Home</li>
        <li>Services</li>
        <li>
          <Link to='./signin'>
          Dashboard
          </Link>
          </li>
      </ul>
      <button className='p-2 hidden h-[40px] w-[170px] rounded-xl bg-orange-600  text-white sm:mr-1 sm:flex'>
        <Link to="/booking">
        Book an appointment
        </Link></button>
        <div className="mr-2 sm:hidden">
        <span className="text-white text-2xl" onClick={() => setShow(!isShow)}>
          {isShow ? (
            <span>
              <ImCross />
            </span>
          ) : (
            <span>
              <FaBars />
            </span>
          )}
        </span>
      </div>
    </div>
  </div>
  )
}

export default Navbar
// https://dribbble.com/shots/19544062-Barbershop-Landing-Page-Design/attachments/14672320?mode=media