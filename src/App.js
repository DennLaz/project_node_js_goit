import UserRoutes from "./UserRoutes";
import Footer from "./modules/Footer/Footer";
import Materials from "./modules/Materials/"
import "./index.scss";

function App() {
  return (
    <>
      <UserRoutes />
      <Materials />
      <Footer/>
    </>
    
  );
}

export default App;
