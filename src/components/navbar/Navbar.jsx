import { FiMenu } from "react-icons/fi";
import { useContext, useState } from "react";
// import arrowUp from "../../assets/icons/arrow_up.png";
import logo from "../../assets/flag.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const MenuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/check">Visa Check</Link>
      </li>
      <li>
        {user ? (
          <Link onClick={() => logOut()}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      {user && (
        <img
          src={user?.photoURL}
          alt="user photo"
          className="w-12 h-12 rounded-full"
        />
      )}

      {/* <button
        className="item-border px-2 md:px-4 py-1 rounded-lg
           gradient-text gradient-border flex gap-2 items-center lg:text-lg"
      >
        Hire Us <img src={arrowUp} alt="" />
      </button> */}
    </>
  );

  return (
    <>
      <div className="md:hidden w-[100vw]">
        <div className="navbar py-2 flex justify-between items-center w-11/12 mx-auto">
          <Link
            to="/"
            className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-4 md:hidden"
          >
            <img
              src={logo}
              alt="brand logo"
              className="w-12 lg:w-20 2xl:w-32"
            />
            <p className="logo-text lg:text-2xl pt-2">Italy Visa</p>
          </Link>
          <div className="dropdown z-50">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              {showMenu && (
                <FiMenu
                  onClick={() => setShowMenu(false)}
                  className="h-6 w-6 text-white"
                />
              )}
              {showMenu || (
                <FiMenu
                  onClick={() => setShowMenu(true)}
                  className="h-6 w-6 text-white"
                />
              )}
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content flex items-center gap-2 rounded-box bg-white text-black rounded-lg ${
                showMenu ? "absolute flex flex-col right-1 p-8" : "hidden"
              }`}
            >
              {MenuItem}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden md:block w-[98vw]">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <Link
            to="/"
            className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-1"
          >
            <img
              src={logo}
              alt="brand logo"
              className="w-12 lg:w-20 2xl:w-32"
            />
            <p className="logo-text lg:text-2xl pt-2">Italy Visa</p>
          </Link>
          <ul className="menu menu-horizontal px-1 flex justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
            {MenuItem}
          </ul>
          {/* <button
            className="item-border px-2 md:px-4 py-1 rounded-lg
           gradient-text gradient-border flex gap-2 items-center lg:text-lg"
          >
            Hire Us <img src={arrowUp} alt="" />
          </button> */}
        </div>
      </div>
    </>
  );
};
export default Navbar;
