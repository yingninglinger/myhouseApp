import React, { Component } from 'react'
import {  Carousel, WhiteSpace,WingBlank,Grid } from 'antd-mobile';

import { connect } from "react-redux";

import { IP } from "../../../api/api";

 class History extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>

               <p style={{lineHeight:'50px',color:'#fff',background:'#E4393C',textAlign:'center',fontSize:'18px'}}>浏览历史</p>
              
               
               {
                   this.props.historyArr.map(obj=>
                       <div>
                            <WhiteSpace size="lg" />
                            <WingBlank size="lg">
                            <a href="#" style={{display:'flex',color:'#333',background:"#fff",padding:'15px'}} key={obj.id}>
                                <img src={IP+obj.imgs} style={{width:'100px',height:'110px'}}/>
                                <div style={{marginLeft:"15px"}}>
                                    <div className="title">
                                        <WhiteSpace size="sm" />
                                        <h3 style={{margin:0, overflow:"hidden"}}>{obj.name}</h3>

                                        <WhiteSpace size="sm" />
                                        
                                        <p style={{color:'#E4393C',fontWeight:"bolder"}}>{obj.price}/平</p>
                                    </div>
                                    <WhiteSpace size="sm" />
                                    <p>{obj.area}&nbsp;{obj.range}</p>
                                    <WhiteSpace size="sm" />
                                    <p>{obj.type} {obj.point}平</p>
                                </div>
                            </a>
                           </WingBlank>
                       </div>


                    
                    
                    )
               }
              
            </div>
        )
    }
}


export default connect((state) => {
  
  return{
    historyArr:state.historyArr
  }
})(History)
