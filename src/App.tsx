import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

type Locale = 'en' | 'el'

type Copy = {
  nav: {
    pricing: string
    proof: string
    demo: string
    contact: string
    primaryCta: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    telegramCta: string
    supportCta: string
    bullets: string[]
  }
  metrics: Array<{ value: string; label: string }>
  pricing: {
    eyebrow: string
    title: string
    intro: string
    featuredCard: {
      title: string
      detail: string
      footnote: string
      badge: string
    }
    packsCard: {
      title: string
      detail: string
      footnote: string
      packs: Array<{ credits: string; price: string; badge?: string }>
    }
    bullets: string[]
  }
  proof: {
    eyebrow: string
    title: string
    intro: string
    quotes: Array<{ quote: string; author: string; role: string }>
  }
  demo: {
    eyebrow: string
    title: string
    intro: string
    points: string[]
    badge: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    primaryTitle: string
    primaryBody: string
    primaryCta: string
    secondaryTitle: string
    secondaryBody: string
    secondaryCta: string
    note: string
  }
  footer: {
    tagline: string
    telegram: string
  }
}

const copy: Record<Locale, Copy> = {
  en: {
    nav: {
      pricing: 'Pricing',
      proof: 'Proof',
      demo: 'Demo',
      contact: 'Telegram',
      primaryCta: 'Start on Telegram',
    },
    hero: {
      eyebrow: 'Greek-first settlement operations for ClubGG agents',
      title: 'AgentOpsify turns screenshot chaos into a clean weekly settlement flow.',
      subtitle:
        'Use Telegram as the front door, then move balances, players, credits, and reports through one sharper operating surface.',
      telegramCta: 'Open Telegram bot',
      supportCta: 'Message Telegram support',
      bullets: [
        '5 free credits on signup',
        'Built around real ClubGG operator workflows',
        'Greek conversion surfaces included from day one',
      ],
    },
    metrics: [
      { value: 'Telegram-first', label: 'Keep the current intake habit.' },
      { value: 'Mini App control', label: 'Players, reports, and credits in one flow.' },
      { value: 'Fewer manual errors', label: 'Reduce spreadsheet and copy-paste drift.' },
    ],
    pricing: {
      eyebrow: 'Pricing',
      title: 'Start free, then move into the live credit packs.',
      intro:
        'New agents still get 5 free credits to test the flow. Paid packs are now set to the approved public pricing below, with a EUR0.50 processing fee and local VAT added at checkout.',
      featuredCard: {
        title: 'Start free',
        detail: '5 free credits on signup so an agent can test the workflow before buying.',
        footnote: 'Current public offer',
        badge: '5 free credits',
      },
      packsCard: {
        title: 'Paid credit packs',
        detail: 'Use the pack that matches the volume of weekly screenshots you process.',
        footnote: 'Approved live pricing',
        packs: [
          { credits: '10 Credits', price: 'EUR5' },
          { credits: '50 Credits', price: 'EUR20', badge: 'Best Value' },
          { credits: '100 Credits', price: 'EUR35' },
          { credits: '500 Credits', price: 'EUR150', badge: 'Pro' },
        ],
      },
      bullets: [
        'EUR0.50 processing fee is added at checkout.',
        'Local VAT is applied at checkout where required.',
        'Telegram remains the only public activation and support path.',
      ],
    },
    proof: {
      eyebrow: 'Proof and trust',
      title: 'Trust surfaces are now structured for real quotes and future screenshot assets.',
      intro:
        'The live page no longer waits on perfect social proof. These text quotes can ship immediately, and the layout is already ready for richer media later.',
      quotes: [
        {
          quote:
            'The value is not just OCR. It is having one weekly routine instead of ten messy chat threads.',
          author: 'Early agent feedback',
          role: 'Text quote placeholder ready for approval',
        },
        {
          quote:
            'Telegram for intake and a cleaner surface for reports is much easier to trust than manual spreadsheets.',
          author: 'Operator workflow summary',
          role: 'Board-audited positioning placeholder',
        },
      ],
    },
    demo: {
      eyebrow: 'Promo demo',
      title: 'A real promo video is embedded now, not a dead placeholder.',
      intro:
        'The section uses the reachable TikTok promo asset from the app repo so the landing page can show a live motion proof point today.',
      points: [
        'Video lives in `public/assets/agentopsify-promo.mp4` for local build portability.',
        'Poster image can be added later without layout changes.',
        'If the final social platform embed strategy changes, this module can swap without redesigning the page.',
      ],
      badge: 'Live asset wired from reachable workspace media',
    },
    contact: {
      eyebrow: 'Telegram only',
      title: 'All public contact and activation now run through Telegram.',
      intro:
        'There is no email capture on the public page in this phase. Agents either launch the bot directly or talk to support through the existing Telegram account.',
      primaryTitle: 'Launch the bot',
      primaryBody: 'Start the product flow, upload screenshots, and move into the Telegram-first onboarding path.',
      primaryCta: 'Open @Agent_Calc_bot',
      secondaryTitle: 'Ask pricing or onboarding questions',
      secondaryBody: 'Use the support account for pack questions, rollout help, or anything that should stay outside the bot flow.',
      secondaryCta: 'Message @ClubAgentOps',
      note: 'Paid packs, processing fee, and VAT are reflected here. Final checkout totals are shown inside the purchase flow.',
    },
    footer: {
      tagline: 'AgentOpsify is built for ClubGG-adjacent operations and is not affiliated with ClubGG.',
      telegram: 'Telegram support',
    },
  },
  el: {
    nav: {
      pricing: 'Τιμολόγηση',
      proof: 'Απόδειξη',
      demo: 'Demo',
      contact: 'Telegram',
      primaryCta: 'Έναρξη στο Telegram',
    },
    hero: {
      eyebrow: 'Greek-first settlement operations για ClubGG agents',
      title: 'Το AgentOpsify μετατρέπει το χάος των screenshots σε καθαρό εβδομαδιαίο settlement flow.',
      subtitle:
        'Χρησιμοποίησε το Telegram για intake και μετά δούλεψε balances, players, credits και reports σε ένα πιο οργανωμένο operating surface.',
      telegramCta: 'Άνοιγμα Telegram bot',
      supportCta: 'Μήνυμα στο Telegram support',
      bullets: [
        '5 δωρεάν credits στο signup',
        'Χτισμένο πάνω σε πραγματικό ClubGG workflow',
        'Βασικά conversion surfaces στα ελληνικά από την πρώτη μέρα',
      ],
    },
    metrics: [
      { value: 'Telegram-first', label: 'Κρατάς το υπάρχον intake habit.' },
      { value: 'Mini App control', label: 'Players, reports και credits σε μία ροή.' },
      { value: 'Λιγότερα λάθη', label: 'Μειώνεται το spreadsheet και copy-paste drift.' },
    ],
    pricing: {
      eyebrow: 'Τιμολόγηση',
      title: 'Ξεκίνα δωρεάν και μετά προχώρησε στα live credit packs.',
      intro:
        'Οι νέοι agents συνεχίζουν να παίρνουν 5 δωρεάν credits για να δοκιμάσουν το flow. Τα paid packs έχουν πλέον τις εγκεκριμένες public τιμές, με EUR0.50 processing fee και τοπικό VAT στο checkout.',
      featuredCard: {
        title: 'Ξεκίνα δωρεάν',
        detail: '5 δωρεάν credits στο signup ώστε ο agent να δοκιμάσει το flow πριν αγοράσει.',
        footnote: 'Τρέχουσα δημόσια προσφορά',
        badge: '5 δωρεάν credits',
      },
      packsCard: {
        title: 'Paid credit packs',
        detail: 'Διάλεξε το pack που ταιριάζει στον όγκο των εβδομαδιαίων screenshots σου.',
        footnote: 'Εγκεκριμένη live τιμολόγηση',
        packs: [
          { credits: '10 Credits', price: 'EUR5' },
          { credits: '50 Credits', price: 'EUR20', badge: 'Best Value' },
          { credits: '100 Credits', price: 'EUR35' },
          { credits: '500 Credits', price: 'EUR150', badge: 'Pro' },
        ],
      },
      bullets: [
        'Στο checkout προστίθεται EUR0.50 processing fee.',
        'Το τοπικό VAT εφαρμόζεται στο checkout όπου απαιτείται.',
        'Το Telegram παραμένει το μόνο public activation και support path.',
      ],
    },
    proof: {
      eyebrow: 'Απόδειξη και εμπιστοσύνη',
      title: 'Τα trust surfaces είναι πλέον έτοιμα για πραγματικά quotes και μελλοντικά screenshot assets.',
      intro:
        'Η σελίδα δεν περιμένει τέλειο social proof. Αυτά τα text quotes μπορούν να μπουν άμεσα και το layout είναι ήδη έτοιμο για richer media αργότερα.',
      quotes: [
        {
          quote:
            'Η αξία δεν είναι μόνο το OCR. Είναι ότι υπάρχει μία εβδομαδιαία ρουτίνα αντί για δέκα μπερδεμένα chat threads.',
          author: 'Early agent feedback',
          role: 'Text quote placeholder έτοιμο για approval',
        },
        {
          quote:
            'Telegram για intake και πιο καθαρό surface για reports είναι πολύ πιο αξιόπιστο από manual spreadsheets.',
          author: 'Operator workflow summary',
          role: 'Board-audited positioning placeholder',
        },
      ],
    },
    demo: {
      eyebrow: 'Promo demo',
      title: 'Υπάρχει πραγματικό promo video embed τώρα, όχι άδειο placeholder.',
      intro:
        'Η ενότητα χρησιμοποιεί το προσβάσιμο TikTok promo asset από το app repo ώστε η landing page να δείχνει live motion proof point σήμερα.',
      points: [
        'Το video βρίσκεται στο `public/assets/agentopsify-promo.mp4` για local build portability.',
        'Μπορεί να προστεθεί poster image αργότερα χωρίς layout αλλαγές.',
        'Αν αλλάξει το τελικό social platform embed strategy, αυτό το module μπορεί να αντικατασταθεί χωρίς redesign.',
      ],
      badge: 'Live asset wired από προσβάσιμο workspace media',
    },
    contact: {
      eyebrow: 'Μόνο Telegram',
      title: 'Όλο το public contact και activation περνά πλέον από το Telegram.',
      intro:
        'Δεν υπάρχει email capture στη δημόσια σελίδα σε αυτή τη φάση. Οι agents είτε ανοίγουν κατευθείαν το bot είτε μιλούν με το υπάρχον Telegram support account.',
      primaryTitle: 'Άνοιγμα bot',
      primaryBody: 'Ξεκίνα το product flow, ανέβασε screenshots και μπες στο Telegram-first onboarding path.',
      primaryCta: 'Άνοιγμα @Agent_Calc_bot',
      secondaryTitle: 'Ερωτήσεις για τιμολόγηση ή onboarding',
      secondaryBody: 'Χρησιμοποίησε το support account για ερωτήσεις για packs, rollout βοήθεια ή οτιδήποτε πρέπει να μείνει εκτός bot flow.',
      secondaryCta: 'Μήνυμα στο @ClubAgentOps',
      note: 'Τα paid packs, το processing fee και το VAT αποτυπώνονται εδώ. Τα τελικά checkout totals φαίνονται μέσα στη ροή αγοράς.',
    },
    footer: {
      tagline: 'Το AgentOpsify είναι φτιαγμένο για ClubGG-adjacent operations και δεν συνδέεται επίσημα με το ClubGG.',
      telegram: 'Telegram support',
    },
  },
}

