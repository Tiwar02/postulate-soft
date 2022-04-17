import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../UserContext";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
}

const RequireAuth = () => {
  const isAuth = useAuth();
  const location = useLocation();

  return (
    isAuth
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;