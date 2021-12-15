import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


class Header extends Component {

    back = () => {
        this.props.history.goBack()
    } 
    forward = () => {
        this.props.history.goForward();
    }

    go = () => {
        this.props.history.go(-2);
    }

    render(){
        console.log('Header組件收到的props是', this.props);
        return (
            <div>
                <h1>React Router Demo</h1>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前進</button>&nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

export default withRouter(Header)

// withRouter可以加工一般組件, 讓一搬組件具備路由組件所特有的API
// withRouter的返回值是一個新組件