import Threads from './thread.jsx';
import Aurora from './aurora.jsx';
import Iridescence from './iridescence.jsx';
import MainHome from './homepage.jsx';
import MainGame from './gamepage.jsx';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: 'black', zIndex: 0}}>
        <Threads
          amplitude={1.5}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>
      {/* <MainHome/> */}
      <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: 'black', marginTop:"70vh"}}>
        <Aurora
          colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div style={{ width: '100%', height: '100vh', position: 'relative', zIndex: 0}}>
          <Iridescence
            color={[0, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.5}
          />
      </div>
      <MainGame/>
    </div>
  );
}
