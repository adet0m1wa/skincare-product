// Hero — pixel-for-pixel port of pencil-new.pen "Landing Page- new" → section 1 - Hero (9Q81H).
// All measurements and colors read directly from the .pen file.
// Per user instruction: no before/after slider yet — the uzHxA drag handle node is skipped.
import heroCouple from '../assets/hero/hero-couple.webp';
import heroFemaleBefore from '../assets/hero/hero-female-before.webp';
import heroMaleBefore from '../assets/hero/hero-male-before.webp';

export function Hero() {
  return (
    // 9Q81H — section 1 - Hero: width 1360, horizontal (default), alignItems center
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        width: 1360,
        margin: '0 auto',
      }}
      aria-labelledby="hero-headline"
    >
      {/* VHI4l — Hero/Left: width fit_content(615) */}
      <div style={{ width: 615 }}>
        {/* V5VS2 — Frame 3: vertical, gap 40, width fill_container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          {/* T7EqY — Hero/Left/Headline: DM Serif Display 54/400, #0D0D0D,
              ls -1.04, lh 1.08, textGrowth fixed-width */}
          <h1
            id="hero-headline"
            style={{
              margin: 0,
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 54,
              lineHeight: 1.08,
              letterSpacing: '-1.04px',
              color: '#0D0D0D',
              whiteSpace: 'pre-line',
            }}
          >
            {'Your skin deserves\nmore than guesswork'}
          </h1>

          {/* W8V99 — Hero/Left/Body: DM Sans 16/400, #6B6B65, lh 1.65, width 420 */}
          <p
            style={{
              margin: 0,
              width: 420,
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.65,
              color: '#6B6B65',
            }}
          >
            Formulated by dermatologists, made for us — every skin type, every
            concern, one standard of care.
          </p>

          {/* Z9T6d — Hero/Left/CTA: alignItems center, gap 8, padding 16/32,
              1px inside stroke #1A1A1A, NO cornerRadius, NO fill */}
          <button
            type="button"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '16px 32px',
              border: '1px solid #1A1A1A',
              backgroundColor: 'transparent',
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontWeight: 500,
              fontSize: 15,
              lineHeight: 1,
              color: '#1A1A1A',
              cursor: 'pointer',
            }}
          >
            Shop now
          </button>
        </div>
      </div>

      {/* kZjmW — Hero/Right: width 745, height fit_content(500), vertical layout */}
      <div
        style={{
          position: 'relative',
          width: 745,
          height: 500,
          overflow: 'hidden',
        }}
      >
        {/* N7tAr — Hero/Right/Image: fill_container × fill_container, image mode fill */}
        <img
          src={heroCouple}
          alt="A couple holding us serum bottles, leaning together in warm natural light."
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* EyVnF — Hero/Right/Dots: absolute (0, 424), width 680 (fill_container fallback),
            horizontal, justifyContent center, alignItems center, gap 20, padding 18/0 */}
        <div
          role="tablist"
          aria-label="Hero image navigation"
          style={{
            position: 'absolute',
            left: 0,
            top: 424,
            width: 680,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            padding: '18px 0',
          }}
        >
          {/* WVxD4 — Dot/1: 40×40, image hero-couple fill, opacity 0.3, stroke disabled */}
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-label="Couple"
            style={{
              width: 40,
              height: 40,
              padding: 0,
              border: 'none',
              background: 'transparent',
              opacity: 0.3,
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <img
              src={heroCouple}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </button>

          {/* 2ahNG — Dot/2: 40×40, image hero-female-before fill, 1px inside stroke #1a1a1a */}
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-label="Female before/after"
            style={{
              width: 40,
              height: 40,
              padding: 0,
              border: '1px solid #1a1a1a',
              background: 'transparent',
              overflow: 'hidden',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={heroFemaleBefore}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </button>

          {/* u4fmO — Dot/3: 40×40, image hero-male-before fill, 1px inside stroke #1a1a1a */}
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-label="Male before/after"
            style={{
              width: 40,
              height: 40,
              padding: 0,
              border: '1px solid #1a1a1a',
              background: 'transparent',
              overflow: 'hidden',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={heroMaleBefore}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
