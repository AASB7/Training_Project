
'use client'
import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  return (
    <div className='flex items-baseline pt-10 pb-10 sticky top-0 bg-color-bg  '>

     <h1 className='text-white font-bold  lg:text-3xl text-2xl lg:p-8 lg:pl-16 lg:pr-14 pl-10 '>GPT-3</h1>
  


   {/** This section to check if the menu open or not and change the icon based on that   */}
      {!open?
      ( <img className="icon_navbar " onClick={toggleMenu} src="images/menu.png"/> )
      : 
      <h1 className="icon_navbar text-white text-4xl font-bold " onClick=   {toggleMenu} >X</h1>
      }


   {/**Mobile sidebar and the transition */}
        <div
      className={`z-10 top-0 right-0 fixed bg-color-footer h-screen rounded-lg  mt-28 p-12 w-1/2  text-white  flex flex-col items-center space-y-8 drop-shadow-2xl transition ease-in duration-300 lg:hidden ${
        open ? "translate-x-0 " : "translate-x-full"
        }`}
        >
          <a href="#" className='font-bold text-xl hover_navbar'>Home </a>
          <a href="#" className='hover_navbar '>What is GPT? </a>
          <a href="#" className='hover_navbar '>Open AI </a>
          <a href="#" className='hover_navbar  '>Case Studies </a>
          <a href="#" className='hover_navbar  '>Library</a>
          <a href="#" className='hover_navbar flex items-center justify-center pt-16 '>Sign in </a>
          <a href="#" className='signup_button  mt-8 '>Sign up </a>

        </div>

     {/**Large screen navbar  */}
        <div className="hidden  lg:flex lg:flex-grow flex-row space-x-6  text-white  items-center text-l ">
        
            <a href="#" className='font-bold text-xl hover_navbar '>Home </a>
            <a href="#" className='hover_navbar '>What is GPT? </a>
            <a href="#" className='hover_navbar  '>Open AI </a>
            <a href="#" className='hover_navbar  '>Case Studies </a>
            <a href="#" className='hover_navbar  '>Library</a>
          <div className='flex md:flex-grow flex-row justify-end space-x-8 items-center pr-16'>
            <a href="#" className='hover_navbar '>Sign in </a>
            <a href="#" className='signup_button'>Sign up </a>
          </div>

        </div>


   </div>



  )
}

export default Navbar