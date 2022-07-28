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







const ShoppingList = () => {
  // columns with a field of drinkId, drink name, quantity;
  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Drink' },
    { id: 'quantity', label: 'Quantity' }
  ]

 

  

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
          <ShoppingListEntry columns={columns}/>

        </Table>
      </TableContainer>
    </Paper>

  )
}


export default ShoppingList;