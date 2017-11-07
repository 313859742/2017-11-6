import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Item from './components/Item';
import Footer from './components/Footer';

import './common/style/index.css';
import './common/style/base.css';

// import todosData from './common/data/todosData';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputVal: '',
            todosData: [],
            view: 'all',

        };

        this.inputChange = this.inputChange.bind(this);
        this.inputOnEnter = this.inputOnEnter.bind(this);
        this.todoOnChange = this.todoOnChange.bind(this);
        this.deleteToto = this.deleteToto.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.changeView = this.changeView.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }
    inputChange(ev){

        let {value} = ev.target;

        this.setState({
            inputVal: ev.target.value
        });
    }

    // 回车, 添加一个 todo
    inputOnEnter(ev){
        if(ev.keyCode!==13) return;

        let {value} = ev.target;
        let {todosData} = this.state;

        if( !value.trim() )return;

        this.setState({
            todosData: [
                ...todosData,
                {
                    id: Math.random(),
                    content: value,
                    isActive: true
                }
            ],
            inputVal: ''
        });
    }

    // 改变一个todo 是否被完成
    todoOnChange(id){
        let {todosData} = this.state;

        let newTodos = todosData.map( (todo, indx)=>{
            if(todo.id === id){
                todo.isActive = !todo.isActive;
            }
            return todo;
        } );

        this.setState({
            todosData: newTodos
        })

    }

    // 删除一个 todo
    deleteToto(id){
        let {todosData} = this.state;
        // filter 回调函数返回 ture, 元素会被保留
        let newTodos = todosData.filter( (todo, indx)=>{
            return todo.id === id ? false : true
        } );

        this.setState({
            todosData: newTodos
        })
    }

    // 全选
    toggleAll(ev){
        let {checked} = ev.target;
        let {todosData} = this.state;

        this.setState({
            todosData: todosData.map(elt =>{
                elt.isActive = !checked;
                return elt;
            })
        })
    }

    // 切换显示不同状态的 todo
    changeView(view){
        this.setState({
            view
        })
    }

    // 清除已完成
    clearCompleted(){
        let {todosData} = this.state;
        // filter 回调函数返回 ture, 元素会被保留
        let newTodos = todosData.filter( (todo, indx)=>{
            return todo.isActive ? true : false
        } );

        this.setState({
            todosData: newTodos
        })
    }

    render(){
        let {inputVal, todosData, view} = this.state;
        let {
            inputChange,
            inputOnEnter,
            todoOnChange,
            deleteToto,
            toggleAll,
            changeView,
            clearCompleted
        } = this;

        // 所有的长度
        let todosLength = todosData.length;

        let leftCount =todosLength;

        // 过滤什么 todo 会被显示, 切换不同的视图
        let filteredTodosData = todosData.filter( (elt, indx, arr)=>{
            let {id, content, isActive} = elt;

            let shouldStay = false;

            if(!isActive) leftCount--;

            switch (view) {
                case 'active':
                    if(isActive===true){
                        shouldStay = true;
                    }
                    break;
                case 'completed':
                    if(isActive===false){
                        shouldStay = true;
                    }
                    break;
                default:
                    shouldStay = true;
            }

            return shouldStay;
        } );

        let todosComponent = filteredTodosData.map( ({id,isActive, content})=> {
            return  (
                <Item
                    key={id}
                    { ...{
                        id,
                        content,
                        isActive,
                        todoOnChange,
                        deleteToto
                    } }
                />
            );
        } )

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus={true}
                        value={inputVal}
                        onChange={inputChange}
                        onKeyDown={inputOnEnter}
                    />
                </header>

                {todosLength>0 ? (
                    <section className="main">
                        <input
                            className="toggle-all"
                            type="checkbox"
                            onChange={toggleAll}
                            checked={ leftCount===0 }
                        />
                        <ul className="todo-list">
                            {todosComponent}
                        </ul>
                    </section>
                ) : null}

                { todosLength>0 ? (
                    <Footer
                        {...{
                            changeView,
                            view,
                            leftCount,
                            clearCompleted: clearCompleted,
                            showClearButton: todosLength > leftCount
                        }}
                    />
                ) : null}

            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
