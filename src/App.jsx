import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Question from "./pages/Question";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Global } from "@emotion/react";
import RainbowLogo from './components/Logo'
import RetestButton from "./components/Button_retest";

const GlobalStyle = createGlobalStyle`
:root {
  --primary-main: rgba(166, 206, 57, 1);
}
  p {
    margin: 0;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <>메인 페이지입니다.</>,
  },
  {
    path: "/question/:id",
    element: <Question />,
  },
  {
    path: "/result",
    element: <><RainbowLogo/>, <RetestButton/></>
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
