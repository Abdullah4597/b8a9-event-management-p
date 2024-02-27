import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaUserAlt } from "react-icons/fa";
import logoImage from "../../assets/images/logo2.png";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact"> Contact</NavLink>
      </li>
      <li>
        <NavLink to="/profile"> Profile</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-400  shadow-md text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-10" src={logoImage} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p>{user.displayName ? user.displayName : user.email}</p>
              {user.photoURL ? (
                <img className="w-11 rounded-full mx-3" src={user?.photoURL} alt="" />
              ) : (
                <FaUserAlt className="text-2xl  mx-3"></FaUserAlt>
              )}

              <button onClick={logOut} className="bg-slate-800 px-8 py-3">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink className="mx-5 px-4 py-3" to="/login">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
