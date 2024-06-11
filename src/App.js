import "./styles.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

export default function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "skyblue", height: "100vh", width: "100vw" }}
    >
      {/* <h1>Navbar</h1> */}
      <Router>
        <div
          className="link"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1.5rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            textDecoration: "none",
            marginTop: "1.5rem",
          }}
        >
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <br />
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            About
          </Link>
          <br />
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </Link>
        </div>
        <div
          className="main"
          style={{
            backgroundColor: "grey",
            border: "2px solid black",
            borderRadius: "2rem",
            marginTop: "2rem",
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
