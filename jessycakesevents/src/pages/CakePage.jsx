import { useState } from 'react'

const OCCASIONS = [
  { name: 'Anniversaire', icon: 'celebration', desc: 'Bougies, joie & fête', iconBg: 'bg-[#ffdad3] text-[#3e0501]' },
  { name: 'Mariage', icon: 'favorite', desc: 'Romance & féerie', iconBg: 'bg-[#ffddb1] text-[#291800]' },
  { name: 'Baptême', icon: 'child_care', desc: 'Douceur pastel', iconBg: 'bg-[#d3e8d3] text-[#0e1f12]' },
  { name: 'Autre fête', icon: 'auto_awesome', desc: 'Diplôme, baby shower', iconBg: 'bg-[#e6e2dc] text-[#55433f]' },
]

const GUESTS = [
  { count: 5, price: 30000, label: '5 pers.', sub: '~6 000 FCFA / convive', priceClass: 'text-[#964637]' },
  { count: 10, price: 50000, label: '10 pers.', sub: 'Format idéal famille', priceClass: 'text-[#964637]' },
  { count: 20, price: 85000, label: '20 pers.', sub: 'Parfait pour grande fête', priceClass: 'text-[#964637]' },
  { count: 35, price: 195, label: '30+ pers.', sub: 'Grands événements', priceClass: 'text-[#7e5713]', surDevis: true },
]

const SHAPES = [
  { name: 'Rond Classique', icon: 'circle', desc: 'Le charme intemporel', box: 'bg-white text-[#964637]', rounded: 'rounded-full' },
  { name: 'Carré Élégant', icon: 'crop_square', desc: 'Lignes graphiques', box: 'bg-[#f1ede7] text-[#7e5713]', rounded: 'rounded-2xl' },
  { name: 'Pièce Montée', icon: 'layers', desc: '2 ou 3 étages royaux', box: 'bg-[#f1ede7] text-[#964637]', rounded: 'rounded-full' },
  { name: 'Forme Cœur', name2: 'Forme Cœur / Spéciale', icon: 'favorite', desc: 'Tendre & passionné', box: 'bg-[#f1ede7] text-[#964637]', rounded: 'rounded-full' },
]

const FLAVORS = [
  {
    name: 'Chocolat Intense & Praliné croquant',
    title: 'Chocolat Intense & Praliné croquant',
    desc: 'Ganache Valrhona 70%, biscuit moelleux',
    icon: 'cookie',
    iconBg: 'bg-[#56160b] text-white',
  },
  {
    name: 'Vanille de Madagascar & Framboises fraîches',
    title: 'Vanille Bourbon & Framboises',
    desc: 'Gousses de Madagascar et coulis acidulé',
    icon: 'nutrition',
    iconBg: 'bg-[#fec97b] text-[#78520e]',
  },
  {
    name: 'Fruits Rouges & Crème légère',
    title: 'Fruits Rouges & Crème légère',
    desc: 'Mousseline aérienne et morceaux fondants',
    icon: 'temp_preferences_custom',
    iconBg: 'bg-[#ffdad3] text-[#964637]',
  },
  {
    name: 'Caramel Beurre Salé & Spéculoos',
    title: 'Caramel Beurre Salé & Spéculoos',
    desc: 'Caramel fleur de sel de Guérande',
    icon: 'bakery_dining',
    iconBg: 'bg-[#ffddb1] text-[#291800]',
  },
]

const DECORS = [
  { name: 'Épuré floral', icon: 'local_florist', sub: 'Fleurs fraîches', iconBg: 'bg-[#d3e8d3] text-[#0e1f12]', subClass: 'text-[#506353]' },
  { name: 'Doré festif', icon: 'hotel_class', sub: "Feuilles d'or", iconBg: 'bg-[#ffddb1] text-[#7e5713]', subClass: 'text-[#7e5713]' },
  { name: 'Thème enfantin/coloré', icon: 'palette', sub: 'Macarons & joie', iconBg: 'bg-[#ffdad3] text-[#964637]', subClass: 'text-[#964637]' },
]

