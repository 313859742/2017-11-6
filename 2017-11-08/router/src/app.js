import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './container/home/home';
import Moveie from './container/movie/Moveie';
import Teleplay from './container/teleplay/Teleplay';
import Nav from './conponent/Nav';
class  App extends Component{
    render() {
       let {history , location , match } = this.props;
        return (
            <div>
               <Nav  history = { history}/>
                <Route exact path = "/" component={ Home}/>
                <Route  path = "/teleplay" component={ Teleplay}/>
                <Route  path = "/movie" component={ Moveie}/>
            </div>
        )
    }
};
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

