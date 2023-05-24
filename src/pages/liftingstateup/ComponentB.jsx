import React from "react"

function ComponentB({ count, onClick }) {
  return (
    <div
      onClick={() => onClick()}
      style={{
        width: "40%",
        display: "flex",
        backgroundColor: "#e2e2e2",
        cursor: "pointer",
        color: "#242424",
        justifyContent: "center",
        alignContent: " center",
        textAlign: "center",
      }}
    >
      <h3>Decrement (next {count - 1} )</h3>
    </div>
  )
}

export default ComponentB
