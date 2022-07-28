import React, { useState, useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


//ShoppingListEntry renders current number of rowsperpage, also assigns appropriate values to their columns 
export default function ShoppingListEntry({ columns, row }) {
  // hooks for controlling row quantity
  const [quantity, setQuantity] = useState(row.quantity);
  // method to handle inputChangeofQuantity
  const handleQuantityChange = (e) => {
    console.log(`${row.name} quantity has been changed to ${e.target.value}`)
    setQuantity(e.target.value);
  }
  
  return (

    <TableRow key={row.id} >
      {columns.map((column) => {
        const value = row[column.id];

        // quantity cell returns an input form with value set as the default value;
        if(column.id === 'quantity'){
          return <TableCell key={column.id} >
            <TextField 
            inputMode="numeric"
            pattern='[0-9]*'
            size='small'
            variant='standard'
            value={quantity}
            onChange={handleQuantityChange}
             />
          </TableCell>
        }

        return <TableCell key={column.id} >
          {value}
        </TableCell>
      })}
    </TableRow>

  )
}

