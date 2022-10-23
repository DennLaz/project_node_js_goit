import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getUser } from "./redux/auth/authOperations";

import { useMediaPredicate } from "react-media-hook";

import Header from "./modules/Header";
import Footer from "./modules/Footer";
import UserRoutes from "./UserRoutes";

import "./index.scss";

function App({ onClick }) {
  
  const isMobile = useMediaPredicate("(max-width: 767px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <UserRoutes />
      
      <Footer />
    </>
  );
}

export default App;
