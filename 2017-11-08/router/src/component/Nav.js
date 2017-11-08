import {Link} from 'react-router-dom';

export default class extends Component{

    render(){
        let {history} = this.props;
        return (
            <ul>
                <li><span
                    onClick={()=>{
                        history.push('/')
                    }}
                    > 首页</span></li>

                <li><Link to="/teleplay"> 剧集</Link></li>

                <li><Link to="/movie"> 电影</Link></li>
            </ul>
        )
    }
}
