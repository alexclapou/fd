import React from "react"
import Team from "./team"

function Match({ homeTeam, awayTeam, stadium }) {
  if (!homeTeam || !awayTeam || !stadium) return <></>
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: "2rem",
      }}
    >
      <Team team={homeTeam} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3 style={{ padding: "0", margin: "0" }}>{getRandomDate()}</h3>
        <span style={{ padding: "0", margin: "0" }}>{getRandomHour()}</span>
        <h2>{stadium.name}</h2>
      </div>
      <Team team={awayTeam} />
    </div>
  )
}

function getRandomDate() {
  const startDate = new Date("2023-01-01T20:00:00")
  const endDate = new Date("2023-12-31T22:30:00")
  const date = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  )

  const days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."]
  const day = days[date.getDay()]

  const month =
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  const dayOfMonth = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  const hour = [20, 21, 22][Math.floor(Math.random() * 3)]
  const minute = [0, 30][Math.floor(Math.random() * 2)]

  const formattedDate = `${day}, ${dayOfMonth}.${month}`

  return formattedDate
}

function getRandomHour() {
  const hour = [20, 21, 22][Math.floor(Math.random() * 3)]
  const minute = [0, 30][Math.floor(Math.random() * 2)]

  const formattedHour = `${hour}:${minute < 10 ? "0" + minute : minute}`
  return formattedHour
}

export default Match
