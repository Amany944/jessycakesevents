import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import CakePage from './pages/CakePage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import AccountPage from './pages/AccountPage.jsx'

const ROUTES = ['/', '/galerie', '/gateaux', '/reserver', '/mon-espace']

function BottomNav({ route, navigate }) {
  const items = [
    { path: '/', icon: 'home', label: 'Accueil' },
    { path: '/gateaux', icon: 'cake', label: 'Gâteaux' },
    { path: '/reserver', icon: 'event_available', label: 'Réserver' },
    { path: '/galerie', icon: 'photo_library', label: 'Galerie' },
    { path: '/mon-espace', icon: 'account_circle', label: 'Mon Espace' },
  ]
  return (
    <nav
      className="lg:hidden fixed bottom-0 w-full z-50 pb-safe bg-white/90 backdrop-blur-xl border-t border-[#d2c5b2]/40 shadow-[0_-4px_20px_rgba(123,88,2,0.08)]"
      style={{ backgroundColor: 'rgba(255,248,244,0.9)' }}
    >
      <div className="flex justify-around items-center h-16 px-1">
        {items.map((item) => {
          const active = route === item.path
          return (
            <a
              key={item.path}
              href={item.path}
              aria-current={active ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault()
                navigate(item.path)
              }}
              className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-all active:scale-95 cursor-pointer ${
                active ? 'text-[#7b5802] font-bold' : 'text-[#4e4637] hover:text-[#7b5802]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-[11px] leading-[14px] tracking-[0.05em] font-bold mt-0.5">
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

function TopNav({ route, navigate }) {
  const items = [
    { path: '/', label: 'Accueil' },
    { path: '/gateaux', label: 'Gâteaux' },
    { path: '/reserver', label: 'Réserver' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/mon-espace', label: 'Mon Espace' },
  ]
  return (
    <nav className="hidden lg:block fixed top-0 w-full z-50 bg-[#fff8f4]/95 backdrop-blur-xl border-b border-[#d2c5b2]/40 shadow-[0_1px_10px_rgba(123,88,2,0.06)]">
      <div className="h-16 max-w-6xl mx-auto px-8 flex items-center justify-between gap-8">
        <div
          className="flex items-center gap-3 min-w-0 cursor-pointer shrink-0"
          onClick={() => navigate('/')}
        >
          <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#c59a45] via-[#ffdea6] to-[#7b5802] shadow-sm">
            <img
              alt="Jessy Cakes Events Logo"
              className="h-10 w-10 object-cover rounded-full bg-[#fff1e6]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1O2A2w0W8z3rv2hBkmi1IN0NXCVt-S937SKW8J2fbuC3oLQkgWdFHmJXUAsRFZRXfoOLdSKykstotvOzUx9MQlL3GwBPLhQ62dcBL2Bv6Yz2CDlAC5TZKOmqc0QLn9y38yH_l3T9wiRdNEpe0fkTIKCaabdBrGYaWnHkFZL0_gwtUWnWu1d6K7V4vesftJ7uXAv4m_rVFmJrMTrAHVQIwiO42SVC4jvX0-KTYdP3XbCadcJx9NUWUS5m22RkI7-E"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="jc-headline-sm text-[18px] leading-tight text-[#241a0e]">
              Jessy Cakes Events
            </span>
            <span className="jc-label-sm text-[#7b5802] truncate">
              Brazzaville • Pâtisserie &amp; Événements
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {items.map((item) => {
            const active = route === item.path
            return (
              <a
                key={item.path}
                href={item.path}
                aria-current={active ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(item.path)
                }}
                className={`relative flex items-center h-16 px-4 text-[15px] tracking-wide transition-colors cursor-pointer ${
                  active
                    ? 'text-[#7b5802] font-bold'
                    : 'text-[#4e4637] hover:text-[#7b5802]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-3 right-3 bottom-2 h-[3px] rounded-full bg-gradient-to-r from-[#c59a45] to-[#7b5802] transition-opacity ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            )
          })}
          <div className="flex items-center gap-1.5 ml-3 pl-5 border-l border-[#d2c5b2]/40">
            <a
              aria-label="WhatsApp direct"
              className="w-10 h-10 rounded-full bg-[#fdeeef] border border-[#ffdadc]/50 flex items-center justify-center text-[#7c5357] hover:bg-[#ffdadc]/30 transition-all shadow-sm"
              href="https://wa.me/242069499512?text=Bonjour%20Jessy%20Cakes%20Events,%20je%20souhaite%20r%C3%A9server%20une%20prestation%20%C3%A0%20Brazzaville"
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[19px]">chat</span>
            </a>
            <a
              aria-label="Appeler l'atelier"
              className="w-10 h-10 rounded-full bg-[#ffdea6] border border-[#7b5802]/20 flex items-center justify-center text-[#5d4200] hover:bg-[#eebf66] transition-all shadow-sm"
              href="tel:+242069499512"
            >
              <span className="material-symbols-outlined text-[19px]">call</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash.replace(/^#/, '')
    return ROUTES.includes(hash) ? hash : '/'
  })

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '')
      setRoute(ROUTES.includes(hash) ? hash : '/')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (path) => {
    window.location.hash = path
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const pageProps = { navigate }

  let page
  switch (route) {
    case '/galerie':
      page = <GalleryPage {...pageProps} />
      break
    case '/gateaux':
      page = <CakePage {...pageProps} />
      break
    case '/reserver':
      page = <BookingPage {...pageProps} />
      break
    case '/mon-espace':
      page = <AccountPage {...pageProps} />
      break
    default:
      page = <HomePage {...pageProps} />
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <TopNav route={route} navigate={navigate} />
      {page}
      <BottomNav route={route} navigate={navigate} />
    </div>
  )
}

export default App
