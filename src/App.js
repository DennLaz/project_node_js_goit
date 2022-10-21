import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getUser } from "./redux/auth/authOperations";

import Header from "./modules/Header";
import Footer from "./modules/Footer";
import UserRoutes from "./UserRoutes";

import "./index.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Header/>
      
      <UserRoutes />
      
      <Footer />
    </>
  );
}

export default App;
