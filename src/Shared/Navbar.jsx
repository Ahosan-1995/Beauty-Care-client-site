import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";



const Navbar = () => {
    const navLinks = <>

        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/Service'><li><a>Service</a></li></NavLink>
        <NavLink to='/allServices'><li><a>All Services</a></li></NavLink>
        <NavLink to='/login'><li><a>Log-In</a></li></NavLink>
        <NavLink to='/register'><li><a>Register</a></li></NavLink>
        
    </>

    const navLinks2 = <>
         <NavLink to='/addServices'><li><a>Add Service</a></li></NavLink>
         <NavLink to='/manageService'><li><a>Manage Service</a></li></NavLink>
         <NavLink to='/booked'><li><a>Booked Service</a></li></NavLink>
         <NavLink to='/todo'><li><a>Service-To-Do</a></li></NavLink>
    
    </>


    const [theme, setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light');


    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme]);

    const handleToggle = e =>{
        if(e.target.checked){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }



    const {user,logOut}=useContext(AuthContext);



    const handleSignOut= (e)=>{
        logOut()
        .then()
        .catch()
    }



  return (

    
      <div className="navbar bg-pink-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#cb8d5c] rounded-box w-52"
            >
              {
                navLinks
              }
              <li>
                <a>Dashboard</a>
                <ul className="p-2 ">
                  {navLinks2}
                </ul>
              </li>
              
            </ul>
          </div>
          <img className="w-20" src="https://i.ibb.co/S6n3fs7/Logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
            <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2 bg-[#cb8d5c]">
                {navLinks2}
                </ul>
              </details>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
        {
                            user ? 
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
                                <span className="text-xs">{user.displayName}</span>
                                </div>
                            </div>
                            :
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full bg-white">
                                   
                                </div>
                            </div>
                        }
                        
                        {
                            user ? 
                            <button onClick={() => {toast('Logged out successfully.'); handleSignOut();}}  className="btn">Sign Out</button>
                            :
                            <Link to='/login'><button className="btn">Login</button></Link>
                          
                        }
          <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller"/>
        </div>
      </div>
   
  );
};

export default Navbar;
