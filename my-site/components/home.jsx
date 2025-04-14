import Orb from './background/orb.jsx';
import RotatingText from './texts/rotatingText.jsx';
import BlurText from './texts/blurText.jsx';
import ShinyText from './texts/shinyText.jsx';

export default function HomePage() {
    
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    
    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex:2 }}>
                <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>
            
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', width:'100%', position:'absolute', zIndex:1 }}>
                <div>
                    <BlurText
                    text="Welcome to My Project Portfolio Site"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-5xl mb-8 text-white"
                    />
                    <div style={{ marginLeft:'auto', marginRight:'auto', width:'300px', height:'100%', fontSize:'30px'}}>
                    <div style={{color:'white', fontSize:'32px'}}>
                        Projects:
                    </div>
                    <RotatingText
                        texts={['Full Stack App', 'Artificial Intelligence', 'Game Development', 'Computer Graphics', 'Embedded Systems']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    />
                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'flex-end', height:'98%', width:'100%', fontSize:'28px'}}>
                <ShinyText text="Scroll Down for more" disabled={false} speed={2}/>
            </div>
        </>
    );
}