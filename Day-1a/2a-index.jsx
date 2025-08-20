import React from "react";
import ReactDOM from "react-dom/client";

// Header
const HeaderComponent = () => (
  <header
    style={{
      backgroundColor: "#282c34",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    }}
  >
    <h1 style={{ margin: 0, fontSize: "24px" }}>🌐 My Website</h1>
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

// Footer
const FooterComponent = () => (
  <footer
    style={{
      backgroundColor: "#20232a",
      color: "white",
      textAlign: "center",
      padding: "15px",
      marginTop: "20px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        margin: 0,
        padding: 0,
      }}
    >
      <li>© 2025 My Website</li>
      <li>Privacy Policy</li>
      <li>Contact Us</li>
    </ul>
  </footer>
);

// Main Layout
const AppLayout = () => (
  <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <HeaderComponent />

    <main style={{ flex: 1, padding: "40px", textAlign: "center" }}>
      <h2>Welcome to React World 🌎</h2>
      <p style={{ fontSize: "18px", color: "#555", maxWidth: "600px", margin: "auto" }}>
        This is your first React app with a modern UI. You can add more components,
        images, or even buttons to make it interactive.
      </p>
      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          backgroundColor: "#61dafb",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Get Started 🚀
      </button>
    </main>

    <FooterComponent />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
