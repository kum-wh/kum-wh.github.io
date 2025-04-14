import AnimatedList from './list.jsx';
import { useState } from 'react';

export default function Projects() {

    const items = ['MiniUrl', 'PeerCode', 'BioFest'];
    const [current, setCurrent] = useState("miniurl");

    return (
        <div id='projectpage' style={{ width: '98%', height: '100vh', position:'relative', zIndex:1}}>
            <div style={{ paddingTop:'100px'}}>
                <div style={{fontSize:'25px', position:'absolute', zIndex:2}}>
                    <AnimatedList
                        items={items}
                        onItemSelect={(item, index) => setCurrent(item)}
                        showGradients={false}
                        enableArrowNavigation={false}
                        displayScrollbar={false}
                    />
                </div>

                <div style={{backgroundColor:'white', width:'80%', height:'80%', marginLeft:'200px', position:'absolute', zIndex:1}}>
                {current}
                </div>
            </div>
        </div>
    );
}