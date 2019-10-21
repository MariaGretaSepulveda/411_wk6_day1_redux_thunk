import React from 'react'
import { MoreVert } from '@material-ui/icons'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core'
import Menu from './Menu'

const Import = (props) => {
  // fill out this component
  
  return (
    // <p>Import Component</p>
    <Container>
      <Button 
      variant='contained' 
      color='primary' 
      onClick={props.fetchMakes}
      >Import</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {props.makes.map((make, index) => (
            <TableRow key={make.id}>
              <TableCell component='th'scope='row'>
                {make.MakeId}
              </TableCell>
              <TableCell>{make['MakeName']}</TableCell>
              <TableCell>
                <Menu></Menu></TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
    </Container>
  )
}

export default Import