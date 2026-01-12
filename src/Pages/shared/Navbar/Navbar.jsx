import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { NavLink } from 'react-router';
import { MdArrowOutward } from 'react-icons/md';

const Navbar = () => {

  const links = (
    <>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/aboutUs">About Us</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl mb-4">
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
            className="menu menu-sm dropdown-content bg-base-100 gap-2 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <div className="navbar-end flex items-center gap-2">
  <button className="btn btn-outline rounded-2xl">
    Sign In
  </button>

  <button className="btn bg-primary text-black rounded-2xl">
    Sign Up
  </button>

  <button className="btn bg-black text-white rounded-full w-10 h-10 p-0 flex items-center justify-center">
    <MdArrowOutward className="text-lg" />
  </button>
</div>

      </div>
    </div>
  );
};

export default Navbar;
