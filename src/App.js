import UserRoutes from "./UserRoutes";

import Button from "./shared/components/Button/Button";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import Materials from "./modules/Materials/"

import "./index.scss";

function App() {
  return (
    <>
      <Header/>
      <UserRoutes />
      <Materials />
      <Footer/>

    </>
    
  );
}

export default App;
