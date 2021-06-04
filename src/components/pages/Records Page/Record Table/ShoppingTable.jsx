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


function ShoppingTable(props) {
  const { shopping } = props;

  return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}} align="left">Name of Shop</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Name of City</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Purchase Cost</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Item Quantity</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="left">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shopping.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.shopName}</TableCell>
                <TableCell align="left">{item.cityName}</TableCell>
                <TableCell align="left">{item.purchaseCost}</TableCell>
                <TableCell align="left">{item.itemQuantity}</TableCell>
                <TableCell align="left">{item.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default ShoppingTable;