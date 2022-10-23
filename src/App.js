import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/auth/authOperations";

// import { useMediaPredicate } from "react-media-hook";

import Header from "./modules/Header";
import Footer from "./modules/Footer";
import UserRoutes from "./UserRoutes";
import Loader from "./shared/components/Loader"



import { getErrorLoadingAuth} from "./redux/auth/authSelectors";

import 'react-notifications/lib/notifications.css';
import "./index.scss";

const  App=() =>{
  
  // const isMobile = useMediaPredicate("(max-width: 767px)");

  const dispatch = useDispatch();

  const {loading} = useSelector(getErrorLoadingAuth);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Header />
<main>

      <UserRoutes />
</main>
      
      <Footer />
      
      {loading && <Loader />}
      
    </>
  );
}

export default App;
