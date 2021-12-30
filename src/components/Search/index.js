import React, { Component } from 'react'
import axios from 'axios'


export default class Search extends Component {

    search = () => {
        // 獲取用戶的輸入(連續解構賦值+重命名)
        const { keyWordElement:{value:keyWord} } = this;
        
        // 發送網路請求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('success', response.data)
                this.props.saveUsers(response.data.items)
            },
            error => {console.log('fail', error)}
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

