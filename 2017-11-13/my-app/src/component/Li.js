import React, { Component } from 'react';
class Li extends Component{
    
    render(){
        let {src,title,original_title,year} = this.props;
        // console.log(this.props)
        return (
            <li>
                <img src={src}/>
                <p>
                    {title + original_title + `(${year})`}
                </p>
            </li>
        )
    }
}
export default Li;