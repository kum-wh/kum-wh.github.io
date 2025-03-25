import Threads from './thread.js';
import Aurora from './aurora.js';
import Iridescence from './iridescence.js';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: 'black'}}>
        <Threads
          amplitude={2}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>
      <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: 'black'}}>
        <Aurora
          colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div style={{ width: '100%', height: '100vh', position: 'relative'}}>
          <Iridescence
            color={[0, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.5}
          />
      </div>
    </div>
  );
}
