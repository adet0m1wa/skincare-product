// Team — port of pencil-new.pen "Landing Page- new" Section 6 (1clZZ).
// 5 team member portrait cards with name/role overlay.
import teamAmara from '../assets/team/team-amara.webp';
import teamJames from '../assets/team/team-james.webp';
import teamLeah from '../assets/team/team-leah.webp';
import teamDavid from '../assets/team/team-david.webp';
import teamSofia from '../assets/team/team-sofia.webp';
import './Team.css';

const MEMBERS = [
  { name: 'Dr. Amara Osei', role: 'Chief Dermatologist', img: teamAmara },
  { name: 'Dr. James Adebayo', role: 'Head of Research', img: teamJames },
  { name: 'Leah Chen', role: 'Lead Cosmetic Chemist', img: teamLeah },
  { name: 'David Okonkwo', role: 'Product Dev. Director', img: teamDavid },
  { name: 'Sofia Mensah', role: 'Clinical Trials Manager', img: teamSofia },
];

export function Team() {
  return (
    <section className="team-root" aria-label="Our team">
      <div className="team-cards">
        {MEMBERS.map((m) => (
          <article key={m.name} className="team-card">
            <img src={m.img} alt={m.name} className="team-card-image" />
            <div className="team-card-info">
              <span className="team-card-name">{m.name}</span>
              <span className="team-card-role">{m.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
