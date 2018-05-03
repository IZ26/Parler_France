import React, {Component} from 'react';
import '../css/App.css';

class WaitingWord extends Component{
    render(){
        return(
            <div>
                <div className='waiting_word_page'>
                    <div className='title'>
                        <h2> Mot en Attente </h2>
                    </div>
                    <div className='waiting_word_list'>
                        <ul className='word'>
                            {/*<li>Mot<span><i class="material-icons arrow">keyboard_arrow_right</i></span></li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default WaitingWord;