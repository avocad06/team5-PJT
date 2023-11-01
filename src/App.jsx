import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Question from './pages/Question'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RainbowLogo from './components/Logo'

const router = createBrowserRouter([
  {
    path: "/question/:id",
    element:     <Question/>,
  },
  {
    path: "/result",
    element: <RainbowLogo/>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
