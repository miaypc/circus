import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(name, artists, pieces, hours) {
  return { name, artists, pieces, hours };
}

const rows = [
  createData("Mollys Gallery", "Molly", 20, "10:00 - 17:00"),
  createData("Red Beans Gallery", "Red Bean", 50, "10:00 - 12:00"),
  createData("Tofus Gallery", "Tofu", 45, "13:00 - 18:00"),
];

function Gallery() {
  return (
    <div style={{ marginBottom: "5em" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "20px" }}>Gallery Name</TableCell>
              <TableCell align="right" style={{ fontSize: "20px" }}>
                The Artists
              </TableCell>
              <TableCell align="right" style={{ fontSize: "20px" }}>
                Pieces
              </TableCell>
              <TableCell align="right" style={{ fontSize: "20px" }}>
                Opening Hours
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell> {row.name} </TableCell>
                <TableCell align="right"> {row.artists} </TableCell>
                <TableCell align="right"> {row.pieces} </TableCell>
                <TableCell align="right"> {row.hours} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Gallery;
