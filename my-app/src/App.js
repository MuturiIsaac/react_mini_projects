import React from "react";
import "./App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const App = () => {
 return (
   <div style={{ display: "flex", height: "100vh" }}>
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
               FF
             </span>
           </div>
           <div
             style={{
               fontSize: "18px",
               fontWeight: "bold",
               color: "#333",
               textAlign: "center",
             }}
           >
             Franco Fernando
           </div>
           <div
             style={{
               color: "#333",
               textAlign: "center",
             }}
           >
             Ph.D. Software Engineer
           </div>
         </MenuItem>
         <MenuItem
           style={{
             textAlign: "center",
             margin: "10px 0",
             color: "#333",
             fontWeight: "bold",
           }}
         >
           About
         </MenuItem>
         <MenuItem
           style={{
             textAlign: "center",
             margin: "10px 0",
             color: "#333",
             fontWeight: "bold",
           }}
         >
           Blog
         </MenuItem>
         <MenuItem
           style={{
             textAlign: "center",
             margin: "10px 0",
             color: "#333",
             fontWeight: "bold",
           }}
         >
           Posts
         </MenuItem>
         <MenuItem
           style={{
             textAlign: "center",
             margin: "10px 0",
             color: "#333",
             fontWeight: "bold",
           }}
         >
           Problems
         </MenuItem>
         <MenuItem
           style={{
             textAlign: "center",
             margin: "10px 0",
             color: "#333",
             fontWeight: "bold",
           }}
         >
           Newsletter
         </MenuItem>
         <MenuItem
           style={{
             textAlign: "center",
             margin: "10px 0",
             color: "#333",
             fontWeight: "bold",
           }}
         >
           Resume
         </MenuItem>
         <div
           style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
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
             style={{ color: "#e1306c", margin: "0 10px", cursor: "pointer" }}
           />
         </div>
       </Menu>
     </Sidebar>
     <div style={{ flex: 1, padding: "20px" }}>
       <h1>Welcome to Franco Fernando's Website</h1>
       <p>
         I'm a passionate software engineer with a love for algorithms, data
         structures, distributed systems, and software development. I share
         content related to these topics through my blog, posts, and problem
         solutions.
       </p>
       <p>
         I hold a Ph.D. in computer vision, image processing, and machine
         learning, and currently work as a Senior Software Engineer at Siemens
         Healthineers. I love working with different technologies, developing
         algorithms, and contributing to the design of complex software
         systems, driven by a motivation for continuous learning.
       </p>
       <p>
         I'm also actively involved in tech communities and newsletters,
         sharing my knowledge and experiences with fellow enthusiasts.
       </p>
     </div>
   </div>
 );
};

export default App;