import React from "react"

function Team({ team }) {
  return (
    <div style={{ width: "20rem" }}>
      <img src={team.image_path} style={{ width: "5rem" }}></img>
      <h2>{team.name}</h2>
    </div>
  )
}

export default Team
