import React, { Component } from 'react'
import { WhiteSpace,Button} from 'antd-mobile';
import './chat.css'

export default class Chat extends Component {
    render() {
        return (
            <div className='box'>
                
                    <div className='chatBox'>
                        <img src={require('../../../assets/images/hand.jpg')}></img>
                        <WhiteSpace size="lg" />
                        <p>职业顾问<span>张肖妹</span></p>
                        <WhiteSpace size="lg" />
                        <p>专业服务诚信做人做事</p>
                        <WhiteSpace size="lg" />
                        <Button onClick={this.goChat.bind(this)} type="primary" size='small' inline style={{ marginRight: '4px' }}>我要聊天</Button>
                    </div>

                
               
                   
                
            </div>
        )
    }

    goChat(){
        this.props.sendhis.push('/chats')
    }
}
