import React, {Component} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="outer">
                    <Routes>
                        <Route path='/login' exact element={<Login />}/>
                        <Route path='/register' exact element={<Register />}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;