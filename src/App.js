import UserRoutes from "./UserRoutes";

import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

import "./index.scss";

function App() {
  return (
    <>
      <Header/>
      <UserRoutes />
      <Footer/>

    </>
    
  );
}

export default App;
