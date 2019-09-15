import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import Main from './main/Main';
import Chat from './chat/Chat';
import History from './history/History';
import My from './my/My';


export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
          selectedTab: 'main',
          iconList:[
              {title:'首页',key:'main',icon:'main.png',selectedIcon:'main_s.png'},
              {title:'微聊',key:'chat',icon:'chat.png',selectedIcon:'chat_s.png'},
              {title:'足迹',key:'history',icon:'history.png',selectedIcon:'history_s.png'},
              {title:'我的',key:'my',icon:'my.png',selectedIcon:'my_s.png'},
          ]
        };
      }
    render() {
        return (

            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>

               

                        <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#E4393C"
                        barTintColor="white"
                        >
                            {
                                this.state.iconList.map(obj=>{

                                
                                    return <TabBar.Item
                                            title={obj.title}
                                            key={obj.key}
                                            icon={<div style={{
                                                width: '28px',
                                                height: '28px',
                                                background: `url(${require('../../assets/images/' + obj.icon)}) center center /  25px 25px no-repeat`
                                            }}
                                            />
                                            }
                                            selectedIcon={<div style={{
                                                width: '28px',
                                                height: '28px',
                                                background: `url(${require('../../assets/images/' + obj.selectedIcon)}) center center /  25px 25px no-repeat`
                                            }}
                                            />
                                            }
                                            selected={this.state.selectedTab === obj.key}
                                            onPress={() => {
                                                this.setState({
                                                    selectedTab: obj.key,
                                                });
                                            }}
                                        >
                                            {this.renderContent()}
                                        </TabBar.Item>

                                
                                })

                            }

                            
                        </TabBar>


               

                
            </div>
        )

    }


    renderContent() {

        //根据当前选中的状态，切换内容
        switch(this.state.selectedTab){
            case 'main':return <Main sendhis={this.props.history}/>
            case 'chat':return <Chat sendhis={this.props.history}/>
            case 'history':return <History/>
            case 'my':return <My sendhis={this.props.history}/>
        }
    }

    
            
 
}
