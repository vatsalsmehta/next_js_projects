import * as React from 'react';
import TabComponent2 from '../../components/TabComponent2';
import TabComponent from '../../components/TabComponent';

const DashboardIndex=()=>{

    return(
        <div>
        {/* Both have Similar approach of conditional Rendering but a slight difference in swith condition and state */}
            <TabComponent/>
            <TabComponent2/>
        </div>
    )
}

export default DashboardIndex;