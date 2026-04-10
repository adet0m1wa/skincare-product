import amara from '../assets/team/team-amara.webp';
import james from '../assets/team/team-james.webp';
import leah from '../assets/team/team-leah.webp';
import david from '../assets/team/team-david.webp';
import sofia from '../assets/team/team-sofia.webp';

type Member = { name: string; role: string; image: string };

const TEAM: Member[] = [
  { name: 'Dr. Amara Osei', role: 'Chief Dermatologist', image: amara },
  { name: 'Dr. James Adebayo', role: 'Head of Research', image: james },
  { name: 'Leah Chen', role: 'Lead Cosmetic Chemist', image: leah },
  { name: 'David Okonkwo', role: 'Product Development Director', image: david },
  { name: 'Sofia Mensah', role: 'Clinical Trials Manager', image: sofia },
];

export function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="mx-auto w-full max-w-[1360px] px-10 pt-32"
    >
      <header className="mx-auto mb-14 flex max-w-[720px] flex-col items-center gap-6 text-center">
        <h2
          id="team-heading"
          className="font-headline text-[50px] font-normal leading-[1.08] tracking-[-0.02em] text-ink"
        >
          Grounded in science.
          <br />
          Driven by purpose.
        </h2>
        <p className="max-w-[620px] text-[16px] leading-[1.7] text-muted">
          Every formula passes through a team of licensed dermatologists, certified
          chemists, and clinical-trial leads before it reaches your shelf. Transparent,
          tested, and made in small batches by people who use it themselves.
        </p>
        <a
          href="#meet-the-team"
          className="mt-2 inline-flex items-center rounded-full border border-accent px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
        >
          Meet the team
        </a>
      </header>

      <ul className="grid grid-cols-5 gap-5">
        {TEAM.map((member) => (
          <li
            key={member.name}
            className="group relative h-[480px] overflow-hidden rounded-xl bg-image-bg"
          >
            <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#0d0d0d]/80 via-[#0d0d0d]/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-6">
              <span aria-hidden className="block h-px w-8 bg-white/60" />
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-medium leading-tight text-white">
                  {member.name}
                </p>
                <p className="text-[14px] leading-tight text-white/80">
                  {member.role}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
