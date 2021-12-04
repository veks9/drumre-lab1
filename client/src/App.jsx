import React, {Component} from 'react';
import './App.css';
import cookie from 'react-cookies';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from './components/Header';
import Homepage from './pages/Homepage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: cookie.load('isAuth') === 'true',
            user: cookie.load("user")
        }
    }

    authenticate = (cb) => {
        cookie.save('isAuth', true, {path: '/', maxAge: 5 * 60 * 60});
        cookie.save('user', cb, {path: '/', maxAge: 5 * 60 * 60});
        this.setState({authenticated: true});
        this.setState({user: cb});
    };

    logout = () => {
        console.log('logout')
        cookie.remove('isAuth', {path: '/'});
        cookie.remove('user', {path: '/'});
        this.setState({authenticated: false});
        this.setState({user: {}})
    };

    render() {
        return (
            <div className="App">
                <Header authenticated={this.state.authenticated} logout={this.logout} user={this.state.user}/>
                <div className="outer">
                    <Routes>
                        <Route path='/login' exact element={<Login authenticate={this.authenticate}
                                                                    authenticated={this.state.authenticated} />}/>
                        <Route path='/register' exact element={<Register authenticate={this.authenticate}
                                                                        authenticated={this.state.authenticated} />}/>
                        <Route path='/' exact element={<Homepage/>}/>                                            
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;