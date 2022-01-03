import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'


export default class Search extends Component {

    search = async() => {

        // 獲取用戶的輸入(連續解構賦值+重命名)
        const { keyWordElement:{value:keyWord} } = this;
        
        // 發送請求前通知List更新狀態
        PubSub.publish('dannyTest', {isFirst:false, isLoading:true})
        //#region 發送網路請求---使用axios發送
        // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => {
        //         // 請求成功後通知List更新狀態
        //         PubSub.publish('dannyTest', {isLoading:false, users:response.data.items})
        //     },
        //     error => {
        //         //請求失敗後通知App更新狀態
        //         PubSub.publish('dannyTest', {isLoading:false, err: error.message})
        //     }
        // )
        //#endregion 
    
        //發送網路請求---使用fetch發送(未優化)
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => {
        //         console.log('聯繫服務器成功了');
        //         return response.json()
        //     },
        //     error => {
        //         console.log('聯繫服務器失敗了', error);
        //         return new Promise(()=>{});
        //     }
        // ).then(
        //     response => {console.log('獲取數據成功了', response);},
        //     error => {console.log('獲取數據失敗了',error);}
        // )

        //發送網路請求---使用fetch發送(優化)

        try{
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish('dannyTest', {isLoading:false, users:data})

            console.log(data);
        } catch (error) {
            console.log('請求出錯', error);
            PubSub.publish('dannyTest', {isLoading:false, err: error.message})            
        }
        
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
/**
 * ======[xhr]======
 * > 原生內建
 * > 不好用
 * > 無法解決回調地獄的問題
 * 
 *      jQuery
 *      > 會有callback hell
 *      > xhr的封裝
 * 
 *      axios
 *      > xhr的封裝
 * 
 * ======[fetch]======
 * > 有瀏覽器就能用它
 * 
 * 
 */
