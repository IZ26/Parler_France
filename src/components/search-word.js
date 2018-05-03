import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import '../css/App.css';

class SearchForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            redirect: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        axios.get('http://localhost:5000/word/3')
            .then(response => {
                this.setState({
                    value: '',
                    redirect: true
                });
                console.log(response);
        });
        console.log(this.state.value);
        event.preventDefault();
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/word"/>
        }
        return(
            <div>
                <div>
                    <div className='title'>
                        <h2> Rechercher un mot </h2>
                    </div>
                    <form onSubmit={this.handleSubmit} className='search_word'>
                        <div className='input_item'>
                        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Recherche...'/>
                        </div>
                        <button type='submit' className='btn_search'><i className="material-icons">search</i></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchForm;