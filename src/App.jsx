import { useState } from "react";
import Home from "./page/homepage";
import { Outlet } from "react-router-dom";
import LoginForm from "./page/loginForm";
import { UserProvider } from "./Context";

const App = () => {
  // const [permission, setPermission] = useState(false);

  // const yes = () => {
  //   setPermission(true);
  // };

  // const no = () => {
  //   setPermission(false);
  // };

  return (
    <>
      {/* {permission ? <Logintop no={no} /> : <Home yes={yes} />} */}
      <UserProvider>
        <main>
          <LoginForm />
          <Outlet />
        </main>
      </UserProvider>
    </>
  );
};

export default App;
