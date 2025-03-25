import Threads from './Threads';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
    </div>
  );
}
