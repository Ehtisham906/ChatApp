// import { LogOut, LucidePodcast, Plane, User } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore"

// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();

//   return (
//     <header className=" bg-base-100 border-b border-base-300 sticky w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
//       <div className="container max-auto px-4 h-16">
//         <div className="grid grid-cols-3 items-center justify-between h-full">
//           <div className="flex  items-center gap-8">
//             <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
//               <div className="size-9 rounded-lg bg-pink/10 flex items-center justify-center">
//                 <LucidePodcast className="w-5 h-5  " />
//               </div>
//               <h1 className="text-lg font-bold">Talkify</h1>
//             </Link>
//           </div>

//           <div>
//             <ul className="flex justify-between">
//               <li className="cursor-pointer">Home</li>
//               <li className="cursor-pointer">Features</li>
//               <li className="cursor-pointer">About Us</li>
//             </ul>
//           </div>

// <div className="flex justify-end gap-2"> 

//   <Link
//    to={"/login"}
//   className={`btn btn-sm gap-2 transition-colors ${authUser ? "hidden" : ""}`}
//   >

//     <Plane className="size-4" />
//     <span className="hidden sm:inline">Get Started</span>
//   </Link>

//   {authUser && (
//     <>
//       <Link to={"/profile"} className="btn btn-sm gap-2">
//         <User className="size-5" />
//         <span className="hidden sm:inline">Profile</span>
//       </Link>

//       <button className="flex gap-2 items-center" onClick={logout}>
//         <LogOut className="size-5" />
//         <span className="hidden sm:inline">Logout</span>
//       </button>
//     </>
//   )}
// </div>
//         </div>
//       </div>

//     </header>
//   )
// }

// export default Navbar



import { LogOut, LucidePodcast, Plane, User } from 'lucide-react';
import './Navbar.css';
// import logo from '../assets/images/logo.webp'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

function Navbar() {

  const { logout, authUser} = useAuthStore();
  const [navItems, setNavItems] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  function toogleNavbar() {
    setNavItems(!navItems)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100.99999999999999) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar z-20   items-center justify-around ${isScrolled ? '' : 'px-3 py-2'}`}>
      <div className="logo">

        <div className="flex  gap-8">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            <div className="size-9 rounded-lg flex items-center justify-center">
              <LucidePodcast className="w-5 h-5  " />
            </div>
            <h1 className="text-lg font-bold">Talkify</h1>
          </Link>
        </div>
        <button className="navbar-toggler" onClick={toogleNavbar} aria-label={navItems ? "Close menu" : "Open menu"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" transform="matrix(-1, 0, 0, -1, 0, 0)">
            {navItems ? (
              <>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_02"> <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g>
              </>
            ) : (
              <>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
              </>
            )}
          </svg>
        </button>
      </div>
      <div className={`nav-items ${navItems ? "close" : "open"} ${isScrolled ? 'top-[84px] lg:top-0' : 'top-[110px]  lg:top-0'} cursor-pointer `} >
        <Link to="/" className="nav-links">
          <div className='childLink relative '>
            <div className='flex gap-1 bottom-1'>
              <h1 className=' '>
                Home
              </h1>

            </div>
          </div>
        </Link>

        <Link to="/about-us" className="nav-links">
          <div className="childLink  realtive">
            <h1 className=''>
              About Us
            </h1>
          </div>
        </Link>

        <div className="flex justify-end gap-2">

          <Link
            to={"/login"}
            className={`btn btn-sm gap-2 transition-colors ${authUser ? "hidden" : ""}`}
          >

            <Plane className="size-4" />
            <span className="hidden sm:inline">Get Started</span>
          </Link>

          {authUser && (
            <>
              <Link to={"/profile"} className="btn btn-sm gap-2">
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button className="flex gap-2 items-center" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>



      </div>

      <div className={`w-[85%] absolute border-b  ${isScrolled ? 'bottom-0' : 'bottom-1'}`}>
      </div>
    </nav>
  );
}
export default Navbar;