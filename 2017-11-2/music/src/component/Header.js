import React,{Component} from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className="head clearfix" >
            <h3 >
            <a href="">最新推荐 </a>
            </h3>
            <div className="headitem">
            <a href="" className="headitem1"><img src="img/play.jpg"/></a>
            <a href="" className="headitem2"><img src="img/addto.jpg"/></a>
            </div>
            <div className="region1">
            <a href="" className="region"><strong>华语</strong></a>
        <span><a href=""className="region om1">日韩</a></span>
        <span><a href="" className=" region om">欧美</a></span>
        </div>
        </header>
        )
    }
};
