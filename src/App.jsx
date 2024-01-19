import { Route, Routes, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Section from "./components/section/Section";
import SignIn from "./pages/signUI/SignIn";
import SignUp from "./pages/signUI/SignUp";
import Forum from "./pages/forum/Forum";
import AskQ from "./pages/askQ/AskQ";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Comment from "./components/comment/Comment";
import AuthRequired from "./components/Authentication/AuthRequired";
axios.defaults.baseURL = "https://evangadi-forum-backend-wqf7.onrender.com";
export const AuthContext = createContext();
function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get("/api/users/checkuser", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
        if (window.location.pathname !== "/forum") {
          window.location.replace("/forum");
        }
      } catch (err) {
        console.log(err);
        navigate("/signin", {
          state: {
            message: "Please log in first",
            from: location.pathname,
          },
        });
      }
    };

    getUser();
  }, [token]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AnimatePresence mode="wait">
        <Routes key={location.key} location={location}>
          <Route path="/" element={<Home />}>
            <Route element={<Section />}>
              <Route path="/" element={<SignIn />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route element={<AuthRequired />}>
              <Route path="forum" element={<Forum />}>
                <Route index element={<Comment />} />
              </Route>

              <Route path="forum/askq" element={<AskQ />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </AuthContext.Provider>
  );
}

export default App;
