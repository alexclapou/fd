import React from "react"
import Component from "./component"

function ComponentsAndProps() {
  return (
    <div style={{ width: "70%", height: "100%" }}>
      <h1>Components and Props</h1>
      <Component prop1="Component1" prop2="red" />
      <Component prop1="Component2" prop2="green" />
      <Component prop1="Component3" prop2="yellow" />
      <Component prop1="Component4" prop2="" />
      <Component prop1="" prop2="" />
    </div>
  )
}

export default ComponentsAndProps
