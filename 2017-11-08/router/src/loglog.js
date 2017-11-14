//redux工作原理：首先得到一个store,如果想拿到一个state,使用store.getState(),
// 如果想改变数据，发起一个action,store.dispatch(actoon)
//发起action之后，reducer会计算出应用的下一个代码
import {createStore} from 'redux';
//需求：实现打印应用：点击一个按钮打印一个数字，每次点击数组增加
//思路：定义出应用的数据结构，（状态的结构） number
        //创建store,定义reducer,action
        //发布动作，让数据改变，
let async=document.querySelector(".async");
//声明reducer,是一个函数，有两个参数，一个是action一个是state,作用：返回整个应用的 state,返回决定了state是什么样子的
//action : 动作的意思，他是一个对象，必须有一个 tape 属性
function logData(state , action){
    let { type } = action;
    switch (type){
        case 'INCREMENT':
            return  ++ state ;
            break;
        default:  return state;
    }
}
//创建store，用来维护状态
let store = createStore( logData , 0 );
async.onclick = () => {
    //只有发布一个action才能给改变状态
    store.dispatch( { type : 'INCREMENT' } ); //dispatch接口‘用来发布action，subscribe,监听action的发布
};
//注册一个监听器，在action发起之后，reducer计算完成之后执行
store.subscribe( () =>{
    console.log( store.getState() );
});
//方法：getState
// console.log(store.getState() ,'fd'); // 打印
