import axios from 'axios'
import qs from 'qs'

// export const IP = 'http://127.0.0.1:80'
export const IP = 'http://192.168.0.102:80'

//房产列表
export function gethouselist(){

    return axios.get(IP + "/gethouselist.php")


}

//登录接口
export function login(acc,pwd){
    return axios.post(IP+'/login.php',qs.stringify({acc,pwd}))
}

//验证码
export function checkCode(){
    return axios.get(IP+'/valitecode.php')
}



//注册
export function reg(acc,pwd){
    return axios.post(IP+'/reg.php',qs.stringify({acc,pwd}))
}