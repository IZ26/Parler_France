import React, {Component} from 'react';
//import {Route, Redirect} from 'react-router-dom';

class Profil extends Component{
    render(){
        return(
            <div className='profil'>
                <div className='profil_item info_profil'>
                    <div className='profil_pic'>
                        <i className="material-icons pic_icon">person</i>
                    </div>
                    <div>
                        <p> Zerdoun </p>
                        <p> Ilan </p>
                        <button className='btn-logout'> Deconnexion</button>
                    </div>
                </div>
                <div className='profil_word add_word'>
                    <h3> Mots Ajoutés </h3>
                    <ul className='word'>
                        {/*<li><span><i class="material-icons arrow">keyboard_arrow_right</i></span></li>*/}
                    </ul>
                </div>
                <div className='profil_word waiting_word'>
                    <h3> Mots en attentes </h3>
                    <ul className='word'>
                        {/*<li><span><i class="material-icons arrow">keyboard_arrow_right</i></span></li>*/}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profil;