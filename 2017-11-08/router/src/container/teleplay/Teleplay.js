import "./Teleplay.css";
export default class  App extends Component{
    constructor(props){
        super(props)
    }
    divClick(){
        console.log(777);
    }
    render(){
        let {location} = this.props;
        let {from} = location.state || '';
        let {divClick} = this;
        return(
            <div>
                剧集的视图内容
                <div onClick={divClick}>哪里过来的：{from}</div>
                {/*<ul>*/}
                    {/*<li> 云计算 </li>*/}
                    {/*<li> 网站服务 </li>*/}
                    {/*<li> IDC服务 </li>*/}
                    {/*<li> 安全与管理 </li>*/}
                {/*</ul>*/}
            </div>
        )

    }
};