import {createStore,applyMiddleware} from 'redux'; //接口引入 applyMiddleware激活中间键
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './container/home/home';
import Moveie from './container/movie/Moveie';
import Teleplay from './container/teleplay/Teleplay';
import Nav from './conponent/Nav';
import {Provider,connect} from 'react-redux'
import createrStore from './redx/configredux';
const store = createrStore();
class  Counter  extends Component{
    constructor(props){
        super(props)
    }
    render() {
      console.log(this.props);
        return (
            <div>
                <button className="sub">-</button>
                <input type="text" className="input" />
                <button className="jia">+</button>
                <button type="button" name= "button" className="odd"> odd</button>
                <button type="button" name= "button" className="async"> async</button>
            </div>
        )
    }
}
//connect是高级插件，用来增强
Counter  = connect(   state  => ( { a:state .b } ))(Counter);

ReactDOM.render(
    <Provider store={store}>
        <Counter  />
    </Provider>,
    document.getElementById('root')
);













//
// import {createStore,applyMiddleware} from 'redux'; //接口引入 applyMiddleware激活中间键
// import thunk from 'redux-thunk';
// let sub=document.querySelector(".sub"),
//     input=document.querySelector(".input"),
//     jie=document.querySelector(".jia"),
//     odd=document.querySelector(".odd"),
//     async=document.querySelector(".async");
// //中间键，可以更改请求的对象，（一件事情开始到结束中间的）redux-thunk
//
// //定义reducer,state的值是初始值
// function reducer( state=0, action) {
//     let {type} = action;
//     switch (type){
//         case 'INCREMENT':
//             return  ++ state;
//             break;
//         case  'DECREMENT' :
//             return --state;
//             break;
//         default :return state;
//     }
// };
//     //定义action creators 专门用来创建action,必须是函数
//     function increment() {
//     return function (dispatch,getState) {
//         dispatch({type : 'INCREMENT'});
//     };
// }
//     function decrement() {
//     return {type : 'DECREMENT'}
// }
//     function oddIncrement() {
//     return function(dispatch,getState){
//         let value = store.getState();
//         if(value % 2 !== 0){
//             dispatch(increment());
//         }
//     }
// }
//     function asyncIncrement() {
//     return function (dispatch) {
//         setTimeout( ()=>{
//             dispatch( increment());
//         },1000);
//     }
// }
//
//     let store = createStore( reducer ,applyMiddleware(thunk)); //增强 激活中间键
//     sub.onclick=()=>{ //减减事件
//     store.dispatch( decrement() );
// };
//     jie.onclick=()=>{ //加加事件
//     store.dispatch( increment() );
// };
//     odd.onclick=()=>{
//     store.dispatch(oddIncrement());
// };
//     async.onclick=()=>{
//    store.dispatch(asyncIncrement());
// };
//     input.value=store.getState(); //初始化数值
//     store.subscribe( () =>{
//     input.value=store.getState();//数据是什么样，界面就是什么样
// });
