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
    strict:
      Router中的路径写成/one/,然后手动去输入/one，
      如果不加strict那么是能够显示/one，如果加了那么只认

      1.
        /one/
      2.
        /one/two


    区别：

      要把一组路径当做整体来看就用  exact

      不直接使用/xxx路径的时候就   strict （/xxx/yyy）
      
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>呵呵1</h1>
        <Home />
        <hr />
        <Route path="/" component={Home2}/>
        <Route path="/One/" strict component={One}/>
        {/* <Route path="/one/two" component={Two}/> */}
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics}/>
      </div>
    );
  }
}

export default App;
