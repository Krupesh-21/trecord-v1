import React from "react";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccommodationTable from "./Record Table/AccommodationTable";
import PlacesVisitedTable from "./Record Table/PlacesVisitedTable";
import TravelByTable from "./Record Table/TravelByTable";
import FoodAndBeveragesTable from "./Record Table/FoodAndBeveragesTable";
import ShoppingTable from "./Record Table/ShoppingTable";
import ParkingTable from "./Record Table/ParkingTable";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.warning.light,
    padding: theme.spacing(5),
  },
}));

function Record(props) {
  const classes = useStyles();
  const {
    accommodation,
    foodAndBeverages,
    from,
    parkingExpense,
    placesVisited,
    shopping,
    to,
    travelBy,
  } = props.location.state.record;
  console.log(accommodation);
  return (
    <>
      <Container className={classes.root}>
        <Paper
          style={{
            width: "700px",
            backgroundColor: "#1eae98",
            height: "50px",
            margin: "10px auto",
            paddingTop: "10px",
            paddingLeft: "50px",
            color: "#fff",
          }}
        >
          <h4>
            Journey : From {from} to {to}
          </h4>
        </Paper>
        <Paper
          style={{
            width: "400px",
            backgroundColor: "#393e46",
            height: "50px",
            margin: "10px auto",
            paddingTop: "10px",
            paddingLeft: "150px",
            color: "#fff",
          }}
        >
          <h4>Travel By</h4>
        </Paper>
        <TravelByTable travelBy={travelBy} />
        <Paper
          style={{
            width: "400px",
            backgroundColor: "#393e46",
            height: "50px",
            margin: "10px auto",
            paddingTop: "10px",
            paddingLeft: "125px",
            color: "#fff",
          }}
        >
          <h4>Places Visited</h4>
        </Paper>
        <PlacesVisitedTable placesVisited={placesVisited} />
        <Paper
          style={{
            width: "400px",
            backgroundColor: "#393e46",
            height: "50px",
            margin: "10px auto",
            paddingTop: "10px",
            paddingLeft: "60px",
            color: "#fff",
          }}
        >
          <h4>Accommodation Expense</h4>
        </Paper>
        <AccommodationTable accommodation={accommodation} />
        <Paper
          style={{
            width: "400px",
            backgroundColor: "#393e46",
            height: "50px",
            margin: "10px auto",
            paddingTop: "10px",
            paddingLeft: "60px",
            color: "#fff",
          }}
        >
          <h4>Food & Beverages Expense</h4>
        </Paper>
        <FoodAndBeveragesTable foodAndBeverages={foodAndBeverages} />
        <Paper
          style={{
            width: "400px",
            backgroundColor: "#393e46",
            height: "50px",
            margin: "10px auto",
            paddingTop: "10px",
            paddingLeft: "100px",
            color: "#fff",
          }}
        >
          <h4>Shopping Expense</h4>
        </Paper>
        <ShoppingTable shopping={shopping} />
        <Paper
          style={{
            width: "400px",
            backgroundColor: "#393e46",
            height: "50px",
            margin: "10px auto",
            paddingTop: "10px",
            paddingLeft: "100px",
            color: "#fff",
          }}
        >
          <h4>Parking Expense</h4>
        </Paper>
        <ParkingTable parkingExpense={parkingExpense} />
      </Container>
    </>
  );
}

export default Record;
