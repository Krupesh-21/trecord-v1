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


function AccommodationTable(props) {
  const { accommodation } = props;

  return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}} align="left">Accommodation Type</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Type of Room</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Name of Accommodation</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">City</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Room Cost</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accommodation.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.typeOfAccommodation}</TableCell>
                <TableCell align="left">{item.typeOfRoom}</TableCell>
                <TableCell align="left">{item.nameOfAccommodation}</TableCell>
                <TableCell align="left">{item.accommodationCity}</TableCell>
                <TableCell align="left">{item.roomCost}</TableCell>
                <TableCell align="left">
                  {item.accommodationExperience}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default AccommodationTable;
