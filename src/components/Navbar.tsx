import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

type NavbarProps = {
  locale: 'en' | 'el'
  onLocaleChange: (locale: 'en' | 'el') => void
  nav: {
    pricing: string
    proof: string
    demo: string
    contact: string
    primaryCta: string
  }
}

const navLinks = (nav: NavbarProps['nav']) => [
  { name: nav.pricing, href: '#pricing' },
  { name: nav.proof, href: '#proof' },
  { name: nav.demo, href: '#demo' },
  { name: nav.contact, href: '#updates' },
]

const Navbar = ({ locale, onLocaleChange, nav }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="container-custom site-nav__inner">
        <a href="/" className="brand-lockup">
          <div className="brand-lockup__mark">
            <img src="/assets/clubgg-logo.png" alt="AgentOpsify mark" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="brand-lockup__name">AgentOpsify</p>
            <p className="brand-lockup__meta">ClubGG operations layer</p>
          </div>
        </a>

        <div className="site-nav__desktop">
          {navLinks(nav).map((link) => (
            <a key={link.name} href={link.href} className="site-nav__link">
              {link.name}
            </a>
          ))}

          <div className="locale-toggle" aria-label="Language toggle">
            <button
              type="button"
              className={locale === 'en' ? 'locale-toggle__button locale-toggle__button--active' : 'locale-toggle__button'}
              onClick={() => onLocaleChange('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={locale === 'el' ? 'locale-toggle__button locale-toggle__button--active' : 'locale-toggle__button'}
              onClick={() => onLocaleChange('el')}
            >
              EL
            </button>
          </div>

          <a
            href="https://t.me/Agent_Calc_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav__cta"
          >
            {nav.primaryCta}
          </a>
        </div>

        <button
          className="site-nav__menu-button"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          type="button"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="site-nav__mobile">
          {navLinks(nav).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="site-nav__mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="locale-toggle">
            <button
              type="button"
              className={locale === 'en' ? 'locale-toggle__button locale-toggle__button--active' : 'locale-toggle__button'}
              onClick={() => onLocaleChange('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={locale === 'el' ? 'locale-toggle__button locale-toggle__button--active' : 'locale-toggle__button'}
              onClick={() => onLocaleChange('el')}
            >
              EL
            </button>
          </div>

          <a
            href="https://t.me/Agent_Calc_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav__cta site-nav__cta--mobile"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {nav.primaryCta}
          </a>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
