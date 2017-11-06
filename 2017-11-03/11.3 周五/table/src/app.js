import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Content from './component/content/Content';

import './common/style/index.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            counter: 0,
            onOff : true
        }
        this.timer=null;
        this.move=this.move.bind(this);
    }
    move(){
        let {counter,onOff} = this.state;
        if(onOff){
            this.timer = setInterval(()=>{
                this.setState({counter:++counter});
            },);
        }else{
            clearInterval(this.timer);
        };
        this.setState({onOff:!onOff})
    }
    render(){
        let { counter } = this.state;
        return (
            <div>
                <button onClick={ this.move }>按钮</button>
                <div  className="box"
                    style={{
    ;                    width : '100px',
                        height : '100px',
                        background : 'red',
                        marginLeft : counter
                     }}
                >
                </div>
            </div>

        )
    }
}

ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
);
