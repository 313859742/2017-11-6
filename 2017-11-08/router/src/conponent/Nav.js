import {Link,NavLink,withRouter} from 'react-router-dom';
import './Nav.css';


 class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            from: props.location.pathname , //记住当前所点击的页面
            background:""
        }
        this.fromChange = this.fromChange.bind(this);
        this.move = this.move.bind(this);
        this.up = this.up.bind(this);


    }
    // componentWillReceiveProps(nP){
    //     this.setState({ from : nP.location.pathname })
    // }

    //点击的时候更新到所跳转的页面
    fromChange(from){
        console.log(this.props.history.location.pathname);//打印上次点击的时候地址
        this.setState({ from })
    }
    move(){
      this.setState({
              background: "red"
      }

      )

    }
  up(){
      this.setState({
              background: "yellow"
      }

        )
     }
    render(){
        let { history,location } = this.props;
        let{fromChange,move,up} = this;
        let { from } = this.state;
        return(
            <div className="header">
                <ul className="head_cav">
                    <li> <NavLink
                        style={{
                            background:this.state.background
                        }}
                        to="/" exact
                        onClick={ ()=>{
                        fromChange('/');
                        history.push('/',{from})
                    }}
                        onMouseOver={ move}
                                  onMouseOut={up}
                    > 首页</NavLink> </li>
                    <li> <NavLink
                        style={{
                        background:this.state.background
                    }}
                                   to = {{ pathname : '/teleplay',
                            search : '?a=4&b=8&h=89',
                            hash:'#ddd',
                            state:{ from } }
                    }
                        //点击的时候记录当前的页面
                        onClick={()=>fromChange('/teleplay')}
                                  onMouseOver ={ move }
                                  onMouseOut={up}
                    > 产品 </NavLink>  </li>
                    <li> <NavLink
                        style={{
                            background:this.state.background
                        }}
                        to = {
                    { pathname : '/movie',
                        state:{ from } }
                }
                                  onClick={()=>fromChange('/movie')}
                        onMouseOver={ move }
                                  onMouseOut={up}
                    > 保障</NavLink> </li>
                </ul>
            </div>
        )
    }
};
export default withRouter(Nav);//利用withRouter导出Nav组件，里面跑包含props的三个属性（history, location, match）