import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/crowd.png';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const links = (
    <>
      <NavLink to='/home' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>Home</NavLink>
      <NavLink to='/allcampaign' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>All Campaign</NavLink>
      <NavLink to='/addCampaign' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>Add New Campaign</NavLink>
      <NavLink to='/myCampaign' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>My Campaign</NavLink>
      <NavLink to='/donation' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>My Donations</NavLink>
    </>
  );

  const handleLogOut = async () => {
    await logOut();
    navigate('/home'); 
  };

  return (
    <div className='bg-[#1B3D2F] text-[#ECF0F1] py-1 sticky top-0 z-50 backdrop-blur opacity-90'>
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1B3D2F] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <img src={logo} alt="CrowdCube Logo" className='w-5 md:w-10' />
          <a className=" md:text-xl">CrowdCube</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {!user ? (
            <>
              <Link to='/login' className="btn text-xs md:text-base" id='login'>Login</Link>
              <Link to='/register' className="btn text-xs md:text-base" id='register'>Register</Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="relative">
              <img
  src={user?.photoURL || '/default-avatar.png'}  
  alt="User"
  className="w-8 md:w-12 rounded-full border-2 border-[#E74C3C] object-cover"
  title={user?.displayName || "User"} />

              </div>
              <button onClick={handleLogOut} className="btn text-xs md:text-base">Log out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
