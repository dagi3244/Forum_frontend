import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import "./usermenu.css";
import { useContext } from "react";
import { AuthContext } from "../../App";

function UserMenu({ refresh }) {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  return (
    <>
      <IoMdArrowDropup className="user-menu-arrow" />
      <div className="user-menu">
        <ul>
          <li>
            <Link
              to={`${token} ? "./" :"/signin"`}
              onClick={() => {
                if (token) {
                  localStorage.removeItem("token");
                }
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserMenu;
