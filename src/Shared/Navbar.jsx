import { NavLink } from "react-router-dom";



const Navbar = () => {
    const navLinks = <>

        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/Service'><li><a>Service</a></li></NavLink>
        <NavLink to='/login'><li><a>Log-In</a></li></NavLink>
        <NavLink to='/register'><li><a>Register</a></li></NavLink>
    </>

    const navLinks2 = <>
         <NavLink to='/add'><li><a>Add Service</a></li></NavLink>
         <NavLink to='/manage'><li><a>Manage Service</a></li></NavLink>
         <NavLink to='/booked'><li><a>Booked Service</a></li></NavLink>
         <NavLink to='/todo'><li><a>Service-To-Do</a></li></NavLink>
    
    </>



  return (

    
      <div className="navbar bg-gray-500 text-white">
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
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
          <a className="btn">Button</a>
        </div>
      </div>
   
  );
};

export default Navbar;
