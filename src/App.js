import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getUser } from "./redux/auth/authOperations";

import UserRoutes from "./UserRoutes";
import Materials from "./modules/Materials/Materials"

import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

import "./index.scss";
// import Results from "./pages/Results";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <UserRoutes />
      <Materials />
      <Footer />
    </>
  );
}

export default App;
