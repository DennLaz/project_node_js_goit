import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/auth/authOperations";

import Header from "./modules/Header";
import Footer from "./modules/Footer";
import UserRoutes from "./UserRoutes";
import Loader from "./shared/components/Loader"


import { getErrorLoadingAuth} from "./redux/auth/authSelectors";


import "./index.scss";

function App() {
  const dispatch = useDispatch();

  const {loading} = useSelector(getErrorLoadingAuth);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Header/>
      
      <UserRoutes />
      
      <Footer />
      
      {loading && <Loader />}
    </>
  );
}

export default App;
