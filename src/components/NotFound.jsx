import { Button, Stack } from "@mui/material";
import React from "react";
import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Stack height='100vh'
    alignItems='center'
    justifyContent='center'>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
       <Button href="/" variant="contained" autoFocus aria-multiline color="info" style={{background:'#000' , border:'1px solid'}}>Go back to Home</Button>
    </Stack>
  );
};

export default NotFound;
