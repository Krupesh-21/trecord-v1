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


function PlacesVisitedTable(props) {
  const { placesVisited } = props;

  return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}} align="left">Place Type</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Name of Place</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Name of City</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Entry Fee Cost</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {placesVisited.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.typeOfPlace}</TableCell>
                <TableCell align="left">{item.placeName}</TableCell>
                <TableCell align="left">{item.cityName}</TableCell>
                <TableCell align="left">{item.entryFeeCost}</TableCell>
                <TableCell align="left">{item.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default PlacesVisitedTable;
