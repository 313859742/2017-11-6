import {Link} from 'react-router-dom';
export default class  extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let { history } = this.props;
        return(
            <ul>
                <li> <Link to = "/"> 首页</Link> </li>
                <li> <Link to = "/teleplay"> 剧集 </Link>  </li>
                <li> <Link to = "/movie"> 电影</Link> </li>
            </ul>
        )
    }
};