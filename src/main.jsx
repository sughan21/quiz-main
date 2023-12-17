import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./page/loginForm.jsx";
import Home from "./page/homepage.jsx";
import Start from "./page/Start.jsx";
import SignUp from "./page/signup.jsx";
import { UserProvider } from "./Context.jsx";
import PostLogin from "./page/PostLogin.jsx";
import LeaderBoard from "./page/leaderboard.jsx";
import History from "./page/history.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/postlogin" element={<PostLogin />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/history" element={<History />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
      {/* </RouterProvider> */}
    </UserProvider>
  </React.StrictMode>
);
