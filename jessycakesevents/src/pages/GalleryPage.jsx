import { useState } from 'react'

const ITEMS = [
  {
    id: 1,
    category: 'gateaux',
    badge: "Pâtisserie d'Art",
    liked: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvErvbsrZ3JercEsoR28j1I0aRAKD5HfhsDpg8ILp3U6h1j3T5segD2AEGniXJtlil60xyewks4NFL6QUQlsykMGYU_QwTZrXX4vZB0QuzXV_MbK6ZtI_Hvr16P1ib2S02XtGm7MOrhA8vcHL-cSZU3jxeCSX-aL9DtvcYJsU8GGeyAJEO30LW9g-URQ7kZMPDkk-GGvqSMqNj3xorA13LkXFC4GN5Dhu-IysYEXT3X7-jmRfn7g',
    alt: 'Gâteau de fête luxueux 3 étages Jessy Cakes',
    title: "Gâteau d'Anniversaire 3 Étages & Feuille d'Or",
    desc: "Création royale sublimée d'or comestible, tour de macarons assortis et douceurs gourmandes sur buffet brodé.",
    location: 'Atelier Mfilou, Brazzaville',
    priceLabel: 'À partir de',
    price: '185 000 FCFA',
    cta: { label: 'Commander', icon: 'arrow_forward', style: 'primary' },
    lightbox: {
      title: "Gâteau d'Anniversaire 3 Étages & Feuille d'Or",
      category: "Pâtisserie d'Art - Atelier Mfilou, Brazzaville",
      description:
        "Gâteau signature 3 niveaux orné de feuilles d'or comestibles 24K, macarons artisanaux et fleurs en sucre réalisées à la main.",
    },
  },
  {
    id: 2,
    category: 'deco',
    badge: 'Décoration de Salle',
    liked: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6RvmKBeku1jsigNtjNRAQu_MQ3to0nUwk-yM_sSdBQPTAQxGuj66ebrmYOVbuOL0Uu5-AMp0dC1SG_4jH1oPUAuE1Gh8OLRSifwpMWVM6NPuzZSSZ7M3mWX3FgQ-8wFH6BvKW28nYnzlqXCe2xV6QcAp5YQlbJo_ahXwUw1ZHpQWFsPEAHJ2Pdl9UYfUBv8ZcpThluMklva6yvaBCoq7TpQjmbi7yN6Qybx-oq3eFlYTLBc39Fw',
    alt: 'Grand banquet de mariage féerique Jessy Cakes Events',
    title: 'Scénographie Mariage Prestige & Arches Florales',
    desc: "Arche monumentale de fleurs fraîches, cascades lumineuses LED et vaisselle dorée pour 250 convives d'honneur.",
    location: 'Salle Polyvalente, Bacongo',
    priceLabel: 'Formule complète',
    price: 'Sur Devis',
    cta: { label: 'Devis Déco', icon: 'receipt_long', style: 'secondary' },
    lightbox: {
      title: 'Scénographie Mariage Prestige & Arches Florales',
      category: 'Décoration de Salle - Bacongo, Brazzaville',
      description:
        'Mise en scène complète pour grand banquet nuptial : arche majestueuse en roses blanches, lustres scintillants et art de table féerique doré.',
    },
  },
  {
    id: 3,
    category: 'cortege',
    badge: 'Décoration Véhicule',
    liked: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFop37Gi-Cz6Wqkb_55mJOG_0uX6ogHyvM_A1ZbILWjYrq5C-ZRYAulAwXVX8r_-mppMXSEyoDGE2S0V00Gnou6WnqDsU97_9jYMf2bSgcte7UtfmdIbbTgLivDcWiUrQgZ37wWi5mgjQDKDf66m-l4Mtr_8QWi2nZBj1Ab38KOWmLmatnFdF2WiXSmAMqbwiIZ_Q-kA1v8SEjGYDgmcRTY50zQ2itkJ1DA8_YArnwx05tEZG7pw',
    alt: 'Rolls-Royce ornée de fleurs fraîches pour cortège nuptial Jessy Cakes',
    title: 'Fleurissement Rolls-Royce & Voiture des Mariés',
    desc: "Habillage floral d'exception, gerbes d'eucalyptus frais, rubans satinés dorés et plaque commémorative sur mesure.",
    location: 'Centre-ville, Brazzaville',
    priceLabel: 'Prestation auto',
    price: '120 000 FCFA',
    cta: { label: 'Réserver', icon: 'calendar_month', style: 'primary' },
    lightbox: {
      title: 'Fleurissement Rolls-Royce & Voiture des Mariés',
      category: 'Cortège Prestige - Centre-ville, Brazzaville',
      description:
        "Parure florale raffinée sur véhicule de prestige, rubans en soie dorée et escorte élégante au cœur de la capitale.",
    },
  },
  {
    id: 4,
    category: 'photo',
    badge: 'Photo & Vidéo',
    liked: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRKn8yblHM2Dl2nRDc7svp87FLVbN00xEIfGSJquhro0HfTydxz4qaTjIpoH8NdYEtTerZFlqOlPUsYDGQslJyFsYorhSp4PTET32CUOZhUgNT7xlSwoAFBZcrGenLtE2praXK4VDXHemAcT_InlQJaRQKGaUS6ZJJTvRBelS-eVSJhL7dxuNqRByOnWCbviNokLAZj4xzSiKWhWcbvRTKpZbFaFO2V-EG8-XhJJsCuCXkYQyQiA',
    alt: "Couple radieux lors d'un shooting de mariage au coucher de soleil à Brazzaville",
    title: 'Séance Photo Nuptiale au Coucher de Soleil',
    desc: "Immortalisation des émotions authentiques des mariés, mise en valeur des étoffes et bouquet sur mesure Jessy Cakes.",
    location: 'Bord du fleuve Congo, Brazzaville',
    priceLabel: 'Pack Reportage',
    price: '250 000 FCFA',
    cta: { label: 'Voir Détails', icon: 'photo_camera', style: 'primary' },
    lightbox: {
      title: 'Séance Photo Nuptiale au Coucher de Soleil',
      category: 'Shooting Fleuve Congo, Brazzaville',
      description:
        "Instants de complicité capturés sous la lumière dorée du crépuscule sur les rives du fleuve Congo, tenues traditionnelles et couture moderne.",
    },
  },
]

