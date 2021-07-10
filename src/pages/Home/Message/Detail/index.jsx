import React, { Component } from 'react'
import qs from 'querystring';

// let obj = {name:'tom', age:18}  // name=tom&age=18  key=value&key=value
// console.log(qs.stringify(obj)); // url encoded

// let str = 'carName=奔馳&price=199'
// console.log(qs.parse(str));


const DetailData = [
    {id: '01', content:'你好, 中國'},
    {id: '02', content:'你好, 尚硅谷'},
    {id: '03', content:'你好, 未來的自己'}
]


export default class Detail extends Component {
    render() {
        console.log(this.props); 
        // 接收params參數 
        // const {id, title} = this.props.match.params
        
        // 接收search參數
        
        // const findResult = DetailData.find((detailObj) => {
        //     return detailObj.id === id  
        // })
        return (
            <ul>
                <li>ID:??</li>
                <li>TITLE: ??</li>
                <li>CONTENT: ??</li>
            </ul>
        )
    }
}
