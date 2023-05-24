import React from "react"

function index() {
  const jsx_example = <h3>This element is created using JSX</h3>
  return (
    <div style={{ width: "70%", height: "100%" }}>
      <h1>JSX</h1>
      {jsx_example}
    </div>
  )
}

export default index