const FILTERS = [
  { id: 'all', label: 'Tout voir' },
  { id: 'gateaux', label: '🎂 Pièces Montées & Gâteaux' },
  { id: 'deco', label: '🏛️ Décoration de Salle' },
  { id: 'cortege', label: '🚗 Cortège & Voitures' },
  { id: 'photo', label: '📸 Shooting & Photo' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('deco')
  const [likes, setLikes] = useState(() =>
    Object.fromEntries(ITEMS.map((i) => [i.id, i.liked]))
  )
  const [lightbox, setLightbox] = useState(null)
  const [toast, setToast] = useState(null)

  const showToast = (message) => {
    setToast({ message, key: Date.now() })
    setTimeout(() => setToast(null), 2200)
  }

  const toggleLike = (id) => {
    setLikes((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      showToast(
        next[id] ? 'Ajouté à vos inspirations coup de cœur ! ❤️' : 'Retiré des coups de cœur'
      )
      return next
    })
  }

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  return (
    <div className="bg-[#fff8f4] text-[#241a0e] flex flex-col min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-[#fff8f4]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(42,31,19,0.06)] pt-safe">
        <div className="h-16 px-[0.875rem] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-[0_2px_8px_rgba(197,154,69,0.2)] bg-[#ffead8]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIbVR_iVMp7lrOBYq17vbE3vikc8vYtVDMiLVp2rkMXnQkf3XcNXXbQqpHrgvxKsBGDRvs5bNMDorvhjObmS9GI8KHl-KIMGNEhIolPgZ2mawNJYv-ne1t-mxJv4HfWZTlAgpjRNk44pmOKimiPNSTe00e5Z82jWH4kNg6s2dHbJHqGB8foblXGlL6VIxaAOCxYWOFHQ9ipvReD_udVvaWq9sfB-VDerdHxctz8Ahkg4J5OokhM3TWb5sGas8v04s"
                alt="Jessy Cakes Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="jc-headline-sm text-[#241a0e] truncate leading-tight">
                Jessy Cakes
              </span>
              <span className="jc-label-sm text-[#7b5802] tracking-wider uppercase truncate">
                Galerie
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <a
              aria-label="WhatsApp Brazzaville"
              className="w-11 h-11 flex items-center justify-center rounded-full text-[#4e4637] hover:text-[#7b5802] transition-colors"
              href="https://wa.me/242000000000"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
            <a
              aria-label="Appeler Jessy Cakes"
              className="w-11 h-11 flex items-center justify-center rounded-full text-[#4e4637] hover:text-[#7b5802] transition-colors"
              href="tel:+242000000000"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <a
              aria-label="Mon Espace Profil"
              className="w-11 h-11 flex items-center justify-center rounded-full text-[#4e4637] hover:text-[#7b5802] transition-colors"
              href="#/mon-espace"
            >
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col relative w-full pt-16 pb-24 lg:pb-12 lg:max-w-6xl lg:mx-auto bg-[#fff8f4] min-h-screen">
        {/* ---------- HERO GALERIE ---------- */}
        <section className="px-4 pt-2 pb-6 flex flex-col gap-2">
          <div className="inline-flex items-center gap-1 self-start px-2 py-1 rounded-full bg-[#7b5802]/10 text-[#7b5802]">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span className="jc-label-sm uppercase tracking-wider">
              Maison d'Art Événementiel
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="jc-headline-lg-mobile text-[#241a0e] leading-tight">
              Nos Plus Belles Créations <span className="text-[#7b5802] font-serif">✨</span>
            </h1>
            <p className="jc-body-md text-[#4e4637]">
              Découvrez nos réceptions de prestige, gâteaux d'exception sur-mesure, cortèges
              raffinés et reportages photo/vidéo à Brazzaville et ses environs.
            </p>
          </div>
          <div className="mt-1 grid grid-cols-3 gap-1 p-2 bg-[#ffead8] rounded-xl shadow-[0_2px_8px_rgba(42,31,19,0.05)]">
            <div className="flex flex-col items-center text-center">
              <span className="jc-headline-sm text-[#7b5802] font-bold leading-none">+320</span>
              <span className="jc-label-sm text-[#4e4637] mt-1 leading-tight">Célébrations</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="jc-headline-sm text-[#7b5802] font-bold leading-none">100%</span>
              <span className="jc-label-sm text-[#4e4637] mt-1 leading-tight">Artisanal</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-0.5">
                <span className="jc-headline-sm text-[#7b5802] font-bold leading-none">4.9</span>
                <span
                  className="material-symbols-outlined text-[15px] text-[#7b5802] fill-current"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <span className="jc-label-sm text-[#4e4637] mt-1 leading-tight">Avis Clients</span>
            </div>
          </div>
        </section>

        {/* ---------- FILTRES ---------- */}
        <section className="pb-4">
          <div className="flex gap-1 overflow-x-auto px-4 scroll-smooth no-scrollbar">
            {FILTERS.map((f) => {
              const active = filter === f.id
              return (
                <button
                  key={f.id}
                  className={`shrink-0 px-4 py-2 rounded-full jc-label-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    active
                      ? 'bg-[#7b5802] text-white shadow-[0_2px_10px_rgba(197,154,69,0.35)]'
                      : 'bg-[#fae5d1] text-[#241a0e] hover:bg-[#f4dfcc]'
                  }`}
                  onClick={() => setFilter(f.id)}
                >
                  <span>{f.label}</span>
                </button>
              )
            })}
          </div>
        </section>

        {/* ---------- GRILLE ---------- */}
        <section className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ITEMS.filter((i) => filter === 'all' || i.category === filter).map((item) => (
            <article
              key={item.id}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_4px_18px_rgba(42,31,19,0.07)] transition-all duration-300"
            >
              <div
                className="relative w-full aspect-[4/3] bg-[#ffead8] overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241a0e]/60 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#7b5802] jc-label-sm uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </span>
                </div>
                <button
                  className={`absolute top-2 right-2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm transition-transform active:scale-90 ${
                    likes[item.id] ? 'text-[#ba1a1a]' : 'text-[#7c5357]'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(item.id)
                  }}
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{
                      fontVariationSettings: likes[item.id] ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    {likes[item.id] ? 'favorite' : 'favorite_border'}
                  </span>
                </button>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1 jc-body-sm drop-shadow">
                    <span className="material-symbols-outlined text-[16px] text-[#ffdea6]">
                      location_on
                    </span>
                    <span>{item.location}</span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-white/80">
                    zoom_in
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h3 className="jc-headline-sm text-[#241a0e]">{item.title}</h3>
                <p className="jc-body-sm text-[#4e4637]">{item.desc}</p>
                <div className="pt-1 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="jc-label-sm text-[#4e4637]">{item.priceLabel}</span>
                    <span className="jc-headline-sm text-[#7b5802] font-bold">{item.price}</span>
                  </div>
                  <a
                    className={`px-4 py-2.5 rounded-full jc-label-md flex items-center gap-1.5 active:scale-95 transition-transform ${
                      item.cta.style === 'primary'
                        ? 'bg-[#7b5802] text-white shadow-[0_3px_10px_rgba(197,154,69,0.3)]'
                        : 'bg-[#fdc7cb] text-[#795154]'
                    }`}
                    href="https://wa.me/242069499512"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>{item.cta.label}</span>
                    <span className="material-symbols-outlined text-[18px]">{item.cta.icon}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ---------- TÉMOIGNAGES ---------- */}
        <section className="mt-10 px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="jc-label-sm text-[#7b5802] uppercase tracking-widest font-bold">
              La Voix de Nos Mariés
            </span>
            <h2 className="jc-headline-sm text-[#241a0e]">Instants Magiques Partagés</h2>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-4 bg-[#fff1e6] rounded-xl shadow-sm flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex text-[#7b5802]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px] fill-current"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="jc-label-sm text-[#4e4637]">Mariage à Kintélé</span>
              </div>
              <p className="jc-body-sm text-[#241a0e] italic">
                « La pièce montée était un véritable chef-d'œuvre gustatif et visuel. Nos invités
                nous en parlent encore ! La décoration de salle a dépassé nos rêves. »
              </p>
              <span className="jc-label-md text-[#241a0e] font-semibold">
                — Vanessa &amp; Guy-Serge M.
              </span>
            </div>
            <div className="p-4 bg-[#fff1e6] rounded-xl shadow-sm flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex text-[#7b5802]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px] fill-current"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="jc-label-sm text-[#4e4637]">Anniversaire 30 ans, Moungali</span>
              </div>
              <p className="jc-body-sm text-[#241a0e] italic">
                « Ponctualité, délicatesse des saveurs au chocolat noir d'Afrique et finitions en
                feuille d'or remarquables. Merci à toute l'équipe Jessy Cakes. »
              </p>
              <span className="jc-label-md text-[#241a0e] font-semibold">— Prince K.</span>
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="mt-10 px-4 mb-6">
          <div className="p-6 bg-gradient-to-br from-[#fae5d1] via-[#ffead8] to-[#f4dfcc] rounded-2xl shadow-[0_6px_24px_rgba(42,31,19,0.08)] flex flex-col gap-4 relative overflow-hidden text-center items-center">
            <div className="w-12 h-12 rounded-full bg-[#7b5802]/20 flex items-center justify-center text-[#7b5802] mb-1">
              <span className="material-symbols-outlined text-[28px]">auto_awesome</span>
            </div>
            <div className="flex flex-col gap-1 max-w-sm">
              <h2 className="jc-headline-sm text-[#241a0e] font-serif">
                Votre Événement de Rêve à Brazzaville
              </h2>
              <p className="jc-body-sm text-[#4e4637]">
                Confiez-nous vos envies : gâteau personnalisé, décoration totale, cortège ou
                couverture multimédia.
              </p>
            </div>
            <div className="w-full flex flex-col gap-2 mt-1">
              <a
                className="w-full py-3 px-4 rounded-full bg-[#7b5802] text-white jc-label-lg flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(197,154,69,0.35)] active:scale-[0.98] transition-transform"
                href="https://wa.me/242069499512?text=Bonjour%20Jessy%20Cakes,%20je%20souhaite%20un%20devis%20sur-mesure%20pour%20un%20événement"
                target="_blank"
                rel="noopener"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Demander un devis sur-mesure</span>
              </a>
              <a
                className="w-full py-3 px-4 rounded-full bg-white text-[#241a0e] jc-label-md flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                href="tel:+242069499512"
              >
                <span className="material-symbols-outlined text-[18px] text-[#7b5802]">call</span>
                <span>Contacter par Téléphone (+242 06 949 95 12)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= LIGHTBOX ================= */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-[#241a0e]/90 backdrop-blur-md flex flex-col justify-between p-4">
          <div className="flex items-center justify-between pt-safe">
            <span className="jc-label-sm uppercase tracking-widest text-[#ffdea6]">
              {lightbox.lightbox.category}
            </span>
            <button
              className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center active:scale-90 transition-transform"
              onClick={closeLightbox}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center my-auto w-full max-w-lg mx-auto">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-[#ffead8]">
              <img
                alt="Détail réalisation"
                className="w-full h-full object-cover"
                src={lightbox.img}
              />
            </div>
            <div className="mt-4 flex flex-col text-center text-white gap-1 px-2">
              <h3 className="jc-headline-sm text-white">{lightbox.lightbox.title}</h3>
              <p className="jc-body-sm text-white/80">{lightbox.lightbox.description}</p>
            </div>
          </div>
          <div className="pb-safe flex flex-col gap-1">
            <a
              className="w-full py-3 rounded-full bg-[#7b5802] text-white jc-label-lg flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
              href="https://wa.me/242069499512"
              target="_blank"
              rel="noopener"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Demander cette réalisation sur WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* ================= TOAST FAVORIS ================= */}
      {toast && (
        <div
          key={toast.key}
          className="fixed bottom-24 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 toast-in"
        >
          <div className="px-4 py-2 rounded-full bg-[#3a2e21] text-[#ffeedf] jc-label-md shadow-xl flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#7c5357] text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  )
}
