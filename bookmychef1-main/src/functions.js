import { useNavigate } from "react-router-dom";
export const useCustomNavigation = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("dett");
    navigate("/login");
  };
  const navlog = () => {
    navigate("/login");
  };
  const navreg = () => {
    navigate("/register");
  };
  const navabout = () => {
    navigate("/about");
  };
  return {
    logout,
    navlog,
    navreg,
    navabout,
  };
};