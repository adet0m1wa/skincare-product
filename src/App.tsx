import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Concerns } from './components/Concerns';
import { Bestsellers } from './components/Bestsellers';
import './App.css';

export default function App() {
  return (
    // Full-width ivory background on .app-root so viewports wider than
    // 1440 show the bg edge-to-edge. .page-frame caps page content at
    // 1440 and centers it.
    <div className="app-root">
      <div className="page-frame">
        <Nav />
        <main>
          <Hero />
          <Concerns />
          <Bestsellers />
        </main>
      </div>
    </div>
  );
}
