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
      className="fixed bottom-0 w-full z-50 pb-safe bg-white/90 backdrop-blur-xl border-t border-[#d2c5b2]/40 shadow-[0_-4px_20px_rgba(123,88,2,0.08)]"
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
      {page}
      <BottomNav route={route} navigate={navigate} />
    </div>
  )
}

export default App
