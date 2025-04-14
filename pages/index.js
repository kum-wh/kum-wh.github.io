import HomePage from '../components/home.jsx';
import About from '../components/about.jsx';
import Projects from '../components/project.jsx';
import GooeyNav from '../components/nav.jsx';
import Particles from '../components/background/particles.jsx';

export default function Home() {

  // update with your own items
  const items = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#aboutmepage" },
    { label: "Projects", href: "#projectpage" }
  ];

  
  return (
    <>
      <div style={{marginTop:'30px', marginLeft:'30px', position: 'fixed', zIndex:4 }}>
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={10}
          minDistance={10}
          maxDistance={30}
          maxRotate={50}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>

      <div style={{ width: '98%', height: '100%', position: 'fixed', zIndex:0 }}>
          <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={600}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
          />
      </div>
        
      <HomePage/>
      <About/>
      <Projects/>
    </>
  );
}
