import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Feb, 2023',
    '0xf0cd....1868863fcb6800fa22',
    '0x453...6976db5B',
    '0x453...d0bd6976db5B',
    312.44,
  ),
  createData(
    1,
    '16 Feb, 2023',
    '0xf0cd....1868863fcb6800fa22',
    '0x453...6976db5B',
    '0x453...d0bd6976db5B',
    312.44,
  ),
  createData(2, '16 Mar, 2019' ,'0xf0cd....1868863fcb6800fa22',
  '0x453...6976db5B',
  '0x453...d0bd6976db5B', 100.81),
  createData(
    3,
    '16 Feb, 2023',
    '0xf0cd....1868863fcb6800fa22',
    '0x453...6976db5B',
    '0x453...d0bd6976db5B',
    312.44,
  ),
  createData(
    4,
    '16 Feb, 2023',
    '0xf0cd....1868863fcb6800fa22',
    '0x453...6976db5B',
    '0x453...d0bd6976db5B',
    312.44,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Transaction</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Transaction Hash</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount} eth`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Transactions
      </Link>
    </React.Fragment>
  );
}