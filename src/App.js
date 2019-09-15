import React, { Component } from 'react'

import { HashRouter,Route,Switch } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import Nav from './pages/nav/Nav';//引入导航

import Login from './pages/login/Login';//登录
import Reg from './pages/register/Register'//注册
import City from './pages/searchCity/City'//城市
import Room from './pages/searchRoom/Room'//搜索房源
import MyMap from './pages/mymap/MyMap'//地图
import Chats from './pages/chats/Chats'//多人聊天




export default class App extends Component {
    render() {
       
        return (
            
            <Provider store={store}>

              <HashRouter>

                <Switch>

                    <Route path='/' exact component={Nav}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Reg}/>
                    <Route path='/city' component={City}/>
                    <Route path='/room' component={Room}/>
                    <Route path='/myMap' component={MyMap}/>
                    <Route path='/chats' component={Chats}/>
                    {/* 容错处理页面 -----默认跳转回导航*/}

                    <Route component={Nav}/>

                </Switch>
                </HashRouter>




            </Provider>

               
        )
    }
}
