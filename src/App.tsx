import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Concerns } from './components/Concerns';
import { Bestsellers } from './components/Bestsellers';
import { HowWeOperate } from './components/HowWeOperate';
import { ScienceBanner } from './components/ScienceBanner';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
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
          <HowWeOperate />
          <ScienceBanner />
          <Team />
          <Testimonials />
          <Blog />
        </main>
        <Footer />
      </div>
    </div>
  );
}
