import React, { Component } from 'react'

const DetailData = [
    {id: '01', content:'你好, 中國'},
    {id: '02', content:'你好, 尚硅谷'},
    {id: '03', content:'你好, 未來的自己'}
]


export default class Detail extends Component {
    render() {
        // console.log(this.props); 
        const {id, title} = this.props.match.params
        const findResult = DetailData.find((detailObj) => {
            // 函數體
            return detailObj.id === id  
        })
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {findResult.content}</li>
            </ul>
        )
    }
}
