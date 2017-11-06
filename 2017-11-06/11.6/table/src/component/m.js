import React,{Component} from 'react';

export default class extends Component{
    constructor(props){
        super(props);
        //
        this.state = {
            onOff: true,
            marginLeft: 0,
            a: 0,
            b: 0,
            c: 0,
            img: null,
            m: {
                a: 67,
                b: 89
            }
        };

        this.timer = null;
        // 绑定好 moveBox 的 this
        this.moveBox = this.moveBox.bind(this);

    }

    moveBox(){
        let {timer} = this;
        let {onOff} = this.state;
        // marginLeft : 0
        // if(onOff){
        //     clearInterval(timer)
        //     this.timer = setInterval( ()=>{
        //         // 每一次回调函数执行, 都从 this.state里面取出新的 marginLeft
        //         let {marginLeft} = this.state;
        //         this.setState({
        //                 marginLeft: marginLeft + 10
        //         });
        //
        //     }, 1000)
        // }else{
        //     clearInterval(timer);
        // };

        let av1 = {
            ...this.state.m,
            a: 100
        }

        this.setState({
            m: av1
        });

        this.setState({
            m: {
                ...av1,
                b: 200
            }
        });


        // begin state 和合并更新, 并且 state 是异步更新的
        // this.setState( (state)=>{
        //     return {
        //         m:{
        //             a: 100,
        //             b: state.m.b
        //         }
        //     }
        // } );
        //
        // this.setState( (state)=>{
        //     return {
        //         m:{
        //             a: state.m.a,
        //             b: 200
        //         }
        //     }
        // } );


        // end state 异步更新

        // begin 下面这两次 setState 会同步更新, 视图会马上更新, render 会马上执行
        // setTimeout( ()=>{
        //     this.setState({
        //         m: {
        //             a: 100,
        //             b: this.state.m.b
        //
        //         }
        //     });
        //
        //     this.setState({
        //         m: {
        //             a: this.state.m.a,
        //             b:200
        //         }
        //     });
        // } )

    }

    render(){
        // console.log(this.state.marginLeft);
        let {marginLeft, onOff, a, b, c, img, m} = this.state;
        let { moveBox } = this;
        console.log(this.state, 'ren');
        // 1. onOff=true, 点击之后: onOff=false
        return (
            <div>
                <button
                    onClick={ this.moveBox }
                >button</button>
                {img? <img src={img} alt=""/> : null}
                <div>
                    <div>{m.a}</div>
                    <div>{m.b}</div>
                </div>
                <div
                    className="littleBox"
                    style={{
                        width: '100px',
                        height: 100,
                        background: 'red',
                        marginLeft: marginLeft
                    }}
                >
                </div>
            </div>
        )
    }
}
