import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <div>
        
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              {/* 原生html中, 靠<a> 跳轉不同的頁面 */}
              {/* 
                    <a class="list-group-item" href="./about.html">
                        About
                    </a>
                    <a class="list-group-item active" href="./home.html">
                        Home
                    </a> 
                */}

              {/* 在React中靠路由鏈接實現切換組件 */}
              
                <Link className="list-group-item" to="/about">
                  About
                </Link>
                <Link className="list-group-item" to="/home">
                  Home
                </Link>
              
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                {/* 註冊路由 */}
                
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
