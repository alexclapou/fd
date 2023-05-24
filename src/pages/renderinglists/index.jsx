import React from "react"

function RenderingLists() {
  const users = [
    { name: "Kendrick Lamar", id: 1 },
    { name: "Aegon Targaryen", id: 2 },
    { name: "Kylian Mbappe", id: 3 },
    { name: "Dexter Morgan", id: 4 },
  ]

  const listUsers = users.map((user) => (
    <h2 style={{ marginLeft: "8%", color: "#242424" }} key={user.id}>
      <div>
        {user.id}
        <br />
        <span>{user.name}</span>
      </div>
    </h2>
  ))

  return (
    <div style={{ width: "70%", height: "100%" }}>
      <h1>Rendering lists</h1>
      <div style={{ display: "flex", backgroundColor: "#E2E2E2" }}>
        {listUsers}
      </div>
    </div>
  )
}

export default RenderingLists
