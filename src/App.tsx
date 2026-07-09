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

const prices = [
  { title: 'Krallenpflege', price: '15 €', detail: 'Vorsichtiges Kürzen der Krallen.' },
  { title: 'Bürsten & Fellpflege', price: 'ab 30 €', detail: 'Pflege, Bürsten und Lösen leichter Knoten.' },
  { title: 'Unterwolle entfernen', price: 'ab 40 €', detail: 'Gründliche Entfernung loser Unterwolle.' },
  { title: 'Waschen & Föhnen', price: 'ab 45 €', detail: 'Auf Felltyp und Haut abgestimmte Pflege.' },
  { title: 'Komplettpflege · klein', price: 'ab 60 €', detail: 'Für kleine Hunde – individuell nach Fell und Aufwand.' },
  { title: 'Komplettpflege · mittel', price: 'ab 80 €', detail: 'Für mittelgroße Hunde – individuell nach Fell und Aufwand.' },
  { title: 'Komplettpflege · groß', price: 'ab 110 €', detail: 'Für große Hunde – individuell nach Fell und Aufwand.' },
  { title: 'Welpengewöhnung', price: 'ab 30 €', detail: 'Behutsames Kennenlernen von Pflege und Equipment.' },
]

const steps = [
  'Sie schreiben uns per WhatsApp, E-Mail oder rufen uns an.',
  'Wir klären Fellzustand, Pflegewunsch, Hamburger Stadtteil und einen passenden Termin.',
  'Die Pflege findet mobil und möglichst entspannt bei Ihnen zuhause statt.',
]

