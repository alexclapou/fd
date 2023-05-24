import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import JSX from "./pages/jsx"
import ComponentsAndProps from "./pages/componentsandprops"
import ConditionalRendering from "./pages/conditionalrendering"
import RenderingLists from "./pages/renderinglists"
import Navigation from "./Navigation"
import Root from "./Root"
import LiftingStateUp from "./pages/liftingstateup"
import Hooks from "./pages/hooks"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/JSX",
    element: <JSX />,
  },
  {
    path: "/components-and-props",
    element: <ComponentsAndProps />,
  },
  {
    path: "/conditional-rendering",
    element: <ConditionalRendering />,
  },
  {
    path: "/rendering-lists",
    element: <RenderingLists />,
  },
  {
    path: "/lifting-state-up",
    element: <LiftingStateUp />,
  },
  {
    path: "/hooks",
    element: <Hooks />,
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <div
    style={{
      display: "flex",
      margin: "0",
      padding: "0",
      width: "100%",
      height: "30rem",
    }}
  >
    <Navigation />
    <div style={{ width: "1%" }}></div>
    <RouterProvider router={router} />
  </div>
)
