import React, { useState } from 'react';
import TabLabel from './TabLabel';

const Tabs = props => {
    const [activeTab, setActiveTab] = useState({label:null, content: ""});

    const tabLabels = props.tabs.map( item => <TabLabel tab = { item } onClickTab = { setActiveTab } active = { item.label == activeTab.label } /> );

    const contentStyle = {
        width: "415px",
        border: "solid 1px black",
        padding: "20px"
    }
    return (
        <div>
            <div className='row'>
                { tabLabels }
            </div>
            <div className='row mt-3' style= { contentStyle }>
                { activeTab.content }
            </div>
        </div>
    )
}

export default Tabs;