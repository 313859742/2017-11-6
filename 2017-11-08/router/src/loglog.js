import {createStore} from 'redux';
let async=document.querySelector(".async");


//声明reducer,是一个函数，有两个参数，一个是action一个是state,作用：返回整个应用的 state,返回决定了state是什么样子的
//action : 动作的意思，他是一个对象，必须有一个 tape 属性
function logDate(state , action){
    let { type } = action;
    switch (type){
        case 'INCREMENT': ++ state;
        break;
        default:
    }
    return state ;
}
//创建store，用来维护状态
let store = createStore(logDate,0);
store.dispatch( { type:'INCREMENT'} );
//方法：getState
console.log(store.getState() ,'fd');
