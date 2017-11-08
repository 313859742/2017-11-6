
export default class extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props, 'movie');
        return (
            <div>电影视图的内容</div>
        )
    }
}
