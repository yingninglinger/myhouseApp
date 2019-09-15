import React, { Component } from 'react'
import { InputItem,WhiteSpace,WingBlank,Checkbox,Button} from 'antd-mobile';
import { Link } from "react-router-dom";
import './reg.css';

import { checkCode,reg } from "../../api/api";

const AgreeItem = Checkbox.AgreeItem;
export default class Register extends Component {
    constructor(){
        super()
        this.state={
            acc:'',
            pwd:'',
            valitecode:'',
            text:'获取验证码',
            show:'none'
        }
    }
    render() {
        return (
            <div>
                <div className="reg">
                     <WingBlank size="lg">

                        <InputItem
                            type='money'
                            value={this.state.acc}
                            placeholder="输入手机号码"
                            clear
                            disabledKeys={['.']}//禁止按键
                            onChange={(val)=>{this.setState({acc:val})}}
                        >手机号码：
                       </InputItem>
                        <WhiteSpace size="xs" />
                    
                        <InputItem
                            type="password"
                            placeholder="请输入密码"
                            value={this.state.pwd}
                            onChange={(val)=>{this.setState({pwd:val})}}

                            >密码：
                            
                        </InputItem>
                        <WhiteSpace size="xs" />
                      <div style={{width:'100%',position:'relative'}}>
                      <InputItem
                         
                          placeholder="请输入验证码"
                          type="number"
                          clear
                          value={this.state.valitecode}
                      >
                       验证码：
                      <Button type="primary"  onClick={this.checkCode.bind(this)} style={{position:'absolute',right:"6px",top:"7px",width:'80px',background:'#E4393C',color:'#fff',border:'none',fontSize:'10px'}} size="small" inline>{this.state.text}</Button>
                      </InputItem>
                      </div>

                     
                    
                               
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                    <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>登录/注册即代表同意<span style={{color:'#E4393C'}}>《房产用户协议》</span></a>
                    </AgreeItem>
                    <p style={{display:this.state.show,color:'#E4393C'}}>用户名或密码或验证码不能为空！</p>

                    <WhiteSpace size="xl" />

                    <Button type="primary" style={{background:'#E4393C',color:'#fff',border:'none'}} onClick={this.register.bind(this)}>注册</Button><WhiteSpace /> 
                    <WhiteSpace size="sm" />
                    <Link to="/login">已有账号，直接登录</Link>
                    
                    </WingBlank>

                    


                </div>
                
                       
            </div>
        )
    }
    async checkCode(){
       
        let res = await checkCode()

        this.setState({
            valitecode:res.data
        })


    }
    async register(){
        let {acc,pwd,valitecode} = this.state
        //判定
        if(!acc=='' && !pwd=='' && !valitecode==''){//可以发请求
            
            let {acc,pwd} = this.state
            let res = await reg(acc,pwd)

            if(res.data==='ok'){
                this.props.history.push('/login')

            }else{
                
                return
            }

        }else{//不可以
            console.log(222);
            this.setState({
                show:'block'
            })
            
        }
        
    }
}
