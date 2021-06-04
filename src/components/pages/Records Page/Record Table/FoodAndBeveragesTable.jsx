import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";


function FoodAndBeveragesTable(props) {
  const { foodAndBeverages } = props;

  return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}} align="left">Type of Eating Place</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Name of Place</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">City</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Food Cost</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foodAndBeverages.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.typeOfEatingPlace}</TableCell>
                <TableCell align="left">{item.nameOfEatingPlace}</TableCell>
                <TableCell align="left">{item.foodEatingPlaceCityName}</TableCell>
                <TableCell align="left">{item.foodCost}</TableCell>
                <TableCell align="left">{item.foodRating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default FoodAndBeveragesTable;