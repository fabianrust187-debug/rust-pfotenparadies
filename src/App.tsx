const phoneDisplay = '01567 8510309'
const phoneLink = '+4915678510309'
const whatsappLink = 'https://wa.me/4915678510309'
const email = 'info@pfotenparadies-rust.de'

const services = [
  {
    title: 'Fellpflege & Bürsten',
    text: 'Schonende Pflege für gepflegtes Fell, weniger Knoten und ein angenehmes Hautgefühl.',
    icon: '🐾',
  },
  {
    title: 'Waschen & Föhnen',
    text: 'Ruhig, gründlich und auf Felltyp sowie Hautempfindlichkeit abgestimmt.',
    icon: '🫧',
  },
  {
    title: 'Schneiden & Konturen',
    text: 'Saubere Konturen und eine individuelle Pflege passend zu Ihrem Hund und seinem Fell.',
    icon: '✂️',
  },
  {
    title: 'Krallenpflege',
    text: 'Vorsichtige Krallenpflege direkt bei Ihnen zuhause – ohne unnötigen Salonstress.',
    icon: '✨',
  },
]

const steps = [
  'Sie schreiben uns per WhatsApp, E-Mail oder rufen uns an.',
  'Wir klären Fellzustand, Pflegewunsch, Hamburger Stadtteil und einen passenden Termin.',
  'Die Pflege findet mobil und möglichst entspannt bei Ihnen zuhause statt.',
]

const priceNotes = [
  'Der Preis richtet sich nach Größe, Fellzustand, Pflegeaufwand und gewünschter Leistung.',
  'Vor dem Termin erhalten Sie eine realistische Einschätzung zum voraussichtlichen Aufwand.',
  'Bei starker Verfilzung oder besonderem Pflegebedarf kann der tatsächliche Aufwand abweichen.',
]

