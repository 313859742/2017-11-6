import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
class Navs extends Component {
    render(){
        return (
            <div>
            
            <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >百度新闻</NavBar>
            
            </div>
        )
    }
}

export default Navs;