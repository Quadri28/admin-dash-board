import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';


function createData( name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
 createData("Lasania Chiken fri", 18908424, "2 March 2022", 'Approved'),
 createData("Big Baza Bang", 18908424, "2 March 2022", 'Pending'),
 createData("Mouth freshener", 18908424, "2 March 2022", 'Approved'),
 createData("Cup cake", 18908424, "2 March 2022", 'Delivered'),
];


export default function BasicTable() {

    const makeStyles=(status)=>{
        if(status=== 'Approved')
        return{
            backgroundColor: 'rgb(145 254 159 / 74%)',
            color: 'green'
        }
        else if( status==='Pending')
        return{
            backgroundColor: '#ffadad8f',
            color: 'red'
        }
        else{
            return{
                backgroundColor: '#59bfff',
                color: '#fff'
            }
        }
    }
    



  return (
    <div className='table'>
        <h3> Recent Orders</h3>
    <TableContainer component={Paper}
    style={{boxShadow: '0 13px 20px 0 #80808029', borderRadius:'.7rem'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product </TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>
                {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
