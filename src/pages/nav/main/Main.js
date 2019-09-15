import React, { Component } from 'react'
import {  Carousel, WhiteSpace,WingBlank,Grid } from 'antd-mobile';
import './main.css';

import Bscroll from "better-scroll";


import { gethouselist,IP } from "../../../api/api";
import { connect } from "react-redux";
class Main extends Component {
    constructor(){
        super()
        this.state={
            swiperdata: ['1', '2', '3','4','5','6','7','8','9','10'],
            icondata:[
              { icon: 'icon01.png',text:"新房"},
              { icon: 'icon02.png',text:"二手房"},
              { icon: 'icon03.png',text:"租房"},
              { icon: 'icon04.png',text:"商铺写字楼"},
              { icon: 'icon05.png',text:"卖房"},
              { icon: 'icon06.png',text:"海外房产"},
              { icon: 'icon07.png',text:"小区房价"},
              { icon: 'icon08.png',text:"问答"},
              { icon: 'icon01.png',text:"新房"},
              { icon: 'icon02.png',text:"二手房"},
              { icon: 'icon03.png',text:"租房"},
              { icon: 'icon04.png',text:"商铺写字楼"},
              { icon: 'icon05.png',text:"卖房"},
              { icon: 'icon06.png',text:"海外房产"},
              { icon: 'icon07.png',text:"小区房价"},
              { icon: 'icon08.png',text:"问答"}
            ].map(obj=>{

              return {
                icon: require('../../../assets/images/' + obj.icon),
                text: obj.text,

              }
            }),
            hlepData:[
              { icon: 'dkw.png',text:"我要贷款"},
              { icon: 'compud.png',text:"房贷计算"},
              { icon: 'know.png',text:"房贷计算"},
              { icon: 'sao.png',text:"知识"}
            ].map(obj=>{
              return  {
                icon:require('../../../assets/images/'+ obj.icon),
                text:obj.text
              }
            }),
            likeList:[],
            city:'定位中'
        }
    }
    render() {
        return (
            <div>

                  {/* 导航条 */}
                  <div className='top-search'>
                    <label onClick={this.jump.bind(this,'/city')}>{this.state.city}▼</label>
                    <div className='search-div' onClick={this.jump.bind(this,'/room')}>
                        <img src={require('../../../assets/images/search.png')} />
                        <label>搜索房源就点我</label>
                    </div>
                    <img onClick={this.jump.bind(this,'/myMap')} src={require('../../../assets/images/icon_map.png')} />
                </div>
              
                  {/* 轮播 */}
                  <Carousel
                      infinite
                      autoplay
                      infinite
                      style={{height:'176px',marginTop:"40px"}}
                      >
                      {this.state.swiperdata.map(val => (
                          
                          <a
                          key={val}
                          href="http://www.alipay.com"
                          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                          >
                          <img
                              src={require(`../../../assets/images/${val}.jpg`)}
                              alt=""
                              style={{ width: '100%', verticalAlign: 'top',height:"176px" }}
                              onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({ imgHeight: 'auto' });
                              }}
                          />
                          </a>
                      ))}
                  </Carousel>

                  {/* 列表宫格1 */}

                  <Grid data={this.state.icondata} hasLine={false} isCarousel onClick={_el => console.log(_el)} />
                   
                  {/* 房产攻略 */}
                  <WhiteSpace size="lg" />
                 
                  <div className="strategy">
                       <p style={{fontWeight:"bolder",fontSize:"18px",color:'#E4393C',fontStyle:'italic'}}>房产全百科&emsp;</p>
                       <Carousel className="my-carousel"
                              vertical
                              dots={false}
                              dragging={false}
                              swiping={false}
                              autoplay
                              infinite
                            >
                              <div className="v-item">专业的买房攻略</div>
                              <div className="v-item">专业的买房攻略</div>
                              <div className="v-item">专业的买房攻略</div>
                      </Carousel>
                  </div>

                   
                   {/* 列表宫格2 */}
                   <Grid data={this.state.hlepData} hasLine={false} activeStyle={false} />
               
                   {/* 猜你喜欢 */}
                   <WhiteSpace size="lg" />
                   <div>
                     <p style={{background:'#fff',fontSize:'16px',color:'#333',lineHeight:'40px',paddingLeft:'15px'}}>猜你喜欢</p>
                     
                     <div id="myscroll" style={{height:"300px",overflow:'scroll'}}>
                          <ul className="content">
                              <ul className="like">
                              <WingBlank size="lg">
                              {
                                this.state.likeList.map(obj=>{

                                  return <li key={obj.id} onClick={this.addHistory.bind(this,obj)}>

                                            <a href="#">
                                              <img src={IP+obj.imgs}/>
                                              <div style={{marginLeft:"15px"}}>
                                                <WhiteSpace size="lg" />
                                                <div className="title">
                                                    <h3>{obj.name}</h3><p style={{color:'#E4393C',fontWeight:"bolder"}}>{obj.price}/平</p>
                                                </div>
                                                <WhiteSpace size="sm" />
                                                <p>{obj.area}&nbsp;{obj.range}</p>
                                                <WhiteSpace size="sm" />
                                                <p>{obj.type} {obj.point}平</p>
                                              </div>
                                            </a>
                                          </li> 
                                      
                                  
                                })
                              }
                            
                              </WingBlank>
                              </ul>

                          </ul>


                     </div>
                     
                    

                   </div>
                 {/*                   
                  {/* 地图容器 
                  <div id="myMap" style={{width:'360px',height:'600px'}}>

                  </div>*/}
            </div>
        )
    }
    //跳转

    jump(hash){
      //页面跳转
      this.props.sendhis.push(hash)
    }

    //添加数据库仓库
    addHistory(obj){
       
      //发出通知
      this.props.dispatch({
        type:'addHistory',
        obj
      })
      
  
      
    }

    //发送请求
    async componentDidMount(){
              //保存this
              const _this = this;
              //   //精准定位
              // var myMap = new window.AMap.Map("myMap", {
              //   resizeEnable: true,
              //   center: [116.397428, 39.90923],
              //   zoom: 13
              // });

              //实例化城市查询类
              var citysearch = new window.AMap.CitySearch();
              //自动获取用户IP，返回当前城市
              citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        //动态获取当前城市，渲染页面
                        _this.setState({
                          city:cityinfo
                        })
                       

                        //地图显示当前城市
                        // myMap.setBounds(citybounds);
                    }
                } else {
                    //动态获取当前城市，错误提示
                    _this.setState({
                      city:result.info
                    })

                    
                }
              });


              let res = await gethouselist()//获取数据
            
              this.setState({//赋值
                likeList:res.data
              })

              let myscroll = new Bscroll("#myscroll",{
                  click:true
              })

      
    }
    componentWillUnmount(){
      this.setState=(state,callback)=>{
        return

      }
    }

}



export default connect()(Main)
