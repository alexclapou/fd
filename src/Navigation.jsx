function Navigation() {
  const path = window.location.pathname
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "JSX", href: "/jsx" },
    { id: 3, name: "Components and props", href: "/components-and-props" },
    { id: 4, name: "Conditional rendering", href: "/conditional-rendering" },
    { id: 5, name: "Rendering lists", href: "/rendering-lists" },
    { id: 6, name: "Lifting state up", href: "/lifting-state-up" },
    { id: 7, name: "Hooks", href: "/hooks" },
  ]

  const listLinks = links.map((link) => (
    <a
      href={link.href}
      key={link.id}
      style={{
        color: "#E2E2E2",
        padding: "1rem",
        backgroundColor: path == link.href ? "#242424" : "",
        width: "100%",
      }}
    >
      {link.name}
    </a>
  ))

  return (
    <div
      style={{
        width: "19%",
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {listLinks}
      </div>
    </div>
  )
}

export default Navigation
