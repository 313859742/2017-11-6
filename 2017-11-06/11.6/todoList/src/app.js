import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './common/style/index.css';
import './common/style/base.css';

class App extends Component{
    render(){
        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus={true}
                    />
                </header>

                <section className="main">
                    <input
                        className="toggle-all"
                        type="checkbox"

                    />
                    <ul className="todo-list">
                        <li>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                />
                                <label >
                                    React
                                </label>
                                <button className="destroy"/>
                            </div>
                            <input
                                ref="editField"
                                className="edit"
                            />
                        </li>
                        <li>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                />
                                <label >
                                    Reacthfjkds
                                </label>
                                <button className="destroy"/>
                            </div>
                            <input
                                ref="editField"
                                className="edit"
                            />
                        </li>
                    </ul>
                </section>

                <footer className="footer">
					<span className="todo-count">
						<strong>8</strong> left
					</span>
					<ul className="filters">
						<li>
                            <a
								href="#/"
                            >
                                All
							</a>
						</li>
						{' '}
						<li>
                            <a
								href="#/active"
                            >
                                Active
							</a>
						</li>
						{' '}
						<li>
                            <a
								href="#/completed"
                            >
                                Completed
							</a>
						</li>
					</ul>
                    <button
						className="clear-completed"
                    >
						Clear completed
					</button>
				</footer>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
