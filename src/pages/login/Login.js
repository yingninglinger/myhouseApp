import React, { Component } from 'react'

import { Flex, WhiteSpace,WingBlank,InputItem,Button,Checkbox} from 'antd-mobile';
import { Link } from "react-router-dom";

import './login.css'
import { login } from '../../api/api';

const AgreeItem = Checkbox.AgreeItem;

export default class Login extends Component {
    constructor(){
        super()
        this.state={
            acc:'',
            pwd:'',
            oldAcc:'',
            oldPwd:'',
            show:'none',
            notBlank:'none',
            checked:false

        }
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                    <Flex justify="center" style={{paddingTop:'50px'}}>
                        <img className="logo" src={require("../../assets/images/logo.jpg")}/>
                    </Flex>


                    <div style={{marginTop:'30px'}} className="login">

                       <WingBlank size="lg">
                        
                        <InputItem
                           
                           placeholder="请输入手机号"
                           clear
                           value={this.state.acc}
                           onChange={(val)=>{this.setState({acc:val})}}

                       >
                           <div style={{ backgroundImage: `url(${require('../../assets/images/acc.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                       </InputItem>
                       <WhiteSpace size="sm" />
                      
                        <InputItem
                           
                            placeholder="请输入密码"
                            type="password"
                            clear
                            value={this.state.pwd}
                            onChange={(val)=>{this.setState({pwd:val})}}
                        >
                            <div style={{ backgroundImage: `url(${require('../../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <WhiteSpace size="xs" />
                        <p style={{display:this.state.notBlank,color:'#E4393C'}}>用户名或密码不能为空！</p>

                        <p style={{display:this.state.show,color:'#E4393C'}}>用户名或密码错误！</p>
                        <WhiteSpace size="xl" />

                        <Button type="primary" style={{background:'#E4393C',color:'#fff',border:'none'}} onClick={this.checkLogin.bind(this)}>登录</Button><WhiteSpace />

                        <Flex justify="between">

                            <Link to="/register">手机快速注册</Link>
                            <Link to="/register">忘记密码？</Link>

                        </Flex>
                        
                        </WingBlank>

                        <Flex justify="center">
                            <div className="footer">
                                        <AgreeItem data-seed="logId" onChange={e =>{this.setState({checked:e.target.checked})}}>
                                        <a onClick={(e) => { alert('同意注册登录才可以登录'); }}>登录/注册即代表同意<span style={{color:'#E4393C'}}>《房产用户协议》</span></a>
                                        </AgreeItem>
                    
                            </div>
                        </Flex>
                       



                    </div>

            </div>
        )
    }

    checkLogin(){

        let {acc, pwd,oldAcc,oldPwd,checked} = this.state
        if(acc===''|| pwd===''){//非空验证
             //显示错误信息
             this.setState({
                notBlank:'block'
            })
        }
        if(!checked){
            alert('请勾选《用户登录协议》！！！')

        }
        //验证每次输入是否相同，相同就阻止发送请求
        if(acc===oldAcc && pwd===oldPwd) return

        //将每次的值保存方便下次验证
        this.setState({
            oldAcc:acc,
            oldPwd:pwd
        })

        //发送请求
        login(acc,pwd).then(res=>{
            if(res.data==='ok'){

                //成功
                this.props.history.push('/')
                //存贮用户信息
                localStorage.setItem("username",acc)
                

            }else{
                //显示错误信息
                this.setState({
                    show:'block'
                })

            }
          
        })


    }

   
}
