import React, { Component } from 'react';
import Li from './Li';
import Page from './page';
/*
fetch-jsonp  jsonp的工具库,可以去npm中去找

如果你使用create-react-app，要进行打包，输入npm run build(记得改路径会多一个/);

*/
import jsonp from 'fetch-jsonp';
import { BrowserRouter as Router,Route} from 'react-router-dom';
//https://api.douban.com/v2/movie/search?q={text}

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:{},
      v:'变形金刚',
      num:0
    }
  }
  componentDidMount() {
    //在组件挂在完成之后默认请求数据搜索内容为雷神3
    this.search();
  }
  /*
    在create-react-app中默认开启这个语法
    https://doc.react-china.org/docs/handling-events.html
  
    不用bind的安装 
    https://babeljs.io/docs/plugins/transform-class-properties/

    search = () => {
      alert(1);
    }

    等同于下面这个
    
    this.search = this.search.bind(this)
    search(){
      alert(1);
    }

  */
  //搜索数据请求
  search = (num=0) => {
    jsonp(`https://api.douban.com/v2/movie/search?start=${num}&q=`+this.state.v)
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({
        data:JSON.parse(JSON.stringify(data))
      })
    })
  }
  //设置输入框
  changeValue = (ev) => {
    let {value} = ev.target;
    this.setState({
      v:value
    });
  }
  changeNum = (num) => {
    this.setState({
      num
    });
  }
  //上一个
  prev = () => {
    this.search(this.state.num-1);
  }
  //下一个
  next = () => {
    let {total} = this.state.data;
    console.log(this.state.num)
    let num = (this.state.num+1 > Math.ceil(total/20)-1) ? Math.ceil(total/20)-1 : this.state.num+1;
    this.search(num);
  }
  render() {
  
    
    let {title='搜索'+this.state.v,subjects=[],total} = this.state.data;
    let Lis = subjects.map((e,i)=>{
      let obj = {
        key:i,
        title:e.title,
        original_title:e.original_title,
        year:e.year,
        src:e.images.medium        
      }
      return <Li {...obj}/>
    });

    //页码
    let page = [];
    for(var i=0;i<Math.ceil(total/20);i++){
      page.push(<Page 
          key={i} 
          num={i+1} 
          index={i}
          search={this.search}
          changeNum={this.changeNum}
        />);
    };

    let onOff = Math.ceil(total/20) > 1?'inline-block':'none';

    return (
      <div>
        <input 
          value={this.state.v} 
          onChange = {this.changeValue}
        />
        <input 
          type="button" 
          defaultValue="搜索"
          onClick={this.search}
        />
        <h3>
          {title},有{total}条
        </h3>
        <ul>
          {Lis}
        </ul> 
        <div>
            <a 
              href="javascript:;" 
              style={{display:onOff}}
              onClick={this.prev}
            >上一个</a>
            {
              page
            }
            <a 
            href="javascript:;"
            style={{display:onOff}}
            onClick={this.next}
            >下一个</a>
        </div> 
      </div>
    )
  }
}


export default App;
