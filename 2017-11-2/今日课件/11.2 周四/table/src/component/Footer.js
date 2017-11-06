import React, {Component} from 'react';

export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer>
                <a className="" href="">关于网易免费邮箱</a>
				<a className="" href="">邮箱官方微博</a>
				<a className="" href="">客户隐私</a>
				<a className="" href="">隐私政策</a>
				<a className="" href="">网易公司版权所有</a>
				<a className="" href="">?</a>
				<a className="" href="">1997-2013</a>
            </footer>
        )
    }
}
