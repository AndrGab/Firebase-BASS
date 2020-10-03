import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {AppBar, Toolbar, Card, CardContent, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import {DataTable} from '../Datatable/Datatable'
import FirebaseService from '../../services/FirebaseService'
import {urls, privateUrls} from "../../utils/urlUtils";
import Add from "../Add/Add";
import {Welcome} from "../Welcome/Welcome";
import {Link, Route} from "react-router-dom";


const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class App extends Component {

state = {
    data: []
};
componentDidMount() {
    FirebaseService.getDataList('fornecedor', (dataReceived) =>    this.setState({data: dataReceived}))
};

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" component={props => <Link to={privateUrls.home.path} {...props}/>}>
            <MenuIcon/>
        </IconButton>

      
                    
                    </Toolbar>
                </AppBar>
                <Card style={{margin: '50px'}}>
    <CardContent>
        <Route exact
               path={privateUrls.home.path}
               render={(props) => <Welcome {...props}/>}
        />

        <Route exact
               path={urls.data.path}
               render={(props) => 
                  <DataTable {...props} data={this.state.data}/>}
        />

        <Route exact
               path={urls.add.path}
               render={(props) => 
                        <Add {...props}/>}
        />
        <Route exact
               path={privateUrls.edit.path}
               render={(props) => 
                        <Add {...props}/>}
        />
    
    </CardContent>
</Card>
            </React.Fragment>
        </MuiThemeProvider>
    );
}
}

export default App;