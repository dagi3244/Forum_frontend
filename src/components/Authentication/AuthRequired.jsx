import { Navigate, Outlet, useLocation } from "react-router-dom";

function AuthRequired() {
  const isLoggedIn = localStorage.getItem("token");
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/signin"
        state={{
          message: "Please log in first",
          from: location.pathname,
        }}
        replace
      />
    );
  }
  return <Outlet />;
}

export default AuthRequired;
