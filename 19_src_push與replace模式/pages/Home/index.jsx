import React from 'react'
import MyNavLink from '../../components/MyNavLink';
import {Route, Switch, Redirect} from 'react-router-dom';

import News from './News';
import Message from './Message';

export default function Home() {
    return (
        <div>
            <h3>我是Home的內容</h3>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink replace to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink replace to="/home/message">Message</MyNavLink>
                    </li>
                </ul>
                {/* 註冊路由 */}
                <Switch>
                    <Route path="/home/news" component={News} />
                    <Route path="/home/message" component={Message} />
                    <Redirect to="/home/news" />
                </Switch>
            </div>
        </div>
    )
}
