import React, {Component} from 'react';
import axios from 'axios';
import '../css/App.css';

class Word extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        const word = this.state.data.word;
        axios.get('http://localhost:5000/word' + word)
            .then(res => {
                this.setState({
                    data: res.data
                });
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render(){
        return(
            <div>
                <div className='word-page'>
                    <div className='title'>
                        <h2 className='word-title'> {this.state.data.word} </h2>
                        <strong> {this.state.data.wordType} </strong>
                    </div>
                    <div className='definition'>
                        <div className='title_def'>
                            <h4> Définition </h4>
                            <button className='btn_edit'><i className="material-icons material-edit">mode_edit</i></button>
                        </div>
                        <p className='def_p'>
                            {this.state.data.definition}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Word;