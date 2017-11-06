import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Content from './component/content/Content';

import './common/style/index.css';

import M from './component/m';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            counter: 0,
            a: 'aaaaaa',
            b: 8
        }
    }

    render(){
        let {counter, a} = this.state;

        return (
            <section hjj="k" className='box'>
                <button onClick={
                    ()=>{
                        this.counter++

                    }
                } >button</button>
                <div style={ {} }></div>
                <span>{counter}</span>
                <span>{this.counter}</span>
                <div>{a}</div>
                <Header/>
                {/* <Content/> */}
                <Footer indx={counter}/>
            </section>
        )
    }
}

ReactDOM.render(
    <M/>
    ,
    document.getElementById('root')
);
