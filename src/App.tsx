const services = [
  {
    title: 'Fellpflege & Bürsten',
    text: 'Schonende Pflege für gepflegtes Fell, weniger Knoten und ein angenehmes Hautgefühl.',
    icon: '🐾',
  },
  {
    title: 'Waschen & Föhnen',
    text: 'Stressarm, gründlich und auf Felltyp sowie Hautempfindlichkeit abgestimmt.',
    icon: '🫧',
  },
  {
    title: 'Schneiden & Konturen',
    text: 'Praktische Pflege, saubere Konturen und ein gepflegter Look für euren Liebling.',
    icon: '✂️',
  },
  {
    title: 'Krallenpflege',
    text: 'Vorsichtige Krallenpflege direkt bei euch zuhause – ohne unnötigen Salonstress.',
    icon: '✨',
  },
]

const steps = [
  'Ihr schreibt uns kurz per WhatsApp oder Kontaktformular.',
  'Wir klären Tierart, Fellzustand, Wünsche und passenden Termin.',
  'Die Pflege findet mobil und möglichst entspannt bei euch zuhause statt.',
]

const priceNotes = [
  'Die Preise richten sich nach Größe, Fellzustand, Aufwand und gewünschter Leistung.',
  'Vor dem Termin bekommt ihr eine realistische Einschätzung.',
  'Bei stark verfilztem Fell oder besonderem Pflegebedarf kann der Aufwand abweichen.',
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#start" className="flex items-center gap-3 font-black tracking-tight text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400 text-xl text-slate-950 shadow-lg shadow-amber-500/20">🐾</span>
          <span>Pfotenparadies Rust</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          <a className="hover:text-amber-300" href="#leistungen">Leistungen</a>
          <a className="hover:text-amber-300" href="#preise">Preise</a>
          <a className="hover:text-amber-300" href="#kontakt">Kontakt</a>
        </div>
        <a
          href="https://wa.me/4900000000000"
          className="rounded-full bg-amber-400 px-5 py-2 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <section id="start" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,0.16),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0),rgb(2,6,23))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-200">
              🐶 Mobiler Tierfriseur in Hamburg & Umgebung
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Fellpflege mit Herz – direkt bei euch zuhause.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Pfotenparadies Rust steht für liebevolle, ruhige und professionelle Pflege in gewohnter Umgebung. Ideal für Hunde, die im Salon schnell gestresst sind oder bei denen ihr euch eine persönliche Betreuung wünscht.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#kontakt" className="rounded-2xl bg-amber-400 px-8 py-4 text-center font-black text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300">
                Termin anfragen
              </a>
              <a href="#leistungen" className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:border-amber-300/50 hover:text-amber-200">
                Leistungen ansehen
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-amber-300 via-orange-200 to-pink-200 p-1">
              <div className="rounded-[1.35rem] bg-slate-950 p-8">
                <div className="text-7xl">🐕‍🦺</div>
                <h2 className="mt-6 text-3xl font-black text-white">Stressarme Pflege</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Ohne Wartezimmer, ohne fremde Salonumgebung, ohne unnötige Hektik. Wir nehmen uns Zeit für Tier und Mensch.
                </p>
                <div className="mt-6 grid gap-3 text-sm font-bold text-slate-200">
                  <div className="rounded-2xl bg-white/5 p-4">✅ Hausbesuche nach Absprache</div>
                  <div className="rounded-2xl bg-white/5 p-4">✅ Liebevoller Umgang</div>
                  <div className="rounded-2xl bg-white/5 p-4">✅ Pflege nach individuellem Bedarf</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="font-black uppercase tracking-[0.25em] text-amber-300">Leistungen</p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Alles für ein gepflegtes Fellgefühl.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Der genaue Ablauf richtet sich nach Tier, Felltyp und Zustand. Ziel ist immer eine saubere, sichere und möglichst entspannte Pflege.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-amber-300/30">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="preise" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Preise</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Fair nach Aufwand.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Jede Fellpflege ist unterschiedlich. Deshalb starten wir mit einer kurzen Einschätzung und nennen euch vorher transparent, womit ihr ungefähr rechnen könnt.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-300/20 bg-slate-950 p-6 shadow-2xl shadow-black/30">
            <h3 className="text-2xl font-black text-white">Preis-Hinweis</h3>
            <div className="mt-5 space-y-4">
              {priceNotes.map((note) => (
                <div key={note} className="rounded-2xl bg-white/[0.04] p-4 text-slate-300">{note}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Ablauf</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">So einfach läuft es ab.</h2>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-amber-400 font-black text-slate-950">{index + 1}</div>
                <p className="pt-2 font-semibold text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-400/15 via-white/[0.04] to-pink-400/10 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Kontakt</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Bereit für gepflegte Pfoten?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Schreibt uns kurz, welches Tier gepflegt werden soll, was ihr euch wünscht und in welchem Stadtteil ihr wohnt. Wir melden uns schnellstmöglich zurück.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/4900000000000" className="rounded-2xl bg-amber-400 px-8 py-4 text-center font-black text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300">
              Per WhatsApp schreiben
            </a>
            <a href="mailto:kontakt@pfotenparadies-rust.de" className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:border-amber-300/50 hover:text-amber-200">
              E-Mail senden
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-slate-500">
        <p className="font-bold text-slate-300">Pfotenparadies Rust</p>
        <p className="mt-2">Mobiler Tierfriseur · Hamburg & Umgebung</p>
        <p className="mt-4">Impressum und Datenschutz werden vor Veröffentlichung ergänzt.</p>
      </footer>
    </main>
  )
}

export default App
