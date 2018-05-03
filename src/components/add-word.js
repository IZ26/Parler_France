import React, {Component} from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';

class AddWord extends Component{
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            type: 'nom commun',
            def: '',
            open: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/word', {
            word: this.state.word,
            wordType: this.state.type,
            definition: this.state.def
        })
            .then((response) => {
                this.setState({ word: '', type: 'nom commun', def: ''});
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render(){
        const { word, type, def } = this.state;
        const isEnabled =
            word.length > 0 &&
            type.length > 0 &&
            def.length > 0;
        return(
            <div>
                <div className='title'>
                    <h2> Ajouter un mot</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='input_item'>
                        <label>Mot</label>
                        <input value={this.state.word} onChange={this.handleInputChange} name='word' type='text' placeholder='Entrer le mot'/>
                    </div>
                    <div className='select_element'>
                        <div>
                            <label> Type de mot </label>
                        </div>
                        <select value={this.state.type} className='type_word' onChange={this.handleInputChange} name="type">
                            <option value="nom commun">Nom Commun</option>
                            <option value="nom propre">Nom Propre</option>
                            <option value="verbe"> Verbe </option>
                            <option value="adjectif">Adjectif</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    <div className='def_element'>
                        <div>
                            <label> Definition </label>
                        </div>
                        <textarea value={this.state.def} onChange={this.handleInputChange} name='def' placeholder="Entrez votre définition">
                        </textarea>
                    </div>
                    <div className='input_item'>
                        <Popup trigger={<input disabled={!isEnabled} type='submit' value='Ajouter' className='btn_submit'/>} modal contentStyle={{border: '#F2B632 2px solid', borderRadius: '10px'}}>
                            <div className='popup'>
                                <p className='popup_content'>
                                    Votre mot à bien été ajouté
                                </p>
                            </div>
                        </Popup>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddWord;

{/*
in the constructor
redirect: false
*/}

{/*if(this.state.redirect){
return <Redirect to="/word"/>
}*/}
{/*this.setState({redirect: true});*/}

{/*
            word: this.state.word,
            wordType: this.state.type,
            definition: this.state.def
*/}
