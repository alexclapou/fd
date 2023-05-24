import React from "react"

function ComponentA({ count, onClick }) {
  return (
    <div
      onClick={() => onClick()}
      style={{
        width: "40%",
        display: "flex",
        backgroundColor: "#e2e2e2",
        color: "#242424",
        justifyContent: "center",
        cursor: "pointer",
        alignContent: " center",
        textAlign: "center",
      }}
    >
      <h3>Increment (next {count + 1} )</h3>
    </div>
  )
}

export default ComponentA
