import React, { Component } from 'react'

import './chats.css'

export default class Chats extends Component {
    render() {
        return (
            <div className='chatsBox'>
               <p className="top" style={{lineHeight:"50px",background:'#333',color:'#fff',fontSize:'18px',textAlign:'center'}}>多人聊天</p>
               <div className="con">内容</div>
               <div className="inputText">
                   <input type="text"/>
                   <button className="sendbtn">发送</button>

               </div>
            </div>
        )
    }
}
