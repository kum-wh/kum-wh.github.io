import TiltedCard from './card.jsx';
import Magnet from './magnet.jsx'

export default function MainGame() {
    return (
        <>
            <div style={{paddingTop:"100px", paddingLeft:"50px", position:"relative", zIndex: 1, display:"flex"}}>
                <TiltedCard
                    imageSrc="/BIOFEST.jpg"
                    altText="Game Image"
                    captionText=""
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={30}
                    scaleOnHover={1.3}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                    overlayContent={<p></p>}
                />
                <div style={{marginLeft:"20px"}}>
                    <div style={{marginBottom:"20px"}}>
                        <h1 style={{fontSize:"40px"}}>Game Development Project</h1>
                        <h2 style={{fontSize:"35px"}}>BioFest <br/><br/> Bulit With:</h2>
                        <div style={{width:"80px", height:"80px", backgroundColor:"white", borderRadius:"50px"}}>
                            <img style={{width:"50px", height:"50px", marginLeft:"15px", marginTop:"15px"}} src="./unity.png"></img>
                        </div>
                    </div>
                    <Magnet padding={60} disabled={false} magnetStrength={10}>
                        <button style={{width:"150px", height:"55px", borderRadius:"40px", fontSize:"23px", backgroundColor:"orange"}}>
                            <a href="/WebBuild/index.html" target="_blank">Play Now</a>
                        </button>
                    </Magnet>
                </div>
            </div>
        </>
    );
  }