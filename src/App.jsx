import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import JSX from "./pages/jsx"
import ComponentsAndProps from "./pages/componentsandprops"
import ConditionalRendering from "./pages/conditionalrendering"
import RenderingLists from "./pages/renderinglists"

function App() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "20%", border: "1px solid #e2e2e2" }}>dasdsa</div>
      <div style={{ width: "10%" }}></div>
      <div style={{ width: "65%" }}>
        <ConditionalRendering />
      </div>
    </div>
  )
}

export default App
