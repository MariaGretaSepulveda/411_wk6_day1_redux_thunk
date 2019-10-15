import React from 'react'
import { Button, Container, Table, TableHead, TableBody, TableRow, TableCell, Tab } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const Import = (props) => {
    
    <div>
        <button onClick={props.fetchMakes} variant="contained" color="primary">Import</button>
        <Menu></Menu>
        <Table>
            {props.makes.map(x => {
                return (
                    <TableRow>
                        <TableCell>{x.makes.MakeId}</TableCell>
                        <TableCell>{x.makes.MakeName}</TableCell>
                        <TableCell></TableCell>
                        <MoreVert></MoreVert>
                    </TableRow>
                )
            })}
        </Table>
    </div>
    return (
        <p>Import Component</p>
    )
}

export default Import;