const priceNotes = [
  'Der Preis richtet sich nach Größe, Fellzustand, Pflegeaufwand und gewünschter Leistung.',
  'Vor dem Termin erhalten Sie eine realistische Einschätzung zum voraussichtlichen Aufwand.',
  'Bei starker Verfilzung, besonderem Pflegebedarf oder erhöhtem Zeitaufwand kann der Preis abweichen.',
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
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-amber-300">Preise</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Vorläufige Startpreise.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Unsere Preise befinden sich aktuell in der Einführungsphase. Die folgenden Beträge dienen als transparente Orientierung und können vor der offiziellen Eröffnung noch angepasst werden.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => (
              <article key={item.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-black p-6 transition hover:-translate-y-1 hover:border-amber-300/35">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-3xl font-black text-amber-300">{item.price}</p>
                <p className="mt-4 leading-7 text-zinc-400">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 rounded-3xl border border-amber-300/20 bg-black p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-black text-white">Wichtig zu unseren Preisen</h3>
              <div className="mt-4 space-y-3">
                {priceNotes.map((note) => (
                  <p key={note} className="text-zinc-300">• {note}</p>
                ))}
                <p className="text-zinc-300">• Aufgrund der Anwendung der Kleinunternehmerregelung nach § 19 UStG wird keine Umsatzsteuer ausgewiesen.</p>
                <p className="text-zinc-300">• Eventuelle Anfahrtskosten werden vor der Terminvereinbarung transparent mitgeteilt.</p>
              </div>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-2xl border border-amber-300/30 bg-amber-300/10 px-6 py-4 text-center font-black text-amber-200 transition hover:bg-amber-300 hover:text-black">
              Preis einschätzen lassen
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

      <section id="impressum" className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <p className="font-black uppercase tracking-[0.25em] text-amber-300">Rechtliches</p>
          <h2 className="mt-3 text-4xl font-black text-white">Impressum</h2>
          <div className="mt-8 grid gap-8 rounded-3xl border border-white/10 bg-black p-6 md:grid-cols-2 md:p-8">
            <div>
              <h3 className="font-black text-white">Angaben nach § 5 DDG</h3>
              <div className="mt-4 space-y-1 leading-7 text-zinc-300">
                <p className="font-bold text-white">Pfotenparadies Rust</p>
                <p>Geschäftsbezeichnung des Einzelunternehmens</p>
                <p>Inhaber: Fabian Robert Rust</p>
                <p>San-Francisco-Straße 3</p>
                <p>20457 Hamburg</p>
                <p>Deutschland</p>
              </div>
            </div>
            <div>
              <h3 className="font-black text-white">Kontakt</h3>
              <div className="mt-4 space-y-2 leading-7 text-zinc-300">
                <p>Telefon: <a className="text-amber-300 hover:text-amber-200" href={`tel:${phoneLink}`}>{phoneDisplay}</a></p>
                <p>E-Mail: <a className="text-amber-300 hover:text-amber-200" href={`mailto:${email}`}>{email}</a></p>
              </div>
              <h3 className="mt-8 font-black text-white">Unternehmensform</h3>
              <p className="mt-4 leading-7 text-zinc-300">Einzelunternehmen · Inhaber Fabian Robert Rust</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-zinc-500">
            Umsatzsteuer-Identifikationsnummer und weitere steuerliche Angaben werden ergänzt, sofern sie dem Unternehmen tatsächlich erteilt wurden und für die Anbieterangaben erforderlich sind.
          </p>
        </div>
      </section>

      <section id="datenschutz" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <p className="font-black uppercase tracking-[0.25em] text-amber-300">Rechtliches</p>
          <h2 className="mt-3 text-4xl font-black text-white">Datenschutzerklärung</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Diese Datenschutzhinweise erklären, welche personenbezogenen Daten beim Besuch unserer Website und bei einer Kontaktaufnahme verarbeitet werden.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">1. Verantwortlicher</h3>
              <div className="mt-4 space-y-1 leading-7 text-zinc-300">
                <p className="font-bold text-white">Fabian Robert Rust</p>
                <p>Pfotenparadies Rust</p>
                <p>San-Francisco-Straße 3</p>
                <p>20457 Hamburg</p>
                <p>Deutschland</p>
                <p className="pt-2">Telefon: {phoneDisplay}</p>
                <p>E-Mail: {email}</p>
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">2. Bereitstellung der Website</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Unsere Website wird über Dienste von Cloudflare ausgeliefert. Beim Aufruf der Website können technisch erforderliche Verbindungs- und Protokolldaten verarbeitet werden. Dazu können insbesondere IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Adresse, Browser- und Geräteinformationen sowie technische Routing- und Systeminformationen gehören.
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Die Verarbeitung erfolgt zur sicheren, stabilen und schnellen Bereitstellung der Website auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO. Soweit Daten in Drittländer übertragen werden, stützt Cloudflare entsprechende Übermittlungen nach eigenen Angaben unter anderem auf anwendbare Angemessenheitsbeschlüsse und EU-Standardvertragsklauseln.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">3. Kontakt per E-Mail oder Telefon</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten und den Inhalt Ihrer Anfrage, um Ihr Anliegen zu bearbeiten und mit Ihnen zu kommunizieren.
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Erfolgt die Kontaktaufnahme zur Anbahnung oder Durchführung eines Auftrags, ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. Bei sonstigen Anfragen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an der Bearbeitung eingehender Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Für unsere geschäftliche E-Mail-Kommunikation nutzen wir E-Mail-Dienste der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">4. Kontakt über WhatsApp</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Auf unserer Website befindet sich ein Link zu WhatsApp. Eine Verbindung zu WhatsApp wird über diesen Link erst hergestellt, wenn Sie ihn aktiv anklicken und den externen Dienst aufrufen.
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Bei der Nutzung von WhatsApp verarbeitet WhatsApp nach eigenen Angaben unter anderem Telefonnummer, Nutzungs-, Geräte- und Verbindungsinformationen sowie IP-Adressen. Eine Verarbeitung außerhalb des Europäischen Wirtschaftsraums kann stattfinden. WhatsApp nennt hierfür unter anderem Angemessenheitsbeschlüsse, das EU-US Data Privacy Framework und EU-Standardvertragsklauseln als Übermittlungsmechanismen.
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Nachrichten, die Sie uns über WhatsApp senden, verarbeiten wir zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist je nach Inhalt Art. 6 Abs. 1 lit. b oder lit. f DSGVO. Alternativ können Sie uns jederzeit per E-Mail oder Telefon kontaktieren.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">5. Cookies, Analyse und Social Media</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Wir setzen auf dieser Website derzeit keine eigenen Analyse- oder Marketingtools, keine Werbe-Pixel und keine eingebetteten Social-Media-Plugins ein. Von uns werden keine Marketing- oder Analyse-Cookies bewusst gesetzt.
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Technisch notwendige Verarbeitung durch die eingesetzten Infrastruktur- und Sicherheitsdienste bleibt hiervon unberührt. Sollten wir zukünftig Analyse-, Marketing- oder eingebettete Social-Media-Dienste hinzufügen, werden diese Datenschutzhinweise und gegebenenfalls die Einwilligungsverwaltung vorher angepasst.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">6. Speicherdauer</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist. Sobald der Zweck entfällt, werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungs- oder Nachweispflichten entgegenstehen oder die weitere Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">7. Ihre Rechte</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Außerdem können Sie einer Verarbeitung widersprechen, die auf Art. 6 Abs. 1 lit. f DSGVO beruht.
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Zur Ausübung Ihrer Rechte genügt eine Nachricht an {email}. Besteht eine Verarbeitung auf Grundlage einer Einwilligung, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
              <h3 className="text-xl font-black text-white">8. Beschwerderecht</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für Unternehmen mit Sitz in Hamburg ist insbesondere der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit eine zuständige Aufsichtsbehörde.
              </p>
              <a href="https://datenschutz-hamburg.de/" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-xl border border-amber-300/25 bg-amber-300/10 px-4 py-2 font-bold text-amber-200 transition hover:bg-amber-300 hover:text-black">
                Zur Hamburger Datenschutzaufsicht
              </a>
            </article>
          </div>

          <p className="mt-8 text-sm text-zinc-500">Stand: Juli 2026</p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
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
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Pfotenparadies Rust</p>
            <div className="flex gap-5">
              <a className="transition hover:text-amber-300" href="#impressum">Impressum</a>
              <a className="transition hover:text-amber-300" href="#datenschutz">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
