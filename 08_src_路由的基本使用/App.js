import React,  {Component} from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home'

export default class App extends Component{
    render(){
        return (
            <div>                
                <Link className="" to="/about">About</Link>
                <Link className="" to="/home">Home</Link>
                <div>
                    {/* 註冊路由 */}
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                </div>
            </div>
        )
    }
}

