import React, {Component} from 'react';

import './style.css';

export default class Content extends Component{
    constructor(props){
        super(props);
    }
    render(){

        let { name } = this.props;

        return (
            <div className="content">
                <div className="head">欢迎注册免费网易邮! 邮件地址可以作为网易通行证，使用其他网易旗下产品</div>
                <div className="left">
                    <form action="">
                        <dl>
                            <dt>
                                <a href="">{name}</a>
                                <a href="">注册手机号码邮箱</a>
                            </dt>
                            <dd className="one">
                                <label className="dz">*邮件地址</label>
                                <div className="sr">
                                    <input className="inp1" type="text" name="eamil" value="f"/>@
                                    <select className="sele">
                                        <option value="">163.com</option>
                                    </select>
                                    <span>6~18个字符，可使用字母 数字 下划线，需以字母开头</span>
                                </div>
                                </dd>
                            <dd className="one">
                                <label className="dz">*密码</label>
                                <div className="sr">
                                    <input className="inp2" type="password" name="eamil" value=""/>
                                    <span>6~16个字符，区分大小写</span>
                                </div>
                            </dd>
                            <dd className="one">
                                <label className="dz">*确认密码</label>
                                <div className="sr">
                                    <input className="inp2" type="password" name="eamil" value=""/>
                                    <span>再次输入密码</span>
                                </div>
                            </dd>
                            <dd className="fore">
                                <label className="yz">*验证码</label>
                                <div className="suru">
                                    <input className="inp3" type="password" name="eamil" value=""/>
                                    <span>填写图片中的自负字符</span>
                                </div>
                                <a href="">
                                    <img src={require('./img/yz.jpg')}/>
                                    看不清楚？换张图片
                                </a>
                            </dd>
                        </dl>
                        <div className="tongyi">
                            <input type="checkbox" name=""/>同意“服务条款”和“隐私相关政策”
                        </div>
                        <div className="zhuce">
                            <input className="tijiao" type="submit" name="" value=""/>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <img src={require('./img/right.jpg')}/>
                    <a href="">试试看</a>
                </div>
            </div>
        )
    }
}
