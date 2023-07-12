import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
        {drinks.map((drink) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            className="card"
            onClick={() => showDrinkDetails(drink.idDrink)}
            key={drink.idDrink}
            onMouseEnter={() => handleMouseEnter(drink.idDrink)}
            onMouseLeave={handleMouseLeave}
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
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
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
