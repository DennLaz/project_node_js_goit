import { useSelector } from "react-redux";
import Auth from "../../modules/Auth";
import {getErrorLoadingAuth} from "../../redux/auth/authSelectors"
import { errorChecker } from "../../shared/utils/errorChecker";


const AuthPage = () => {
  
  const {error} = useSelector(getErrorLoadingAuth);
  
  return<>
 <Auth/>
  {error && errorChecker(error)} 
  </> 
};

export default AuthPage;
