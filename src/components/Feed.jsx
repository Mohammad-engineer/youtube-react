import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Helmet } from "react-helmet";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        alert("please connect you`re vpn to show content");
      }
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <>
      <Helmet>
        <title>YouTube</title>
      </Helmet>
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            m.mohammadi <br />
            copy right 2023
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategory}
            <span style={{ color: "#f31503", marginLeft: "10px" }}>videos</span>
          </Typography>
          
          <Videos videos={videos} />

        </Box>
      </Stack>
    </>
  );
};

export default Feed;
