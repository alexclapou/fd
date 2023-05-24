import React, { useState, useRef } from "react"

function ConditionalRendering() {
  const [half, setHalf] = useState(null)
  const divRef = useRef(null)

  const handleMouseMove = (event) => {
    const div = divRef.current
    if (!div) return

    const { left, width } = div.getBoundingClientRect()
    const mouseX = event.clientX

    const isLeft = mouseX < left + width / 2
    if (isLeft) {
      setHalf(true)
    } else {
      setHalf(false)
    }
  }

  return (
    <div style={{ width: "70%", height: "100%" }}>
      <h1>Conditional rendering</h1>
      <div
        onMouseMove={handleMouseMove}
        ref={divRef}
        style={{
          backgroundColor: "#E2E2E2",
          height: "20rem",
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "49.95%",
            padding: "0%",
            margin: "0",
            color: "white",
          }}
        >
          {half == true ? <h2> Hello</h2> : <></>}
        </div>
        <div
          style={{
            backgroundColor: "#242424",
            height: "100%",
            width: ".1%",
          }}
        ></div>
        <div
          style={{
            width: "49.95%",
            padding: "0%",
            margin: "0",
            color: "#242424",
          }}
        >
          {half == false ? <h2> Hello</h2> : <></>}
        </div>
      </div>
    </div>
  )
}

export default ConditionalRendering
