import React,{Component} from 'react';
// import yz from '../common/img/yz.jpg';//如果图片多次使用 的情况下，给一个变量，可以多次使用，如果只使用一次，直接在链接里面写表达式就行
// const yzCopy=require('../common/img/right.jpg')
import './content.css';
export default class Content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="content">
                <div className="head">欢迎注册免费网易邮! 邮件地址可以作为网易通行证，使用其他网易旗下产品</div>
                <div className="left">
                    <form action="">
                        <dl>
                            <dt>
                                <a href="">注册字母邮箱</a>
                                <a href="">注册手机号码邮箱</a>
                            </dt>
                            <dd className="one">
                                <label className="dz">*邮件地址</label>
                                <div className="sr">
                                    <input className="inp1" type="text" name="eamil" placeholder="建议用手机号码注册"/>@
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
                            <input className="tijiao" type="submit" name="" value="立即注册"/>
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