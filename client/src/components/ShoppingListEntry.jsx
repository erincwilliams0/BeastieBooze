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



//ShoppingListEntry renders current number of rowsperpage, also assigns appropriate values to their columns 
export default function ShoppingListEntry({ columns, row }) {

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
}

