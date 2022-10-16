import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <section>
        <nav>
          <div className="navbar bg-base-300 px-5">
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
                  className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52"
                >
                  <Link to="/home">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </ul>
              </div>
              <Link className="btn btn-ghost normal-case text-xl">
                Auth Zone
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-4 font-bold text-2xl">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
            <div className="navbar-end">
              <div className="profile">
                {
                  user?.displayName && <span>Wellcome {user.displayName}</span>
                }
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
