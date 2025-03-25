import BlurText from "./blurtext.jsx";
import SplitText from "./splittext.jsx";

export default function Mainhome() {
    return ( 
      <>
        <div style={{position: 'relative', zIndex:1, marginTop:"-30vh", marginLeft: "20px"}}>
          <BlurText
            text="Welcome to my Project Showcase Site"
            delay={400}
            animateBy="words"
            direction="top"
            className="mb-8"
          />
        </div>
        <div style={{position: 'relative', zIndex:1, marginTop:"-65vh"}}>
          <SplitText
            text="Hello, World!"
            className="font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
          />
        </div>
      </>
    );
  }