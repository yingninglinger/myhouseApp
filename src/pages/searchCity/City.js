import React, { Component } from 'react'

import cityData from "../../json/city.json";
import { SearchBar} from 'antd-mobile';
import "./city.css";

import Bscroll from "better-scroll";

export default class City extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>

                <div> <SearchBar placeholder="搜索城市" ref={ref => this.autoFocusInst = ref} style={{zIndex:1}}/></div>
                
               
                <div id="myscroll" style={{height:'100%',overflow:'scroll'}}>

                    <ul className="content">

                         {/* 热门城市 */}
                            <p className="cityTitle">热门城市</p>
                            {
                                cityData.hotCity.map(cityName=>
                                    <p className="cityName">{cityName}</p>
                                    
                                )
                            
                            }

                            {/* 所有城市 */}
                            {
                                cityData.citys.map(obj=><div>

                                <p id={obj.title} className="cityTitle">{obj.title}</p>{/* 标题 */}

                                {
                                    obj.child.map(cityname=>
                                        <p className="cityName">{cityname}</p>
                                        
                                    )
                                }


                                </div>

                                )
                            
                                
                            }

                    </ul>
                   

                    {/* 城市条 */}
                    <div style={{width:"20px",position:'fixed',right:0,top:"200px"}}>
                        {
                            cityData.citys.map(obj=>

                                <p style={{lineHeight:'30px',textAlign:'center'}} onClick={this.selectCity.bind(this,obj.title)}>
                                    {obj.title}
                                </p>
                                
                             
                            )

                        }
                      
                    </div>
                </div>
            </div>
        )
    }
    selectCity(title){

      
       this.myScroll.scrollToElement("#" + title,600)
        

    }
    componentDidMount(){

       this.myScroll= new Bscroll("#myscroll",{
            click:true/* better-scroll会阻止本页面的所有点击事件 */
        })

    }
}
