import { useSelector } from "react-redux";

import { isLogin } from "../../redux/auth/authSelectors";

const useAuth = () => {
  return useSelector(isLogin);
};

export default useAuth;
