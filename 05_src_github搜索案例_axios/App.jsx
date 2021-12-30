import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {
    
    state = {
        users:[],           // users初始值為數組
        isFirst: true,      // 是否為第一次打開頁面
        isLoading: false,   // 標示是否處於加載中
        err: '',            // 存儲請求相關的錯誤信息
    }

    updateAppState = (stateObj) => {        
        this.setState(stateObj)
    }
    
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
