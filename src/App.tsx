import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Concerns } from './components/Concerns';
import { Bestsellers } from './components/Bestsellers';
import { HowItWorks } from './components/HowItWorks';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Concerns />
        <Bestsellers />
        <HowItWorks />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
