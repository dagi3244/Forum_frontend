import { Link, useLocation } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
function SignIn() {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/forum";
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("token", data.token);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="sign-form">
        <m.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, x: -100 }}
        >
          {location.state?.message && (
            <h3 className="login-error">{location.state.message}</h3>
          )}
          <div>
            <h2>Login to your account</h2>{" "}
            {error?.message && <h3 className="login-error">{error.message}</h3>}
            <p>
              <span>Don’t have an account?</span>
              <Link to="/signup"> Create a new account</Link>
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={loginFormData.email}
                onChange={handleChange}
                required
              />
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Password"
                value={loginFormData.password}
                onChange={handleChange}
                required
              />
              {!click ? (
                <FaRegEyeSlash
                  className="eye"
                  style={{
                    position: "absolute",
                    top: "36%",
                    right: "2%",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    opacity: "0.5",
                  }}
                  onClick={() => {
                    setClick(!click);
                    setShow(true);
                  }}
                />
              ) : (
                <MdOutlineRemoveRedEye
                  className="eye"
                  style={{
                    position: "absolute",
                    top: "36%",
                    right: "2%",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    color: "#fe8402",
                  }}
                  onClick={() => {
                    setClick(!click);
                    setShow(false);
                  }}
                />
              )}
              <div className="forgot">
                <a href="#">Forgot Password</a>
              </div>
              <button>Login</button>
            </form>
          </div>
        </m.div>
      </div>
    </>
  );
}

export default SignIn;
