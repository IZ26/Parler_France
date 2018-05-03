import React, {Component} from 'react';
import FormInscription from './form-inscription';
import FormConnexion from './form-connexion';
import '../css/App.css';

class NavForm extends Component{
    constructor(){
        super();
        this.state = {
            form: '',
        }
    }
    toggleForm(value){
        this.setState({form: value});
    }
    chooseForm(){
        switch (this.state.form){
            case 'form_connection':
                return <FormConnexion/>;
                break;
            case 'form_inscription':
                return <FormInscription/>;
                break;
            default:
                return <FormConnexion/>;
        }
    }
    render(){
        return(
            <div>
                <div className='nav-btn'>
                    <ul className='nav-form'>
                        <li>
                            <button onClick={this.toggleForm.bind(this, 'form_connexion')} className='btn-login'> Connexion </button>
                        </li>
                        <li>
                            <button onClick={this.toggleForm.bind(this, 'form_inscription')} className='btn-inscription'> Inscritpion </button>
                        </li>
                    </ul>
                </div>
                <div>
                    {this.chooseForm()}
                </div>
            </div>
        )
    }
}

export default NavForm;