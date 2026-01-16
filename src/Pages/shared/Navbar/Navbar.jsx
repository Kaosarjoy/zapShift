import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { NavLink } from 'react-router';
import { MdArrowOutward } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log('SignOut Successful'))
      .catch(error => console.log(error.message));
  };

  const links = (
    <>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/aboutUs">About Us</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl px-4 mb-4">

      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 gap-2 rounded-box z-10 mt-3 w-52 p-3 shadow">
            {links}
          </ul>
        </div>

        <Logo />
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">
          {links}
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end">

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary px-4"
          >
            LogOut
          </button>
        ) : (
          <>
            {/* Mobile → only Login */}
            <NavLink to="/login" className="lg:hidden">
              <button className="btn btn-primary px-4">
                Login
              </button>
            </NavLink>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <NavLink to="/login">
                <button className="btn btn-primary">
                  Login
                </button>
              </NavLink>
            </div>
          </>
        )}

        <NavLink to='/beRider' className='ml-4'>
          <button className='btn btn-primary text-black'>Be a Rider</button>
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