const STEP_LABELS = {
  1: 'Étape 1 sur 4 : Taille & Événement',
  2: 'Étape 2 sur 4 : Saveurs & Forme',
  3: 'Étape 3 sur 4 : Décor & Message',
  4: 'Étape 4 sur 4 : Récapitulatif Final',
}
const STEP_PCT = { 1: 25, 2: 50, 3: 75, 4: 100 }

export default function CakePage() {
  const [step, setStep] = useState(1)
  const [occasion, setOccasion] = useState('Anniversaire')
  const [guests, setGuests] = useState(GUESTS[1])
  const [shape, setShape] = useState('Rond Classique')
  const [flavor, setFlavor] = useState(FLAVORS[0])
  const [decor, setDecor] = useState(DECORS[0])
  const [message, setMessage] = useState('Joyeux Anniversaire Léa ! 💖')
  const [date, setDate] = useState('2025-05-18')
  const [photoName, setPhotoName] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const price = guests.surDevis ? null : guests.price

  const friendlyDate = () => {
    try {
      const parts = date.split('-')
      const d = new Date(parts[0], parts[1] - 1, parts[2])
      return d.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    } catch {
      return date
    }
  }

  const goToStep = (s) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-[#fdf9f3] text-[#1c1c18] flex flex-col min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="lg:hidden fixed top-0 w-full z-50 pt-safe bg-[#fdf9f3]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(61,39,32,0.04)]">
        <div className="h-16 px-[1.25rem] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAljPWXf5aYb8_U5uazgBK_1pg5jQuy-m2919dT2mNZmtkrrpHn6uV5qRtAi5d4groprO2SMhh_dn14xf7CuGyLmAoSgEGNdxFwZ3RxLn9_DgsmS83EmuXBwwoKcbulthmWW4pAadYMqt8oXbcqQYlVnlsZmt0UXA-Lg_LEXAO2U4bWgiiwbKBhSxkrTT0Hld8zFUU7n_RclQLuOWIHGlR_9cPD_8HheR6hGbOoG08woJ1-NUyHKQNlQRsUv83eEU4"
              alt="Jessy Cakes Events"
              className="h-10 w-10 object-contain rounded-full"
            />
            <div className="flex flex-col min-w-0">
              <span className="fd-headline-sm text-[#1c1c18] truncate leading-tight">
                Jessy Cakes Events
              </span>
              <span className="fd-label-sm text-[#55433f] truncate">Custom Cake</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <a
              aria-label="WhatsApp direct"
              className="w-11 h-11 rounded-full bg-[#859987]/30 flex items-center justify-center text-[#506353] hover:bg-[#859987]/50 transition-colors"
              href="https://wa.me/?text=Bonjour%20Féerie%20&%20Délices"
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
            <a
              aria-label="Appel d'urgence atelier"
              className="w-11 h-11 rounded-full bg-[#ffdad3] flex items-center justify-center text-[#783022] hover:bg-[#ffb4a6] transition-colors"
              href="tel:+33100000000"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <div className="w-8 h-8 rounded-full bg-[#964637] flex items-center justify-center ml-1">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-16 pb-28 lg:pb-12 lg:max-w-3xl lg:mx-auto bg-[#fdf9f3]">
        {/* ---------- EN-TÊTE + PROGRESSION ---------- */}
        <section className="px-[1.25rem] pt-4 pb-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex flex-col min-w-0">
              <span className="fd-label-sm text-[#964637] uppercase tracking-wider">
                ATELIER JESSY CAKES EVENTS
              </span>
              <h1 className="fd-headline-lg-mobile text-[#1c1c18] leading-tight">
                Composez votre gâteau de rêve 🎂
              </h1>
            </div>
            <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-[#ffdad3] flex items-center justify-center text-[#964637] shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">cake</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="fd-label-md text-[#1c1c18]">{STEP_LABELS[step]}</span>
              <span className="fd-label-sm px-2 py-0.5 rounded-full bg-[#ffddb1] text-[#291800]">
                {STEP_PCT[step]}%
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#ebe8e2] rounded-full overflow-hidden flex">
              <div
                className="h-full bg-[#964637] transition-all duration-500 rounded-full"
                style={{ width: `${STEP_PCT[step]}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-4 gap-1 mt-3 text-center">
              {[1, 2, 3, 4].map((s) => (
                <button
                  key={s}
                  className="flex flex-col items-center gap-1 group"
                  onClick={() => goToStep(s)}
                  type="button"
                >
                  <span
                    className={`w-full h-1.5 rounded-full transition-colors ${
                      s <= step ? 'bg-[#964637]' : 'bg-[#e6e2dc]'
                    }`}
                  ></span>
                  <span
                    className={`text-[10px] font-bold ${
                      s <= step ? 'text-[#964637]' : 'text-[#55433f]'
                    }`}
                  >
                    {['1. Occasion', '2. Saveurs', '3. Décor', '4. Finalisation'][s - 1]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- RÉSUMÉ LIVE ---------- */}
        <div className="px-[1.25rem] mb-2">
          <div className="bg-[#f7f3ed] rounded-lg p-2 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#ffddb1] flex items-center justify-center text-[#7e5713] shrink-0">
                <span className="material-symbols-outlined text-[20px]">celebration</span>
              </div>
              <div className="min-w-0">
                <p className="fd-label-sm text-[#55433f] truncate">
                  {occasion} • {guests.count} pers. • {shape.split(' ')[0]}
                </p>
                <p className="fd-headline-sm text-[#964637]">
                  {price === null ? 'Sur devis' : `${price.toLocaleString('fr-FR')} FCFA`}
                </p>
              </div>
            </div>
            <span className="fd-label-sm bg-[#d3e8d3] text-[#0e1f12] px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span> Fait-Maison
            </span>
          </div>
        </div>

        {/* ================= WIZARD ================= */}
        <form
          className="px-[1.25rem] pb-6 flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* ============ STEP 1 ============ */}
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <div className="relative rounded-lg overflow-hidden bg-[#f1ede7] shadow-sm">
                <div
                  className="w-full h-44 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWmr5ogt-dfck1Giq1u7bBSpD5EOIB7q6mK9MKd3C9PSDSQe0c-h1ZgZ4yafOU0O8CXxlpoaiOX8phdXnPtgmmKg7gDXcRzp5CFzSRDmWOXfnHZBYAXUZAS431cnxzvrevLdD95QnoEMpm26hyWD2GoCyhcYqMVC43C450or8L-_Rk3C413hwNMIIL1_LC-5vUjn-KveaQc0pjLNhNIoPHEOGXHF2dW3z-PUXLUQTL2hCJY5qVdg')",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="fd-label-md text-white bg-[#964637]/90 px-3 py-1 rounded-full backdrop-blur-sm">
                      Artisanat Pâtissier d'Émotion
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h2 className="fd-headline-sm text-[#1c1c18]">1. Pour quelle occasion ?</h2>
                  <span className="fd-label-sm text-[#964637] font-bold">Obligatoire</span>
                </div>
                <p className="fd-body-sm text-[#55433f]">
                  Sélectionnez la fête pour nous inspirer le thème et les finitions.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {OCCASIONS.map((o) => {
                    const active = occasion === o.name
                    return (
                      <button
                        key={o.name}
                        className={`group relative p-4 rounded-lg text-left shadow-sm flex flex-col gap-2 transition-all active:scale-[0.98] ${
                          active ? 'bg-[#ffdad3]/40' : 'bg-white'
                        }`}
                        onClick={() => setOccasion(o.name)}
                        type="button"
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${o.iconBg}`}
                        >
                          <span className="material-symbols-outlined text-[26px]">{o.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`fd-label-lg font-bold ${active ? 'text-[#964637]' : 'text-[#1c1c18]'}`}
                          >
                            {o.name}
                          </span>
                          <span className="fd-body-sm text-[#55433f]">{o.desc}</span>
                        </div>
                        <div
                          className={`absolute top-3 right-3 w-6 h-6 rounded-full bg-[#964637] text-white flex items-center justify-center ${
                            active ? '' : 'hidden'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px]">done</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h2 className="fd-headline-sm text-[#1c1c18]">2. Nombre de parts / invités</h2>
                  <span className="fd-label-sm text-[#506353]">Portions généreuses</span>
                </div>
                <p className="fd-body-sm text-[#55433f]">
                  Touchez simplement le nombre d'invités attendus.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {GUESTS.map((g) => {
                    const active = guests.count === g.count
                    return (
                      <button
                        key={g.count}
                        className={`group relative p-4 rounded-lg text-left shadow-sm transition-all active:scale-[0.98] ${
                          active ? 'bg-[#ffdad3]/40' : 'bg-white'
                        }`}
                        onClick={() => setGuests(g)}
                        type="button"
                      >
                        <span className="fd-headline-sm text-[#1c1c18] block">{g.label}</span>
                        <span className={`fd-headline-md font-bold block mt-1 ${g.priceClass}`}>
                          {g.surDevis ? 'Sur devis' : `${g.price.toLocaleString('fr-FR')} FCFA`}
                        </span>
                        <span className="fd-label-sm text-[#55433f] block mt-1">{g.sub}</span>
                        <div
                          className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center ${
                            active ? 'bg-[#964637] text-white' : 'bg-[#e6e2dc]'
                          }`}
                        >
                          {active && (
                            <span className="material-symbols-outlined text-[14px]">done</span>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="pt-1">
                <button
                  className="w-full lg:h-12 rounded-full bg-[#964637] text-white fd-label-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#d87a68] active:scale-[0.98] transition-all"
                  onClick={() => goToStep(2)}
                  type="button"
                >
                  <span>Continuer vers les Saveurs &amp; Formes</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* ============ STEP 2 ============ */}
          {step === 2 && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h2 className="fd-headline-sm text-[#1c1c18]">3. Forme du gâteau</h2>
                  <span className="fd-label-sm text-[#55433f]">Design artisanal</span>
                </div>
                <p className="fd-body-sm text-[#55433f]">
                  Choisissez l'architecture géométrique de votre délice.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SHAPES.map((s) => {
                    const active = shape === s.name2 || shape === s.name
                    return (
                      <button
                        key={s.name}
                        className={`group relative p-4 rounded-lg text-center shadow-sm flex flex-col items-center gap-2 transition-all active:scale-[0.98] ${
                          active ? 'bg-[#ffdad3]/30' : 'bg-white'
                        }`}
                        onClick={() => setShape(s.name2 || s.name)}
                        type="button"
                      >
                        <div
                          className={`w-14 h-14 lg:w-12 lg:h-12 ${s.rounded} ${s.box} shadow-sm flex items-center justify-center`}
                        >
                          <span className="material-symbols-outlined text-[30px]">{s.icon}</span>
                        </div>
                        <div>
                          <span className="fd-label-lg text-[#1c1c18] font-bold block">
                            {s.name}
                          </span>
                          <span className="fd-body-sm text-[12px] text-[#55433f]">{s.desc}</span>
                        </div>
                        <div
                          className={`absolute top-2 right-2 w-5 h-5 rounded-full bg-[#964637] text-white flex items-center justify-center ${
                            active ? '' : 'hidden'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[13px]">done</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h2 className="fd-headline-sm text-[#1c1c18]">
                    4. Parfum &amp; Saveur principale
                  </h2>
                  <span className="fd-label-sm text-[#506353]">Ingrédients bio &amp; frais</span>
                </div>
                <p className="fd-body-sm text-[#55433f]">
                  Recettes gourmandes élaborées chaque matin dans notre laboratoire.
                </p>
                <div className="flex flex-col gap-1">
                  {FLAVORS.map((f) => {
                    const active = flavor.name === f.name
                    return (
                      <button
                        key={f.name}
                        className={`w-full p-4 rounded-lg text-left shadow-sm flex items-center justify-between transition-all active:scale-[0.99] ${
                          active ? 'bg-[#ffdad3]/20' : 'bg-white'
                        }`}
                        onClick={() => setFlavor(f)}
                        type="button"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-inner ${f.iconBg}`}
                          >
                            <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="fd-label-lg text-[#1c1c18] font-bold">{f.title}</span>
                            <span className="fd-body-sm text-[#55433f]">{f.desc}</span>
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                            active ? 'bg-[#964637] text-white' : 'bg-[#e6e2dc]'
                          }`}
                        >
                          {active && (
                            <span className="material-symbols-outlined text-[16px]">done</span>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  className="w-1/3 lg:h-12 rounded-full bg-[#e6e2dc] text-[#1c1c18] fd-label-lg flex items-center justify-center gap-1 active:scale-[0.98]"
                  onClick={() => goToStep(1)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  <span>Retour</span>
                </button>
                <button
                  className="flex-1 lg:h-12 rounded-full bg-[#964637] text-white fd-label-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#d87a68] active:scale-[0.98]"
                  onClick={() => goToStep(3)}
                  type="button"
                >
                  <span>Passer au Décor</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* ============ STEP 3 ============ */}
          {step === 3 && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h2 className="fd-headline-sm text-[#1c1c18]">5. Style de Décoration</h2>
                  <span className="fd-label-sm text-[#964637] font-bold">Inclus</span>
                </div>
                <p className="fd-body-sm text-[#55433f]">
                  L'ambiance visuelle créée avec nos décors comestibles.
                </p>
                <div className="grid grid-cols-3 gap-1">
                  {DECORS.map((d) => {
                    const active = decor.name === d.name
                    return (
                      <button
                        key={d.name}
                        className={`p-2 rounded-lg text-center shadow-sm flex flex-col items-center gap-1.5 transition-all active:scale-[0.98] ${
                          active ? 'bg-[#ffddb1]/40' : 'bg-white'
                        }`}
                        onClick={() => setDecor(d)}
                        type="button"
                      >
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center ${d.iconBg}`}
                        >
                          <span className="material-symbols-outlined text-[22px]">{d.icon}</span>
                        </div>
                        <span className="fd-label-md text-[#1c1c18]">{d.name}</span>
                        <span className={`text-[10px] ${d.subClass}`}>{d.sub}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="fd-headline-sm text-[#1c1c18]" htmlFor="cake-inscription">
                  6. Message calligraphié sur le gâteau
                </label>
                <p className="fd-body-sm text-[#55433f]">
                  Inscrit délicatement au cornet de chocolat ou sur plaque en sucre.
                </p>
                <div className="relative">
                  <input
                    className="w-full lg:h-12 px-4 pr-12 rounded-lg bg-white text-[#1c1c18] text-[15px] leading-[23px] focus:outline-none shadow-sm"
                    id="cake-inscription"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: Joyeux Anniversaire Lucas (8 ans)"
                    type="text"
                    value={message}
                  />
                  <span className="material-symbols-outlined absolute right-4 top-4 text-[#55433f] text-[20px]">
                    edit_note
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="fd-headline-sm text-[#1c1c18]" htmlFor="cake-date">
                  7. Date de retrait ou de dégustation
                </label>
                <p className="fd-body-sm text-[#55433f]">
                  Prévoir un minimum de 48h afin que notre atelier prépare tout avec amour.
                </p>
                <div className="relative">
                  <input
                    className="w-full lg:h-12 px-4 pr-12 rounded-lg bg-white text-[#1c1c18] fd-label-lg focus:outline-none shadow-sm"
                    id="cake-date"
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    value={date}
                  />
                  <span className="material-symbols-outlined absolute right-4 top-4 text-[#964637] text-[22px] pointer-events-none">
                    calendar_month
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[#506353] text-[18px]">
                    verified
                  </span>
                  <span className="fd-label-sm text-[#506353]">
                    Créneau réservé et bloqué à l'atelier sans avance
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="fd-headline-sm text-[#1c1c18]">
                  8. Photo d'inspiration (facultative)
                </span>
                <p className="fd-body-sm text-[#55433f]">
                  Une capture d'écran Pinterest, Instagram ou un dessin d'enfant ? Partagez-le nous
                  !
                </p>
                <div
                  className="p-4 rounded-lg bg-white shadow-sm flex flex-col items-center justify-center gap-2 text-center cursor-pointer transition-all active:scale-[0.99]"
                  onClick={() => document.getElementById('cake-photo-input')?.click()}
                >
                  <input
                    accept="image/*"
                    className="hidden"
                    id="cake-photo-input"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) setPhotoName(file.name)
                    }}
                    type="file"
                  />
                  <div className="w-14 lg:w-12 lg:h-12 rounded-full bg-[#ffddb1] flex items-center justify-center text-[#7e5713] shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">add_a_photo</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="fd-label-lg text-[#964637] font-bold">
                      📷 Ajouter une photo ou capture d'écran
                    </span>
                    <span
                      className={`fd-body-sm ${photoName ? 'text-[#964637] font-bold' : 'text-[#55433f]'}`}
                    >
                      {photoName ? `Image attachée : ${photoName} ✅` : 'Format JPG, PNG ou capture mobile'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  className="w-1/3 lg:h-12 rounded-full bg-[#e6e2dc] text-[#1c1c18] fd-label-lg flex items-center justify-center gap-1 active:scale-[0.98]"
                  onClick={() => goToStep(2)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  <span>Retour</span>
                </button>
                <button
                  className="flex-1 lg:h-12 rounded-full bg-[#964637] text-white fd-label-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#d87a68] active:scale-[0.98]"
                  onClick={() => goToStep(4)}
                  type="button"
                >
                  <span>Voir le Récapitulatif</span>
                  <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                </button>
              </div>
            </div>
          )}

          {/* ============ STEP 4 ============ */}
          {step === 4 && (
            <div className="flex flex-col gap-6">
              <div className="text-center flex flex-col items-center gap-1">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#d3e8d3] text-[#0e1f12] mb-1">
                  <span className="material-symbols-outlined text-[28px]">task_alt</span>
                </span>
                <h2 className="fd-headline-lg-mobile text-[#1c1c18]">Votre Création Gourmande</h2>
                <p className="fd-body-sm text-[#55433f]">
                  Tout est modifiable jusqu'à validation finale par téléphone.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md flex flex-col gap-4 relative overflow-hidden">
                <div className="w-full h-1 bg-gradient-to-r from-[#964637] via-[#7e5713] to-[#964637] absolute top-0 left-0"></div>
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#964637] text-[24px]">
                      celebration
                    </span>
                    <div className="flex flex-col">
                      <span className="fd-label-sm text-[#55433f]">Événement &amp; Portion</span>
                      <span className="fd-label-lg text-[#1c1c18] font-bold">
                        {occasion} • {guests.count} personnes
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-[#964637] fd-label-md"
                    onClick={() => goToStep(1)}
                    type="button"
                  >
                    Modifier
                  </button>
                </div>
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#7e5713] text-[24px]">
                      cookie
                    </span>
                    <div className="flex flex-col">
                      <span className="fd-label-sm text-[#55433f]">Forme &amp; Saveur</span>
                      <span className="fd-label-lg text-[#1c1c18] font-bold">
                        {shape} • {flavor.title.split('&')[0].trim()}
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-[#964637] fd-label-md"
                    onClick={() => goToStep(2)}
                    type="button"
                  >
                    Modifier
                  </button>
                </div>
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#506353] text-[24px]">
                      stylus_note
                    </span>
                    <div className="flex flex-col">
                      <span className="fd-label-sm text-[#55433f]">
                        Finition &amp; Calligraphie
                      </span>
                      <span className="fd-label-lg text-[#1c1c18] font-bold italic">
                        « {message} »
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-[#964637] fd-label-md"
                    onClick={() => goToStep(3)}
                    type="button"
                  >
                    Modifier
                  </button>
                </div>
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#964637] text-[24px]">
                      event
                    </span>
                    <div className="flex flex-col">
                      <span className="fd-label-sm text-[#55433f]">Date souhaitée</span>
                      <span className="fd-label-lg text-[#1c1c18] font-bold">
                        {friendlyDate()}
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-[#964637] fd-label-md"
                    onClick={() => goToStep(3)}
                    type="button"
                  >
                    Modifier
                  </button>
                </div>
                <div className="bg-[#f1ede7] rounded-lg p-4 flex items-center justify-between mt-1">
                  <div className="flex flex-col">
                    <span className="fd-label-sm text-[#55433f] uppercase tracking-wider">
                      Prix estimé
                    </span>
                    <span className="fd-body-sm text-[12px] text-[#506353]">
                      Paiement au retrait à l'atelier
                    </span>
                  </div>
                  <span className="fd-display-lg-mobile text-[#964637] font-bold">
                    {price === null ? 'Sur devis' : `${price.toLocaleString('fr-FR')} FCFA`}
                  </span>
                </div>
              </div>

              <div className="bg-[#d3e8d3]/30 rounded-lg p-4 flex items-start gap-2 shadow-sm">
                <span className="material-symbols-outlined text-[#506353] text-[22px] mt-0.5">
                  verified_user
                </span>
                <div className="flex flex-col">
                  <span className="fd-label-md text-[#0e1f12] font-bold">
                    Zéro paiement requis aujourd'hui
                  </span>
                  <p className="fd-body-sm text-[#55433f] mt-0.5">
                    Notre cheffe pâtissière vous appelle sous 2 heures pour confirmer les détails et
                    convenir de l'horaire précis.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="fd-label-lg text-[#1c1c18]" htmlFor="client-tel">
                  Votre numéro de téléphone pour validation
                </label>
                <input
                  className="w-full lg:h-12 px-4 rounded-lg bg-white text-[#1c1c18] text-[15px] leading-[23px] focus:outline-none shadow-sm"
                  id="client-tel"
                  placeholder="06 12 34 56 78"
                  type="tel"
                />
              </div>

              <button
                className="w-full lg:h-14 h-16 rounded-full bg-[#964637] text-white fd-headline-sm flex items-center justify-center gap-2 shadow-xl hover:bg-[#d87a68] active:scale-[0.98] transition-all"
                onClick={() => setShowSuccess(true)}
                type="button"
              >
                <span>Envoyer ma commande 🎂</span>
              </button>
              <p className="fd-label-sm text-center text-[#55433f]">
                Paiement à la confirmation • Modification gratuite jusqu'à 48h avant
              </p>
            </div>
          )}
        </form>

        {/* ---------- FAB ---------- */}
        <aside className="fixed bottom-24 lg:bottom-6 right-[1.25rem] z-40">
          <a
            className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full bg-[#506353] text-white shadow-[0_8px_24px_-4px_rgba(61,39,32,0.18)] hover:bg-[#859987] transition-all active:scale-95"
            href="https://wa.me/?text=Bonjour,%20j'ai%20besoin%20d'aide"
            rel="noopener"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">support_agent</span>
            <span className="fd-label-md tracking-wide">Besoin d'aide ?</span>
          </a>
        </aside>

        {/* ---------- MODALE SUCCÈS ---------- */}
        {showSuccess && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center px-[1.25rem]">
            <div className="w-full max-w-md bg-white rounded-t-xl rounded-b-lg p-10 shadow-2xl flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-[#d3e8d3] flex items-center justify-center text-[#506353] shadow-sm">
                <span className="material-symbols-outlined lg:text-[36px] text-[44px]">cake</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="fd-headline-lg-mobile text-[#1c1c18]">Commande Reçue !</span>
                <p className="fd-body-md text-[#55433f]">
                  Votre demande pour <strong>{occasion}</strong> a bien été transmise à notre
                  atelier.
                </p>
              </div>
              <div className="bg-[#f1ede7] p-4 rounded-lg w-full text-left flex flex-col gap-1">
                <span className="fd-label-md text-[#964637] font-bold">Prochaine étape :</span>
                <span className="fd-body-sm text-[#55433f]">
                  Nous examinons vos choix et vous confirmons le bon de préparation par SMS/WhatsApp
                  dans la journée.
                </span>
              </div>
              <button
                className="w-full lg:h-12 rounded-full bg-[#964637] text-white fd-label-lg shadow-md hover:bg-[#d87a68]"
                onClick={() => {
                  setShowSuccess(false)
                  goToStep(1)
                }}
                type="button"
              >
                Revenir à l'accueil
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
