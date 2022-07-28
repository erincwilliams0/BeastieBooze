import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@mui/material/styles';

// columns with a field of drinkId, drink name, quantity;
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Drink' },
  { id: 'quantity', label: 'Quantity' }
]

// function to create a row following column syntax
function createData(id, name, quantity) {
  return { id, name, quantity };
}

// example data for rendering rows
const rows = [
  createData(22, "Jack and coke", 5),
  createData(13, "redbull and vodka", 2),
  createData(40, "Jack Daniels Float", 10),
  createData(5, "hand grenade", 8),
  createData(62, "Shark Attack", 5),
  createData(37, "JaegarBombs", 11),
  createData(70, "Irish Car Bombs", 1)
]

const ShoppingList = () => {



  return (
    <TableContainer component={Paper} >
      <Table stickyHeader >
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
        <TableBody >
          {
            rows.map((row) => {
              return (
                <TableRow key={row.id} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return <TableCell key={column.id} >
                      {value}
                    </TableCell>
                  })}
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}


export default ShoppingList;