const socialLinks = [
  { label: 'TikTok', href: '', ready: false },
  { label: 'Instagram', href: '', ready: false },
  { label: 'Telegram', href: 'https://t.me/ClubAgentOps', ready: true },
]

function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const t = copy[locale]

  return (
    <div className="min-h-screen bg-background text-ink">
      <Navbar
        locale={locale}
        onLocaleChange={setLocale}
        nav={t.nav}
      />

      <main>
        <section className="hero-shell">
          <div className="hero-noise" />
          <div className="container-custom">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-8">
                <div className="eyebrow">
                  <Sparkles className="h-4 w-4" />
                  <span>{t.hero.eyebrow}</span>
                </div>

                <div className="space-y-5">
                  <h1 className="display-title max-w-4xl">{t.hero.title}</h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                    {t.hero.subtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://t.me/Agent_Calc_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t.hero.telegramCta}
                  </a>
                  <a
                    href="https://t.me/ClubAgentOps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Send className="h-5 w-5" />
                    {t.hero.supportCta}
                  </a>
                </div>

                <div className="flex flex-wrap gap-3">
                  {t.hero.bullets.map((bullet) => (
                    <div key={bullet} className="chip">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-panel">
                <div className="hero-panel__label">
                  <span>AgentOpsify</span>
                  <span>ClubGG workflow layer</span>
                </div>

                <div className="hero-card-grid">
                  {t.metrics.map((metric) => (
                    <article key={metric.value} className="metric-card">
                      <div className="metric-card__value">{metric.value}</div>
                      <p>{metric.label}</p>
                    </article>
                  ))}
                </div>

                <div className="operations-strip">
                  <div>
                    <p className="operations-strip__title">Telegram</p>
                    <p className="operations-strip__body">Intake, screenshots, quick starts</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-highlight" />
                  <div>
                    <p className="operations-strip__title">Mini App</p>
                    <p className="operations-strip__body">Players, reports, credits, oversight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-shell">
          <div className="container-custom">
            <div className="section-heading">
              <p className="section-kicker">{t.pricing.eyebrow}</p>
              <h2>{t.pricing.title}</h2>
              <p>{t.pricing.intro}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <article className="section-card pricing-accent">
                <div className="pricing-badge">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{t.pricing.featuredCard.footnote}</span>
                </div>
                <h3>{t.pricing.featuredCard.title}</h3>
                <p>{t.pricing.featuredCard.detail}</p>
                <div className="pricing-highlight">{t.pricing.featuredCard.badge}</div>
              </article>

              <article className="section-card">
                <div className="pricing-badge pricing-badge--muted">
                  <TrendingUp className="h-4 w-4" />
                  <span>{t.pricing.packsCard.footnote}</span>
                </div>
                <h3>{t.pricing.packsCard.title}</h3>
                <p>{t.pricing.packsCard.detail}</p>
                <div className="pricing-pack-list">
                  {t.pricing.packsCard.packs.map((pack) => (
                    <div key={`${pack.credits}-${pack.price}`} className="pricing-pack-row">
                      <div>
                        <p className="pricing-pack-row__credits">{pack.credits}</p>
                        {pack.badge ? <span className="pricing-pack-row__badge">{pack.badge}</span> : null}
                      </div>
                      <p className="pricing-pack-row__price">{pack.price}</p>
                    </div>
                  ))}
                </div>
                <ul className="feature-list">
                  {t.pricing.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="proof" className="section-shell section-shell--warm">
          <div className="container-custom">
            <div className="section-heading">
              <p className="section-kicker">{t.proof.eyebrow}</p>
              <h2>{t.proof.title}</h2>
              <p>{t.proof.intro}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {t.proof.quotes.map((quote) => (
                <article key={quote.quote} className="quote-card">
                  <Star className="h-5 w-5 text-highlight" />
                  <p className="quote-card__body">“{quote.quote}”</p>
                  <div>
                    <p className="quote-card__author">{quote.author}</p>
                    <p className="quote-card__role">{quote.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="section-shell">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="section-heading section-heading--tight">
                <p className="section-kicker">{t.demo.eyebrow}</p>
                <h2>{t.demo.title}</h2>
                <p>{t.demo.intro}</p>
                <div className="chip chip--soft">
                  <Play className="h-4 w-4" />
                  <span>{t.demo.badge}</span>
                </div>
                <ul className="feature-list">
                  {t.demo.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="video-frame">
                <video
                  className="video-frame__media"
                  src="/assets/agentopsify-promo.mp4"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="updates" className="section-shell section-shell--accent">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="section-heading section-heading--tight">
                <p className="section-kicker">{t.contact.eyebrow}</p>
                <h2>{t.contact.title}</h2>
                <p>{t.contact.intro}</p>
                <div className="endpoint-callout">
                  <MessageCircle className="h-4 w-4" />
                  <span>Telegram only public path</span>
                </div>
              </div>

              <div className="lead-form">
                <div className="contact-panel-grid">
                  <article className="contact-panel-card">
                    <p className="section-kicker">{t.contact.primaryTitle}</p>
                    <p>{t.contact.primaryBody}</p>
                    <a
                      href="https://t.me/Agent_Calc_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <MessageCircle className="h-5 w-5" />
                      {t.contact.primaryCta}
                    </a>
                  </article>
                  <article className="contact-panel-card">
                    <p className="section-kicker">{t.contact.secondaryTitle}</p>
                    <p>{t.contact.secondaryBody}</p>
                    <a
                      href="https://t.me/ClubAgentOps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Send className="h-5 w-5" />
                      {t.contact.secondaryCta}
                    </a>
                  </article>
                </div>
                <div className="lead-form__footer">
                  <p>{t.contact.note}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footer={t.footer} socialLinks={socialLinks} />
    </div>
  )
}

export default App
