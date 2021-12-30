import React, { Component } from 'react'
import axios from 'axios'


export default class Search extends Component {

    search = () => {
        // 獲取用戶的輸入(連續解構賦值+重命名)
        const { keyWordElement:{value:keyWord} } = this;
        
        // 發送請求前通知App更新狀態
        this.props.updateAppState({isFirst:false, isLoading:true})
        // 發送網路請求
        axios.get(`https://api.github.com/search/usejjjrs?q=${keyWord}`).then(
            response => {
                // 請求成功後通知App更新狀態
                this.props.updateAppState({isLoading:false, users:response.data.items})
                // this.props.saveUsers(response.data.items)
            },
            error => {
                //請求失敗後通知App更新狀態
                this.props.updateAppState({isLoading:false, err: error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

