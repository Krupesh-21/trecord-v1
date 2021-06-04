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


function ParkingTable(props) {
  const { parkingExpense } = props;

  return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}} align="left">Parking At</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Name of City</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Parking Charge</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parkingExpense.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.parkingAt}</TableCell>
                <TableCell align="left">{item.cityName}</TableCell>
                <TableCell align="left">{item.parkingCharge}</TableCell>
                <TableCell align="left">{item.parkingService}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default ParkingTable;