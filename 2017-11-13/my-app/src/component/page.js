import React, { Component } from 'react';

class Page extends Component{
    click = (ev) => {
        console.log(this.props.index)
        this.props.search(this.props.index);
        this.props.changeNum(this.props.index);
    }
    render(){
        let {src,title,original_title,year} = this.props;
        
        return (
            <a 
                href="javascript:;"
                onClick={this.click}
            >
                [{
                    this.props.num
                }]
            </a>
        )
    }
}
export default Page;