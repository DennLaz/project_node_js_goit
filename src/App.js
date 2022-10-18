import UserRoutes from "./UserRoutes";
import Button from './shared/components/Button'

import "./index.scss";

function App() {
  return (
    <>
      <UserRoutes />
      <Button type="submit" active="true" text="Sign in" />
      <Button text="Sign up"/>
    </>
  );
}

export default App;
