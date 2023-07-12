import React from "react";
import DrinkDetails from "./DrinkDetails";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Drinks = ({ drinks, drink, handleMouseEnter, handleMouseLeave }) => {
  let navigate = useNavigate();
  const [expanded, setExpanded] = React.useState([]);

  const handleExpandClick = (index) => {
    setExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const showDrinkDetails = (id) => {
    navigate(`${id}`);
  };

  return drink.length >= 1 ? (
    drinks ? (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {drinks.map((drink, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            className="card"
            //onClick={() => showDrinkDetails(drink.idDrink)}
            key={drink.idDrink}
          >
            <Card>
              <CardMedia
                component="img"
                height={"194"}
                image={drink.strDrinkThumb}
              />
              <CardContent>
                <Typography variant="body1" color={"black"}>
                  {drink.strDrink}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded[index]}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded[index]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse
                in={expanded[index]}
                timeout="auto"
                unmountOnExit
                //component={DrinkDetails}
              >
                <CardContent>
                  {/* <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography> */}
                  <DrinkDetails id={drink.idDrink}></DrinkDetails>
                </CardContent>
              </Collapse>
            </Card>
            {/* <img src={drink.strDrinkThumb} alt="" />
            <h3>{drink.strDrink}</h3> */}
          </Grid>
        ))}
      </Grid>
    ) : (
      <div>No matches found</div>
    )
  ) : (
    <div></div>
  );
};

export default Drinks;
