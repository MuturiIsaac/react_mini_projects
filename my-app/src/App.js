import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import About from './About';
import Projects from './Projects';
import Posts from './Posts';
import Newsletter from './Newsletter';
import Home from './Home';



const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center" }}>
      <Sidebar
        className="app"
        style={{
          width: "250px",
          backgroundColor: "#f0f0f0",
          borderRight: "1px solid #ccc",
        }}
      >
        <Menu iconShape="circle">
          <MenuItem
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0",
              height: "120px", // Added to set a fixed height
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "2px solid #007bff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
              }}
            >
              <span
                style={{
                  fontFamily: "Graffiti",
                  fontSize: "24px",
                  color: "#007bff",
                }}
              >
                MI
              </span>
            </div>
            
          </MenuItem>
          <div style={{ textAlign: "center", margin: "10px 0", color: "#333", fontWeight: "bold" }}>
            John Doe
          </div>
          <div style={{ textAlign: "center", margin: "10px 0", color: "#333", fontWeight: "bold" }}>
            Software Engineer
          </div>
          <MenuItem
            style={{
              textAlign: "center",
              margin: "10px 0",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem
            style={{
              textAlign: "center",
              margin: "10px 0",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            <Link to="/projects">Projects</Link>
          </MenuItem>
          <MenuItem
            style={{
              textAlign: "center",
              margin: "10px 0",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            <Link to="/posts">Post</Link>
          </MenuItem>
          <MenuItem
            style={{
              textAlign: "center",
              margin: "10px 0",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            <Link to="/newsletter">Newsletter</Link>
          </MenuItem>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0",
            }}
          >
            <TwitterIcon
              style={{ color: "#1da1f2", margin: "0 10px", cursor: "pointer" }}
            />
            <FacebookIcon
              style={{ color: "#3b5998", margin: "0 10px", cursor: "pointer" }}
            />
            <LinkedInIcon
              style={{ color: "#0077b5", margin: "0 10px", cursor: "pointer" }}
            />
            <InstagramIcon
              style={{
                color: "#e1306c",
                margin: "0 10px",
                cursor: "pointer",
              }}
            />
          </div>
        </Menu>
      </Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  );
};

export default App;