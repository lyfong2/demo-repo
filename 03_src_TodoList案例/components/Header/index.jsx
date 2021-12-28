import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

import './index.css'

export default class Header extends Component {

    // 對接收的props進行: 類型, 必要性的限制 
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 鍵盤事件的回調
    handleKeyUp = (event) => {
        // 解構賦值獲取keyCode,target
        const {keyCode, target} = event
        // 判斷是否是回車鍵
        if(keyCode !== 13) return;
        
        if(target.value.trim() === ''){
            alert('cant not empty')
            return;
        }

        // 準備好一個todo對象
        const todoObj = {id:nanoid(), name:target.value, done:false}
        // 將todoObj傳遞給App
        this.props.addTodo(todoObj);
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}

