import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
        
    state = {
        users:[],           // users初始值為數組
        isFirst: true,      // 是否為第一次打開頁面
        isLoading: false,   // 標示是否處於加載中
        err: '',            // 存儲請求相關的錯誤信息
    }
    
    componentDidMount(){
        PubSub.subscribe('dannyTest',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }


    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>歡迎使用, 輸入關鍵字, 隨後點擊搜索</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color: 'red'}}>{err}</h2>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} rel="no_referrer">
                                    <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
