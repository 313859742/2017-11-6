import React,{Component} from 'react';


export default class extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let {changeView, view, leftCount, clearCompleted, showClearButton} = this.props;

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{leftCount}</strong> items left
                </span>
                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={ view==='all'? 'selected': '' }
                            onClick={()=>{
                                changeView('all')
                            }}
                        >
                            All
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/active"
                            className={ view==='active'? 'selected': '' }
                            onClick={()=>{
                                changeView('active')
                            }}
                        >
                            Active
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/completed"
                            className={ view==='completed'? 'selected': '' }
                            onClick={()=>{
                                changeView('completed')
                            }}
                        >
                            Completed
                        </a>
                    </li>
                </ul>
                {/* 只要有一个被完成, 就显示 */}
                {
                    showClearButton ? (
                        <button
                            className="clear-completed"
                            onClick={clearCompleted}
                        >
                            Clear completed
                        </button>
                    ) : null
                }

            </footer>
        )
    }
}
