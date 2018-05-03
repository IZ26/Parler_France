import React, {Component} from 'react';
import {NavLink, Route, BrowserRouter as Router} from 'react-router-dom';
import SearchForm from './search-word';
import NavForm from './nav-form';
import AddWord from './add-word';
import WaitingWord from './waiting-word';
import Word from './word';
import '../css/index.css';

class NavBar extends Component{
    render(){
        return(
            <Router>
                <div>
                    <div className='navigation'>
                        <ul className='nav_item'>
                            <NavLink to='/add-word'
                                     style={{textDecoration:'none', width: '100%', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #F2B632'}}>
                                <li>
                                    <i className="material-icons material-item">add_circle</i>
                                </li>
                            </NavLink>
                            <NavLink to='/waiting-word' style={{textDecoration:'none', width: '100%', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #F2B632'}}>
                                <li>
                                    <i className="material-icons material-item">hourglass_full</i>
                                </li>
                            </NavLink>
                            <NavLink exact={true} to='/' style={{textDecoration:'none', width: '100%', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #F2B632'}}>
                                <li>
                                    <i className="material-icons material-item">search</i>
                                </li>
                            </NavLink>
                            <NavLink to='/form' style={{textDecoration:'none', width: '100%', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <li>
                                    <i className="material-icons material-item">person</i>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div>
                        <Route exact={true} path='/' component={SearchForm}/>
                        <Route path='/form' component={NavForm}/>
                        <Route path='/waiting-word' component={WaitingWord}/>
                        <Route path='/add-word' component={AddWord}/>
                        <Route path='/word' component={Word}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default NavBar;