import "./App.css";
import Question from "./pages/Question";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Result from "./pages/Result";
import Main from "./pages/Main";

const GlobalStyle = createGlobalStyle`
:root {
  /* green */
  --green-90: rgba(127, 190, 38, 1);
  --green-80: rgba(127, 190, 38, .8);
  --green-50: rgba(127, 190, 38, .5);
  --green-30: rgba(127, 190, 38, .3);
  --green-10: rgba(127, 190, 38, .1);

  /* dark brown */
  --dark-brown-90: rgba(93, 42, 12, 1);
  --dark-brown-80: rgba(93, 42, 12, .8);
  --dark-brown-50: rgba(93, 42, 12, .5);
  --dark-brown-30: rgba(93, 42, 12, .3);
  --dark-brown-10: rgba(93, 42, 12, .1);
  
  /* brown */
  --brown-90: rgba(108, 90, 68, .9);
  --brown-80: rgba(108, 90, 68, .8);
  --brown-50: rgba(108, 90, 68, .5);
  --brown-30: rgba(108, 90, 68, .3);
  --brown-10: rgba(108, 90, 68, .1);


  /* beige */
  --beige-90: rgba(232, 227, 219, 1);
  --beige-80: rgba(232, 227, 219, .8);
  --beige-50: rgba(232, 227, 219, .5);
  --beige-30: rgba(232, 227, 219, .3);
  --beige-10: rgba(232, 227, 219, .1);

  /* light blue */
  --light-blue-90: rgba(124, 159, 212, 1);
  --light-blue-80: rgba(124, 159, 212, .8);
  --light-blue-50: rgba(124, 159, 212, .5);
  --light-blue-30: rgba(124, 159, 212, .3);
  --light-blue-10: rgba(124, 159, 212, .1);


  /* light green */
  --light-green-90: rgba(172, 206, 4, 1);
  --light-green-80: rgba(172, 206, 4, .8);
  --light-green-50: rgba(172, 206, 4, .5);
  --light-green-30: rgba(172, 206, 4, .3);
  --light-green-10: rgba(172, 206, 4, .1);
  
  /* medium gray */
  --medium-gray-90: rgba(167, 168, 165, 1);
  --medium-gray-80: rgba(167, 168, 165, .8);
  --medium-gray-50: rgba(167, 168, 165, .5);
  --medium-gray-30: rgba(167, 168, 165, .3);
  --medium-gray-10: rgba(167, 168, 165, .1);
}

body {
  margin: 0;
  background-color: var(--beige-90);
}

button {
  all: unset;
}
p {
    margin: 0;
  }

h1, h2 {
    margin: 0;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/question/:questionId",
    element: <Question />,
  },
  {
    path: "/result/:resultId",
    element: <Result />,
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
