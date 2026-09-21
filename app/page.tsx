import ThemeToggle from "@/components/ThemeToggle";
import {
  profile,
  ledger,
  pillars,
  roles,
  earlier,
  toolkit,
  education,
} from "@/content/resume";

function Chevron() {
  return (
    <svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="bar">
        <div className="shell bar-in">
          <a className="mark" href="#top">
            Mohan<span>.</span>
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#toolkit">Toolkit</a>
            <a href="#contact" className="keep">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- hero ---------- */}
        <div className="shell hero">
          <span className="avail">
            <span className="dot" aria-hidden="true" />
            Open to senior and lead frontend roles
          </span>
          <h1>
            Mohan <em>Lal</em>
          </h1>
          <p className="role-line">
            {profile.role} <small>· 11+ years · {profile.location}</small>
          </p>
          <p className="lede">{profile.positioning}</p>
          <div className="actions">
            <a className="btn btn-primary" href={profile.resumeHref} download>
              Download résumé
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* ---------- ledger ---------- */}
        <div className="shell">
          <div className="ledger">
            {ledger.map((m) => (
              <div className="ledger-cell" key={m.label}>
                <span className="ledger-val">{m.value}</span>
                <span className="ledger-lab">{m.label}</span>
                <span className="ledger-src">{m.where}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- about ---------- */}
        <section id="about" className="shell">
          <div className="sec-head">
            <h2>How I work</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              {profile.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="pillars">
              {pillars.map((p) => (
                <div className="pillar" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- work ---------- */}
        <section id="work" className="shell">
          <div className="sec-head">
            <h2>Selected work</h2>
            <span className="count">Open a role for the detail</span>
          </div>

          {roles.map((r, i) => (
            <details className="job" key={r.company} open={i === 0}>
              <summary>
                <span className="job-years">{r.years}</span>
                <span>
                  <span className="job-co">{r.company}</span>
                  <span className="job-title">
                    <b>{r.title}</b> · {r.descriptor}
                  </span>
                </span>
                <Chevron />
              </summary>

              <div className="job-body">
                <div className="job-aside">{r.period}</div>
                <div>
                  <p className="job-context">{r.context}</p>

                  <div className="outcomes">
                    {r.outcomes.map((o) => (
                      <div className="outcome" key={o.label}>
                        <b>{o.value}</b>
                        <span>{o.label}</span>
                      </div>
                    ))}
                  </div>

                  {r.groups.map((g) => (
                    <div className="grp" key={g.heading}>
                      <h4>{g.heading}</h4>
                      <ul>
                        {g.points.map((pt, j) => (
                          <li key={j}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="stack">
                    {r.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </section>

        {/* ---------- earlier ---------- */}
        <section className="shell">
          <div className="sec-head">
            <h2>Where it started</h2>
            <span className="count">2013–2016</span>
          </div>
          <div className="early-grid">
            {earlier.map((e) => (
              <div className="early" key={e.company}>
                <h3>{e.company}</h3>
                <span className="who">{e.title}</span>
                <ul>
                  {e.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- toolkit ---------- */}
        <section id="toolkit" className="shell">
          <div className="sec-head">
            <h2>Toolkit</h2>
          </div>
          <div className="kit">
            {toolkit.map((g) => (
              <div className="kit-group" key={g.group}>
                <h3>{g.group}</h3>
                <div className="stack">
                  {g.items.map((it) => (
                    <span className="chip" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- contact ---------- */}
        <section id="contact" className="contact">
          <div className="shell">
            <h2>Let&rsquo;s talk about your front end.</h2>
            <p>
              I&rsquo;m looking for senior or lead frontend work where architecture, performance
              and developer experience actually matter. Happy to walk through any of the above in
              detail.
            </p>
            <div className="contact-links">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href={profile.resumeHref} download>
                Résumé (PDF)
              </a>
            </div>
            <div className="edu-row">
              <b>{education.degree}</b>
              <span>{education.school}</span>
              <span>
                {education.year} · {education.note}
              </span>
            </div>
          </div>
        </section>

        <div className="shell">
          <footer>
            <span>© {new Date().getFullYear()} Mohan Lal</span>
            <span>Built with Next.js. Deployed on Vercel.</span>
          </footer>
        </div>
      </main>
    </>
  );
}
