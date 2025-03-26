import BlurText from "./blurtext.jsx";
import SplitText from "./splittext.jsx";

export default function Mainhome() {
    return ( 
      <>
        <div>
          <SplitText
            text="Hello World!"
            className="font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
          />
          <SplitText
            text="Welcome to My Site"
            className="font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
          />
        </div>
        <div style={{marginTop:"200px", marginLeft:"20px"}}>
          <BlurText
            text="My Projects:"
            delay={500}
            animateBy="words"
            direction="top"
            className="mb-8"
          />
        </div>
        <div style={{marginTop:"20px", marginLeft:"20px"}}>
          <BlurText
            text="Full Stack Applications"
            delay={500}
            animateBy="words"
            direction="top"
            className="mb-8"
          />
        </div>
        <div style={{marginTop:"20px", marginLeft:"20px"}}>
          <BlurText
            text="Game Development"
            delay={500}
            animateBy="words"
            direction="top"
            className="mb-8"
          />
        </div>
      </>
    );
  }