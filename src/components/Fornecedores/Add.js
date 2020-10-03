import {Button, TextField, Typography} from "@material-ui/core";
import React, {Component} from "react";
import FirebaseService from "../../services/FirebaseService";
import {urls} from "../../utils/urlUtils";
import {withRouter} from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';

class Add extends Component {

    state = {id: null, empresa: '', contato: '', telefone: ''};

    UNSAFE_componentWillMount = () => {
        const {id} = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({id});
            FirebaseService.getUniqueDataBy('fornecedor', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }

    };

    submit = (event) => {
        event.preventDefault();

        const {empresa} = this.state;
        const {contato} = this.state;
        const {telefone} = this.state;
       

        let objToSubmit = {
            empresa,
            contato,
            telefone
        };

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('fornecedor', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'fornecedor', objToSubmit)
        }

        this.props.history.push(urls.data.path);

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render = () => {
        return (<React.Fragment>

            <Typography variant="headline" component="h2">Fornecedor</Typography>
            <form onSubmit={this.submit}>
                <TextField className="input-field"
                           type="text"
                           value={this.state.empresa}
                           label="Nome da Empresa"
                           required
                           onChange={this.handleChange('empresa')}/>

                <TextField className="input-field"
                           type="text"
                           label="Nome do Contato"
                           value={this.state.contato}
                           required
                           onChange={this.handleChange('contato')}/>

                <TextField className="input-field"
                           type="text"
                           label="Telefone"
                           value={this.state.telefone}
                           required
                           onChange={this.handleChange('telefone')}/>

               
                <Button type="submit" variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SaveIcon />}
                        style={{marginTop: '20px'}}>
                    Salvar
                </Button>
            </form>
        </React.Fragment>)
    }
}

export default withRouter(Add);