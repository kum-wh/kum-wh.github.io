import AnimatedList from './list.jsx';
import { useState } from 'react';

export default function Projects() {

    const items = ['MiniUrl', 'PeerCode', 'ChatApp'];
    const [current, setCurrent] = useState("miniurl");

    return (
        <div id='projectpage' style={{ width: '100%', height: '100%', position:'relative', zIndex:1}}>
            <div style={{ paddingTop:'100px'}}>
                <div style={{fontSize:'30px', position:'absolute', zIndex:2}}>
                    <AnimatedList
                        items={items}
                        onItemSelect={(item, index) => setCurrent(item)}
                        showGradients={false}
                        enableArrowNavigation={false}
                        displayScrollbar={false}
                    />
                </div>

                <div style={{backgroundColor:'white', width:'200px', height:'200px', marginLeft:'300px', position:'absolute', zIndex:1}}>
                </div>
            </div>
        </div>
    );
}