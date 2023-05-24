import React, { useState, useEffect } from "react"
import teams from "./teams"
import Match from "./match"
import stadiums from "./stadiums"

function Hooks() {
  const [homeTeam, setHomeTeam] = useState(null)
  const [awayTeam, setAwayTeam] = useState(null)
  const [stadium, setStadium] = useState(null)

  useEffect(() => {
    function generateMatch() {
      let selectedIndex1 = Math.floor(Math.random() * teams.length)
      setHomeTeam(teams[selectedIndex1])
      teams.splice(selectedIndex1, 1) // remove the selected element from the array
      let selectedIndex2 = Math.floor(Math.random() * teams.length)
      setAwayTeam(teams[selectedIndex2])
      let selectedIndex3 = Math.floor(Math.random() * stadiums.length)
      setStadium(stadiums[selectedIndex3])
    }
    generateMatch()
  }, [])

  return (
    <div style={{ width: "70%", height: "100%" }}>
      <h1>Hooks</h1>
      <div style={{ display: "flex" }}>
        <Match homeTeam={homeTeam} awayTeam={awayTeam} stadium={stadium} />
      </div>
    </div>
  )
}

export default Hooks
