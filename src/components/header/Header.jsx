import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./header.css";

import UserMenu from "../usermenu/UserMenu";
import { RiArrowDropDownLine } from "react-icons/ri";
import Avatar from "react-avatar";
import { useContext } from "react";
import { AuthContext } from "../../App";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userMenu, setUserMenu] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  // console.log(user);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav>
        <div>
          <div className="logo">
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="menu">
          <div
            className="menu-btn__burger"
            onClick={() => {
              handleMenuClick();
            }}
          >
            <AiOutlineMenu />
          </div>
          {menuOpen && (
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#f68402" : "",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/how"
                  style={({ isActive }) => ({
                    color: isActive ? "#f68402" : "",
                  })}
                >
                  How it works
                </NavLink>
              </li>
              <li className="btn">
                <NavLink
                  to="/signin"
                  style={({ isActive }) => ({
                    color: isActive ? "#f68402" : "",
                  })}
                >
                  {token ? "Sign Out" : "Sign In"}
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="submenu">
          <ul className="nav-links">
            <li>
              <NavLink
                to={token ? "/forum" : "/"}
                style={({ isActive }) => ({
                  color: isActive ? "#fe8402" : "",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="./">How it works</NavLink>
            </li>
            {token ? (
              <>
                <div
                  className="user"
                  onMouseEnter={() => setUserMenu(true)}
                  onMouseLeave={() => setUserMenu(false)}
                >
                  <div className="user-profile">
                    {user?.imageBlob && user.imageBlob[user?.userid] ? (
                      <img
                        src={
                          user?.imageBlob
                            ? `https://evangadi-forum-backend-wqf7.onrender.com/api/all/images/${
                                user.imageBlob[user?.userid]
                              }`
                            : ""
                        }
                        alt="User Profile"
                      />
                    ) : (
                      <Avatar name={user?.username} size="40" round={true} />
                    )}
                  </div>
                  <div className="user-name">
                    <h3>
                      {user?.username}
                      <RiArrowDropDownLine />
                    </h3>
                  </div>
                  {userMenu && <UserMenu />}
                </div>
              </>
            ) : (
              <li className="btn">
                <NavLink
                  to="/signin"
                  style={({ isActive }) => ({
                    color: isActive ? "#fe8402" : "",
                  })}
                  onClick={() => {
                    if (token) {
                      localStorage.removeItem("token");
                      setToken(null);
                    }
                  }}
                >
                  Sign In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
