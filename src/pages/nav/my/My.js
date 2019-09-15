import React, { Component } from 'react'
import { List} from 'antd-mobile';
import './my.css';
import Bscroll from "better-scroll";
const Item = List.Item;


export default class My extends Component {
    constructor(){
        super()
        this.state={
            icondata:[
                { icon: 'mony_s.png',text:"钱包",num:0},
                { icon: 'preferential.png',text:"优惠",num:0},
                { icon: 'integral_s.png',text:"积分",num:0},
              ].map(obj=>{
  
                return {
                  icon: require('../../../assets/images/' + obj.icon),
                  text: obj.text,
                  num:0
  
                }
              }),
              data:[
                {},
                { icon: 'integral.png',text:"我的积分"},
                { icon: 'wifi.png',text:"我的订阅"},
                { icon: 'chats.png',text:"微聊联系人"},
                {},
                { icon: 'compud.png',text:"房贷计算机"},
                { icon: 'star.png',text:"我的房子"},
                {},
                { icon: 'roomhistory.png',text:"我的看房记录"},
                { icon: 'my.png',text:"我的问答"},
                {},
                { icon: 'set.png',text:"设置"},
                { icon: 'sugest.png',text:"意见反馈"},
              ],
            msg:'登录/注册',
            visible: true,
            selected: '',

        }
    }
    render() {
        return (
            <div>
                <div className='top'>
                    <div className="topBar">

                            <div className="left">
                                <img src={require('../../../assets/images/hand.jpg')}/>
                            </div>
                            <div className="right">
                                <p className='text'><span className="login" onClick={this.jump.bind(this)}>{this.state.msg}</span><span><img src={require('../../../assets/images/set_s.png')}/></span></p>
                                <p>可以与房产经纪人发起聊天</p>
                            
                            </div>
                    </div>
                    <ul className="mylist">

                        {
                            this.state.icondata.map(obj=>{
                            return <li key={obj.icon}>
                                    <p>{obj.num}</p>
                                    <p className='text'><img src={obj.icon}/>&nbsp;<span>{obj.text}</span></p>
                               </li>

                            })


                        }

                    </ul>
                </div> 

                <List id="srollList" style={{height:'100%',overflow:'scroll'}}>

                    <ul className="content">
                        {
                            this.state.data.map(obj=>{

                                if(obj.icon){
                                    return  <Item
                                                    thumb={require('../../../assets/images/' + obj.icon)}
                                                    arrow="horizontal"
                                                    onClick={() => {}}
                                                    key={obj.icon}
                                                    >{obj.text}
                                                </Item>
                                }else{

                                    return <div style={{height:'15px',background:"#F4F4F4"}}></div>

                                }

                            })
                        }


                    </ul>
                   
                   
                </List>

            </div>
 
        )
    }

    jump(){

        let val = localStorage.getItem('username');

        //判断
        if(!val){
            this.props.sendhis.push('/login')
        }

       
        
    }

    componentDidMount(){

        let val = localStorage.getItem('username');

        this.setState({msg:val?val:'登录/注册'})//直接三目运算

        // if(val){
        //     this.setState({
        //         msg:val
        //     })
        // }else{
        //     this.setState({
        //         msg:'登录/注册'
        //     })

        // }

        let srollList = new Bscroll("#srollList",{
            click:true
        })



    }
}
