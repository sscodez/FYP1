import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dash from './Dashboard';
import styled, { css } from 'styled-components';


const Parent = styled.div`
 
    display:flex;
    padding-left:110px;
    padding-right:110px;
    align-items:center;
    flex-direction:column;
    width:80%;
`;

export const TextArea = styled.div`
   {
    padding-left: 15px;
  }
`;
export const Title = styled.p`
   {
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
      "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
    font-size: 65px;
    color: #303030;
    letter-spacing: -2px;
    line-height: 53px;
    padding-bottom: 15px;
    
  }
`;


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
  createData(
    4,
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
  createData(
    4,
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

export default function Transaction() {
  return (
    <React.Fragment>
        <Dash/>
        <Parent>
        <TextArea>
            <Title>LATEST TRANSACTION IN CONTRACT</Title>
           
          </TextArea>
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
    
      </Parent>
    </React.Fragment>
  );
}