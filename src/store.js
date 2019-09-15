import { createStore,combineReducers } from "redux";


//基本使用
// //创建仓库
// const store = createStore(function(state="张三",action){

//     switch(action.type){
//         case "changeName":return action.name;
//         default : return state
//     }

// })

// //定义通知

// let a={
//     type:'changeName',
//     name:'李四'
// }

// //发出通知
// store.dispatch(a)

// //获取仓库值
// console.log(store.getState());


// //暴露出去
// export default store;



//企业级别多状态运用
//定义多个reducers

//测试
function test(state='test',action){

    switch(action.type){
        default:return state
    }

}

//历史记录
function historyArr(state=[],action){

    switch(action.type){
        //return [action.obj,...state.filter(obj=>obj.name != action.obj.name)]
        //过滤数组中重复的元素
        case "addHistory":return [action.obj,...state.filter(obj=>obj.name != action.obj.name)]
        default : return state
    }

}

export default createStore(combineReducers({
    test,
    historyArr

}))



