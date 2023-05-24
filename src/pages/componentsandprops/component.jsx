import React from "react"

function Component(props) {
  return (
    <div>
      <h3 style={{ color: props.prop2 }}>{props.prop1}</h3>
    </div>
  )
}

export default Component
