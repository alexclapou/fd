import React from "react"
import { useState } from "react"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"

function LiftingStateUp() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div style={{ width: "70%", height: "100%" }}>
      <h1>Lifting state up</h1>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ComponentA count={count} onClick={incrementCount} />
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            height: "3rem",
            backgroundImage:
              "radial-gradient( circle 759px at 14% 22.3%,  rgba(10,64,88,1) 0%, rgba(15,164,102,1) 90% )",
          }}
        >
          <h2>{count}</h2>
        </div>
        <ComponentB count={count} onClick={decrementCount} />
      </div>
    </div>
  )
}

export default LiftingStateUp
