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


function TravelByTable(props) {
  const { travelBy } = props;

  return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}} align="left">Mode of Ride</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">From</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">to</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Ride Cost</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {travelBy.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.typeOfRide}</TableCell>
                <TableCell align="left">{item.from}</TableCell>
                <TableCell align="left">{item.to}</TableCell>
                <TableCell align="left">{item.rideCost}</TableCell>
                <TableCell align="left">{item.rideRating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default TravelByTable;