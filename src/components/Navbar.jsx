import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
//import YouTubeLogo from '../assets/youtube-logo.png';
//import YouTubeLogo from '../assets/clipart-youtube-logo-removebg-preview.png';
import YouTubeLogo from "../assets/youtube.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        position: "sticky",
        background: "#000",
        top: 0,
        alignItems: "center",
        flexDirection:{sx:"column",sm:"row"},
        gap:'5px',
        justifyContent: "space-between",
        padding:"10px"
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={YouTubeLogo}
          alt="logo"
          height={40}
          style={{
            padding: "3px 13px",
            background: "#fff",
            borderRadius: "8px",
          }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
