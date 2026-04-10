import { Nav } from './components/Nav';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-ink antialiased">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}
