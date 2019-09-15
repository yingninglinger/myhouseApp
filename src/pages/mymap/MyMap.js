import React, { Component } from 'react'

import {SearchBar} from 'antd-mobile'


export default class MyMap extends Component {
    constructor(){
        super()
        this.state={
            status:'正在定位'

        }
    }
    render() {
        return (
            <div>
                {/* 地图容器 */}
                <SearchBar placeholder="搜索城市"/>
                <div id="myMap" style={{width:'360px',height:'600px'}}>

                </div>
            </div>
        )
    }

    componentDidMount(){

        let _this = this;

        var map = new window.AMap.Map('myMap', {
            resizeEnable: true
        });
        window.AMap.plugin('AMap.Geolocation', function() {
            var geolocation = new window.AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：5s
                buttonPosition:'RB',    //定位按钮的停靠位置
                buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
    
            });
            map.addControl(geolocation);
        });
     
    }
}
