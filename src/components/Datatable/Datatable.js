import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FirebaseService from "../../services/FirebaseService";
import {Link} from "react-router-dom";
import {privateUrls} from "../../utils/urlUtils";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export const DataTable = ({data}) => {

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
     
    const classes = useStyles();

    const remove = (id) => {
        FirebaseService.remove(id, 'fornecedor');
    };

    return <React.Fragment>
    
        <Table className={classes.table} size="small">
            <TableHead>
                <TableRow>
                    <TableCell><b>Company name</b></TableCell>
                    <TableCell><b>Contact</b></TableCell>
                    <TableCell><b>Phone number</b></TableCell>
                    <TableCell></TableCell>
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
                                    <DeleteOutlineOutlinedIcon />
                                </Button>

                                <Button component={props => <Link to={privateUrls.edit.pathWithouParam + item.key} {...props}/>}>
                                    <EditOutlinedIcon/>
                                </Button>

                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>

    </React.Fragment>
};