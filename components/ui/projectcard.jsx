import Image from "next/image";
import SpotlightCard from './card.jsx';
import PixelTransition from './pixel.jsx';
import Folder from './folder.jsx';
import ShinyText from "../texts/shinyText.jsx";

export default function ProjectCard({title, category, github}) {

    return (
        <div style={{}}>
            <SpotlightCard className="" spotlightColor="rgba(0, 229, 255, 0.2)">
                <PixelTransition
                    firstContent={
                        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111"}}>
                            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>{title}</p>
                        </div>
                       }
                    secondContent={
                        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111"}}>
                            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff", textAlign:'center'}}> {category}</p>
                        </div>
                    }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className=""
                />
                <div style={{display:'flex'}}>
                    <div style={{paddingTop:'17px'}}>
                        <a href={github}><Image src={'/github.png'} width={40} height={40} alt='github icon'/></a>
                    </div>
                    <Folder size={0.4} color="#00d8ff" className="" />
                    <div style={{paddingTop:'22px', fontSize:'20px'}}>
                        <ShinyText text="&#x2190; Click to Open" disabled={false} speed={3} className='' />
                    </div>
                </div>
            </SpotlightCard>            
        </div>
    );
}