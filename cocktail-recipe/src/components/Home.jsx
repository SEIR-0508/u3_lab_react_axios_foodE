import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageSlider from "./ImageSlider";
import { Typography } from "@mui/material";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListSubheader,
  Grow,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Home = () => {
  const [drinkArray, setDrinkArray] = useState([]);
  const [loaded, setLoaded] = useState([]);
  useEffect(() => {
    //get random drink from api
    const getRandDrink = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );

      const newDrink = response.data.drinks[0];
      //takes previous state version and add the newDrink to it
      setDrinkArray((prevDrinkArray) => [...prevDrinkArray, newDrink]);
    };
    //periodic function to fetch new random cocktails
    const periodicDrinks = async () => {
      for (let i = 0; i < 4; i++) {
        await getRandDrink();
        setLoaded((prevLoaded) => [...prevLoaded, false]);
      }
    };
    //inital call on first render
    periodicDrinks();

    //react function to set interval for useEffect()
    const interval = setInterval(() => {
      setLoaded([]);
      setDrinkArray([]);
      periodicDrinks();
    }, 8000);

    //When component is unmounted, clear the interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  //when image is loaded, then set index to true so the image 'grows' using <Grow> UI
  const handleImageLoaded = (index) => {
    let newLoaded = [...loaded];
    newLoaded[index] = true;
    setLoaded(newLoaded);
  };
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
      {/* {drinkArray.length > 0 ? (
        <ImageSlider slides={drinkArray}></ImageSlider>
      ) : null} */}
      <Container align="center">
        <ImageList>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Drinks</ListSubheader>
          </ImageListItem>
          {drinkArray.map((drink, index) => (
            <Grow in={loaded[index]}>
              <ImageListItem key={drink.idDrink}>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  loading="lazy"
                  onLoad={() => handleImageLoaded(index)}
                />
                <ImageListItemBar title={drink.strDrink} />
              </ImageListItem>
            </Grow>
          ))}
        </ImageList>
      </Container>
    </Container>
  );
};

export default Home;
