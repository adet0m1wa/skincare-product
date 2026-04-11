import { Nav } from './components/Nav';
import { Hero } from './components/Hero';

export default function App() {
  return (
    // Landing Page- new frame: 1440 wide, fill #F7F5F0, vertical, alignItems center
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F7F5F0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: 1440 }}>
        <Nav />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}
