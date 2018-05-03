import React, {Component} from 'react';
import '../css/App.css';

class FormConnexion extends Component{
    render(){
        return(
            <div>
                <form>
                    <div className='input_item'>
                        <label>Email</label>
                        <input type='text' placeholder='Entrer votre email'/>
                    </div>
                    <div className='input_item'>
                        <label>Mot de passe</label>
                        <input type='password' placeholder='Votre mot de passe'/>
                    </div>
                    <div className='input_item'>
                        <input type='submit' value='Connexion' className='btn_submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormConnexion;