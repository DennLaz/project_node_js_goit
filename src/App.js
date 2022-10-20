import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getUser } from "./redux/auth/authOperations";

import UserRoutes from "./UserRoutes";

// import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

import "./index.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {/* <Header/> */}
      <UserRoutes />
      <Footer />
    </>
  );
}

export default App;
