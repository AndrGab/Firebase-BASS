import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import FirebaseService from "../../services/FirebaseService";
import {Link} from "react-router-dom";
import {privateUrls} from "../../utils/urlUtils";
import DeleteIcon from '@material-ui/icons/Delete';

export const DataTable = ({data}) => {

    const remove = (id) => {
        FirebaseService.remove(id, 'fornecedor');
    };

    return <React.Fragment>
        <Typography variant="headline" component="h2">Provider list</Typography>
        <Table selectable="false">
            <TableHead>
                <TableRow>
                    <TableCell>Company name</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Phone number</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.empresa}</TableCell>
                            <TableCell>{item.contato}</TableCell>
                            <TableCell>{item.telefone}</TableCell>
                            <TableCell>
                                <Button onClick={() => remove(item.key)}>
                                    <DeleteIcon />
                                </Button>

                                <Button component={props => <Link to={privateUrls.edit.pathWithouParam + item.key} {...props}/>}>
                                    Edit
                                </Button>

                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};