const contactItems = [
  { label: 'Telefon & WhatsApp', value: phoneDisplay, href: `tel:${phoneLink}` },
  { label: 'E-Mail', value: email, href: `mailto:${email}` },
  { label: 'Einsatzgebiet', value: 'Hamburg', href: undefined },
  { label: 'Erreichbarkeit', value: 'Mo–Fr · 09:00–18:00 Uhr', href: undefined },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-300/10 bg-black/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#start" className="flex items-center gap-3 font-black tracking-tight text-white">
          <img
            src="/logo.webp"
            alt="Pfotenparadies Rust Logo"
            className="h-12 w-12 rounded-xl border border-amber-300/20 object-cover shadow-lg shadow-amber-500/10"
          />
          <span className="hidden sm:inline">Pfotenparadies Rust</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-zinc-300 md:flex">
          <a className="transition hover:text-amber-300" href="#leistungen">Leistungen</a>
          <a className="transition hover:text-amber-300" href="#preise">Preise</a>
          <a className="transition hover:text-amber-300" href="#ueber-uns">Über uns</a>
          <a className="transition hover:text-amber-300" href="#kontakt">Kontakt</a>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-black text-black shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <Header />

      <section id="start" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(217,164,65,0.12),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0),rgb(0,0,0))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
              🐶 Mobiler Tierfriseur in Hamburg
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Mit Liebe gepflegt. <span className="text-amber-300">Direkt bei Ihnen zuhause.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Pfotenparadies Rust steht für persönliche, ruhige und mobile Fellpflege in Hamburg. Ihr Hund bleibt in seiner gewohnten Umgebung und wir nehmen uns Zeit für eine möglichst entspannte Pflege.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-amber-400 px-8 py-4 text-center font-black text-black shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300">
                Termin per WhatsApp anfragen
              </a>
              <a href="#leistungen" className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:border-amber-300/50 hover:text-amber-200">
                Leistungen ansehen
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">📍 Hamburg</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">🕘 Mo–Fr · 09:00–18:00 Uhr</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">🏠 Mobile Pflege</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-amber-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/20 bg-zinc-950 p-3 shadow-2xl shadow-black">
              <img src="/logo.webp" alt="Logo von Pfotenparadies Rust" className="aspect-square w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="font-black uppercase tracking-[0.25em] text-amber-300">Leistungen</p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Fellpflege mit Ruhe und persönlicher Betreuung.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Der genaue Ablauf richtet sich nach Ihrem Hund, Felltyp und Fellzustand. Ziel ist eine sichere, gründliche und möglichst entspannte Pflege.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-amber-300/30">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="preise" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Preise</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Transparent und fair nach Aufwand.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Kein Fell ist gleich. Deshalb erhalten Sie vor dem Termin eine erste Einschätzung, statt mit einem unpassenden Pauschalpreis überrascht zu werden.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-300/20 bg-black p-6 shadow-2xl shadow-black/30">
            <h3 className="text-2xl font-black text-white">So setzt sich der Preis zusammen</h3>
            <div className="mt-5 space-y-4">
              {priceNotes.map((note) => (
                <div key={note} className="rounded-2xl bg-white/[0.05] p-4 text-zinc-300">{note}</div>
              ))}
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-6 block rounded-2xl border border-amber-300/30 bg-amber-300/10 px-6 py-4 text-center font-black text-amber-200 transition hover:bg-amber-300 hover:text-black">
              Unverbindlich Preis einschätzen lassen
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Ablauf</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">So einfach kommt die Fellpflege zu Ihnen.</h2>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-amber-400 font-black text-black">{index + 1}</div>
                <p className="pt-2 font-semibold text-zinc-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Über uns</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Persönlich geführt von Josephine und Fabian.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Hinter Pfotenparadies Rust stehen Josephine und Fabian. Josephine übernimmt die mobile Fellpflege und die persönliche Betreuung vor Ort. Fabian kümmert sich um Organisation, Termine, Website und die Abläufe im Hintergrund.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Als Tierhaushalt wissen wir selbst, wie unterschiedlich Tiere reagieren können. Deshalb setzen wir auf Ruhe, Geduld und eine Pflege, die sich am individuellen Hund orientiert.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-4xl">✂️</div>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-amber-300">Vor Ort</p>
              <h3 className="mt-2 text-2xl font-black text-white">Josephine</h3>
              <p className="mt-3 leading-7 text-zinc-400">Mobile Fellpflege und persönliche Betreuung Ihres Hundes.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-4xl">💻</div>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-amber-300">Organisation</p>
              <h3 className="mt-2 text-2xl font-black text-white">Fabian</h3>
              <p className="mt-3 leading-7 text-zinc-400">Termine, digitale Abläufe, Website und Organisation im Hintergrund.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-400/15 via-white/[0.04] to-transparent p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Kontakt</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Bereit für gepflegte Pfoten?</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Schreiben Sie uns kurz, welcher Hund gepflegt werden soll, was Sie sich wünschen und in welchem Hamburger Stadtteil Sie wohnen. Wir melden uns schnellstmöglich zurück.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactItems.map((item) => {
              const content = (
                <>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-amber-300">{item.label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
                </>
              )

              return item.href ? (
                <a key={item.label} href={item.href} className="rounded-2xl border border-white/10 bg-black/35 p-5 transition hover:-translate-y-1 hover:border-amber-300/40">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                  {content}
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-amber-400 px-8 py-4 text-center font-black text-black shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300">
              Per WhatsApp schreiben
            </a>
            <a href={`mailto:${email}`} className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:border-amber-300/50 hover:text-amber-200">
              E-Mail senden
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.webp" alt="Pfotenparadies Rust" className="h-14 w-14 rounded-xl border border-amber-300/20 object-cover" />
                <div>
                  <p className="font-black text-white">Pfotenparadies Rust</p>
                  <p className="text-sm text-zinc-500">Mobiler Tierfriseur · Hamburg</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-black text-white">Kontakt</p>
              <div className="mt-3 space-y-2 text-sm text-zinc-400">
                <p>{phoneDisplay}</p>
                <p>{email}</p>
                <p>Mo–Fr · 09:00–18:00 Uhr</p>
              </div>
            </div>
            <div>
              <p className="font-black text-white">Social Media</p>
              <p className="mt-3 text-sm text-zinc-400">Instagram · TikTok · Facebook</p>
              <span className="mt-3 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-amber-200">Coming soon</span>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-600">
            <p>© 2026 Pfotenparadies Rust · Impressum und Datenschutz werden als nächste Pflichtseiten ergänzt.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
