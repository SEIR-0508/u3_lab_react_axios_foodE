import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        color="secondaryText"
        sx={{ color: "text.primary" }}
        align="center"
      >
        Cocktail Recipes
      </Typography>
    </Container>
  );
};

export default Home;
