import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import ShoppingListEntry from './ShoppingListEntry.jsx';


// function to create a row following column syntax
function createData(id, name, quantity) {
  return { id, name, quantity };
}
//exampleData
const rows = [
  createData(22, "Jack and coke", 5),
  createData(13, "redbull and vodka", 2),
  createData(40, "Jack Daniels Float", 10),
  createData(5, "hand grenade", 8),
  createData(62, "Shark Attack", 5),
  createData(37, "JaegarBombs", 11),
  createData(70, "Irish Car Bombs", 1)
]





export default function ShoppingList() {
  // hooks for TablePagination
  const [count, setCount] = useState(rows.length);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  // columns with a field of drinkId, drink name, quantity;
  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Drink' },
    { id: 'quantity', label: 'Quantity' }
  ]



  // changes the current page
  // handles changing the page count
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  }
  const handleChangeRowsCount = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  }


  //Table Pagination Tag
  const pageSetup = (
    <TablePagination
      rowsPerPageOptions={[5, 10, 15]}
      rowsPerPage={rowsPerPage}
      page={page}
      count={count}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsCount}
    />

  )



  return (
    <Paper >
      <TableContainer >
        <Table stickyHeader >

          {/** TableHead/Row renders a Table Cell for each column option */}
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={column.id} > {column.label} </TableCell>
                )
              })}
            </TableRow>
          </TableHead>

          {/**ShoppingListEntry === TableBody */}
          <TableBody >
              {
                rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return <ShoppingListEntry row={row} columns={columns} key={row.id} />
                })
              }
            <TableRow >
              {/** TablePagination handles row count in page and pagechange */}
              {pageSetup}
            </TableRow>
          </TableBody>

        </Table>
      </TableContainer>
    </Paper>

  )
}


