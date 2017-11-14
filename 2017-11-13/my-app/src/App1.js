import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './router/routers';

class Home2 extends Component {
  render() {
    return (
      <div>家</div>
    )
  }
}
class About extends Component {
  render() {
    return (
      <div>关于</div>
    )
  }
}
class Topics extends Component {
  render() {
    return (
      <div>主题</div>
    )
  }
}
class One extends Component {
  render() {
    return (
      <div>one</div>
    )
  }
}
class Two extends Component {
  render() {
    return (
      <div>ttt</div>
    )
  }
}
/*
    exact:
      Router中的路径写成/one,然后手动去输入/one/two（前提条件是two不存在的）
      如果加了 exact，那么会把/one/two当做**一个整体**，所以什么都没有。
      
      如果不加/one/two，没有/two还会去找/one
      
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>呵呵1</h1>
        <Home />
        <hr />
        <Route path="/" component={Home2}/>
        <Route path="/One" exact component={One}/>
        <Route path="/one/two" component={Two}/>
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics}/>
      </div>
    );
  }
}

export default App;
