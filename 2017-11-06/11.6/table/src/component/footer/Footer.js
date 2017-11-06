import React, {Component} from 'react';

import './style.css';

export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let {indx} = this.props;
        // console.log(children, indx);
        return (
            <footer>
                <div>当前是第{indx}个footer</div>
                <a className="" href="">{}</a>
				<a className="" href="">{}</a>
				<a className="" href="">客户隐私</a>
				<a className="" href="">隐私政策</a>
				<a className="" href="">网易公司版权所有</a>

				<a className="" href="">?</a>
				<a className="" href="">1997-2013</a>
            </footer>
        )
    }
}
