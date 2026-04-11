import { Send } from 'lucide-react'

type FooterProps = {
  footer: {
    tagline: string
    telegram: string
  }
  socialLinks: Array<{
    label: string
    href: string
    ready: boolean
  }>
}

const Footer = ({ footer, socialLinks }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="site-footer__grid">
          <div className="space-y-5">
            <a href="/" className="brand-lockup">
              <div className="brand-lockup__mark">
                <img src="/assets/clubgg-logo.png" alt="AgentOpsify mark" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="brand-lockup__name">AgentOpsify</p>
                <p className="brand-lockup__meta">Settlement workflow infrastructure</p>
              </div>
            </a>
            <p className="site-footer__tagline">{footer.tagline}</p>
          </div>

          <div className="site-footer__block">
            <p className="site-footer__heading">Primary paths</p>
            <a
              href="https://t.me/Agent_Calc_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__link site-footer__link--solid"
            >
              <Send className="h-4 w-4" />
              <span>Launch bot</span>
            </a>
            <a
              href="https://t.me/ClubAgentOps"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__link"
            >
              <span>{footer.telegram}: @ClubAgentOps</span>
            </a>
          </div>

          <div className="site-footer__block">
            <p className="site-footer__heading">Social slots</p>
            {socialLinks.map((link) =>
              link.ready ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social"
                >
                  {link.label}
                </a>
              ) : (
                <span key={link.label} className="site-footer__social site-footer__social--pending">
                  {link.label} pending
                </span>
              ),
            )}
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© {currentYear} AgentOpsify</p>
          <p>Not affiliated with ClubGG</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
