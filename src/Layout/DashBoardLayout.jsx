import React from "react";
import { FaBox, FaCreditCard } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";

const DashBoardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen max-w-7xl mx-auto bg-accent">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content flex flex-col bg-white">
        {/* Navbar */}
        <nav className="navbar bg-white border-b px-4">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </nav>

        {/* PAGE */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="w-64 min-h-full bg-white border-r">
          <ul className="menu p-4 gap-1">

            {/* Home */}
            <li>
              <Link to="/" className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10"
                  />
                </svg>
                <span>Home</span>
              </Link>
            </li>

            {/* My Parcels */}
            <li>
              <NavLink
                to="/dashboard/my-parcels"
                className="flex items-center gap-3"
              >
                <FaBox className="text-lg" />
                <span>My Parcels</span>
              </NavLink>
            </li>


          {/* Payment History */}
            <li>
              <NavLink
                to="/dashboard/payment-history"
                className="flex items-center gap-3"
              >
                <FaCreditCard className="text-lg"  /> 
                <span>PaymentHistory</span>
              </NavLink>
            </li>

            {/* Settings */}
            <li>
              <button className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01A1.65 1.65 0 009 4.6V4a2 2 0 014 0v.09c0 .7.4 1.34 1.03 1.63.63.29 1.35.2 1.9-.23l.06-.06a2 2 0 012.83 2.83l-.06.06c-.43.55-.52 1.27-.23 1.9.29.63.93 1.03 1.63 1.03H21a2 2 0 010 4h-.09c-.7 0-1.34.4-1.63 1.03z"
                  />
                </svg>
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashBoardLayout;
