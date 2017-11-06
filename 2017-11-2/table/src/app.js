// 引入
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/Header';
import Content from './component/content/Content';
import Footer from './component/footer/Footer';

import './common/style/index.css';

class App extends Component{
	constructor(props){
		super(props);
	}
    render(){//返回内容
        return(
			<section className="box">
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</section>
        )
    }
}
ReactDOM.render(
	<App></App>,
	document.getElementById('root')
)
