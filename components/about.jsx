import TrueFocus from './texts/trueFocus.jsx';
import GradientText from './texts/gradient.jsx';
import SpotlightCard from './ui/card.jsx';
import Image from 'next/image.js';

export default function About() {

    return (
        <div id='aboutmepage' style={{ width: '98%', height: '100%', position:'relative', zIndex:1}}>
            <div style={{ paddingTop:'100px'}}>
                <div style={{ color:'white'}}>
                    <TrueFocus 
                        sentence="Hello World!"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="#00d8ff"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>

                <h1 style={{fontSize:'30px', color:'#D3D3D3', textAlign:'center', marginTop:'50px'}}> I'm Wing Ho.</h1>
                <div style={{marginTop:'15px', marginLeft:'auto', marginRight:'auto', fontSize:'20px', textAlign:'center'}}>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={true}
                        className="custom-class"
                        >
                        &#160; &#160; A recent graduate in Computer Engineering &#160; &#160;<br/> 
                        Interested in Software Development and <br/>Artificial Intelligence.
                    </GradientText>
                </div>

                <div style={{marginTop:'15px', marginLeft:'auto', marginRight:'auto', width:'40vw', minWidth:'360px', fontSize:'20px', color:'#D3D3D3'}}>
                    <SpotlightCard className="" spotlightColor="rgba(0, 229, 255, 0.2)">
                        Professional Certifications: AWS Cloud Practitioner <br/>
                        <br/>
                        Coding Languages: Python, C++, Javascript, Golang<br/>
                        Frontend FrameWorks: React, NextJs, HTML, CSS<br/>
                        Backend FrameWorks: Flask, Django, NodeJS<br/>
                        DevOPs Tools: Docker, Kubernetes, Grafana K6<br/>
                        <div style={{display:'flex', marginTop:'5px'}}>
                        <a href='https://github.com/kum-wh' style={{width:'40px', marginRight:'30px'}}><Image src={'/github.png'} width={40} height={40} alt='github icon'/></a>
                        <a href='https://www.linkedin.com/in/kum-wing-ho/' style={{width:'40px'}}><Image src={'/linkedin.png'} width={40} height={40} alt='linkedin icon'/></a>
                        </div>  
                    </SpotlightCard>             
                </div>
            </div>
        </div>
    );
}