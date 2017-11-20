import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
class Tab extends Component {
    renderContent = (tab) =>{
        return  (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <p>Content of {tab.title}</p>
        </div>
      );
    }
   
    render(){
        const tabs = [
            { title: '贴吧' },
            { title: '图片' },
            { title: '网址' },
            { title: '4th Tab' },
            { title: '5th Tab' },
            { title: '6th Tab' },
            { title: '7th Tab' },
            { title: '8th Tab' },
            { title: '9th Tab' },
          ];
        return (
            <div>
                <Tabs tabs={tabs}>
                    {this.renderContent}
                </Tabs>
            </div>
        )
    }
}

export default Tab;