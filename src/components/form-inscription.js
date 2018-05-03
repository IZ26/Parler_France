import React, {Component} from 'react';
import '../css/App.css';

class FormInscription extends Component{
    render(){
        return(
            <div>
                <form>
                    <div className='input_item'>
                        <label>Prénom</label>
                        <input type='text' placeholder='Entrer votre prénom'/>
                    </div>
                    <div className='input_item'>
                        <label> Nom </label>
                        <input type='text' placeholder='Entrer votre nom'/>
                    </div>
                    <div className='input_item'>
                        <label>Email</label>
                        <input type='text' placeholder='Entrer votre email'/>
                    </div>
                    <div className='input_item'>
                        <label>Mot de pass</label>
                        <input type='password' placeholder='Votre mot de passe'/>
                    </div>
                    <div className='input_item'>
                        <label>Confirmation mot de passe</label>
                        <input type='text' placeholder='Confirmer votre mot de passe'/>
                    </div>
                    <div className='input_item'>
                    <input type='submit' value='Inscription' className='btn_submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormInscription;