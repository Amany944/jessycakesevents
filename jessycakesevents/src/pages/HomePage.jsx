import { useState } from 'react'

export default function HomePage({ navigate }) {
  const [modal, setModal] = useState(null) // 'booking' | 'cake' | 'whatsapp' | 'call'
  const [toast, setToast] = useState(null)
  const [cakeType, setCakeType] = useState('Design Cake')
  const [selectedTags, setSelectedTags] = useState({})
  const [bookingService, setBookingService] = useState('Photo & Vidéo Mariage')

  const showToast = (message, icon = 'info') => {
    setToast({ message, icon, key: Date.now() })
    setTimeout(() => setToast(null), 2800)
  }

  const openModal = (m) => setModal(m)
  const closeModal = () => setModal(null)

  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      const next = { ...prev, [tag]: !prev[tag] }
      showToast(
        next[tag] ? `Filtre activé : ${tag}` : `Filtre "${tag}" réinitialisé`
      )
      return next
    })
  }

  return (
    <div className="bg-[#fff8f4] text-[#241a0e] flex flex-col min-h-screen relative overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full z-50 pt-safe bg-[#fff8f4]/90 backdrop-blur-xl border-b border-[#d2c5b2]/30 shadow-[0_1px_10px_rgba(123,88,2,0.06)]">
        <div className="h-16 px-[1.25rem] flex items-center justify-between gap-2">
          <div
            className="flex items-center gap-2 min-w-0 cursor-pointer"
            onClick={() => showToast('Jessy Cakes Events • Brazzaville')}
          >
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#c59a45] via-[#ffdea6] to-[#7b5802] shadow-sm">
              <img
                alt="Jessy Cakes Events Logo"
                className="h-11 w-11 object-cover rounded-full bg-[#fff1e6]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1O2A2w0W8z3rv2hBkmi1IN0NXCVt-S937SKW8J2fbuC3oLQkgWdFHmJXUAsRFZRXfoOLdSKykstotvOzUx9MQlL3GwBPLhQ62dcBL2Bv6Yz2CDlAC5TZKOmqc0QLn9y38yH_l3T9wiRdNEpe0fkTIKCaabdBrGYaWnHkFZL0_gwtUWnWu1d6K7V4vesftJ7uXAv4m_rVFmJrMTrAHVQIwiO42SVC4jvX0-KTYdP3XbCadcJx9NUWUS5m22RkI7-E"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="jc-headline-sm text-[20px] leading-[28px] font-bold truncate leading-tight text-[#241a0e]">
                Jessy Cakes Events
              </span>
              <span className="jc-label-sm text-[#7b5802] truncate font-medium">
                Brazzaville • Pâtisserie &amp; Événements
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              aria-label="WhatsApp direct"
              className="w-10 h-10 rounded-full bg-[#fdeeef] border border-[#ffdadc]/50 flex items-center justify-center text-[#7c5357] hover:bg-[#ffdadc]/30 active:scale-95 transition-all shadow-sm"
              onClick={() => openModal('whatsapp')}
            >
              <span className="material-symbols-outlined text-[19px]">chat</span>
            </button>
            <button
              aria-label="Appel d'urgence atelier"
              className="w-10 h-10 rounded-full bg-[#ffdea6] border border-[#7b5802]/20 flex items-center justify-center text-[#5d4200] hover:bg-[#eebf66] active:scale-95 transition-all shadow-sm"
              onClick={() => openModal('call')}
            >
              <span className="material-symbols-outlined text-[19px]">call</span>
            </button>
            <button
              aria-label="Mon profil"
              className="w-8 h-8 rounded-full gold-gradient-btn flex items-center justify-center ml-1 active:scale-90 transition-transform shadow-sm text-white"
              onClick={() => navigate('/mon-espace')}
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-[#fff8f4]">
        <div className="flex flex-col w-full">
          {/* ---------- HERO ---------- */}
          <section className="relative px-[1.25rem] pt-4 pb-6 flex flex-col items-center text-center">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl aspect-[4/3] max-h-[360px] flex flex-col justify-end p-4 border border-[#ffdea6]/40">
              <img
                alt="Gâteau de mariage somptueux et champagne Jessy Cakes Events"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkis0-HR_j2MHhWCq01wbRDvzGi3YcIfitsgnQ6AcHSPo9RJpkXHKtntWzk1fE7G2QZGg0vRcgBULbN04DR2VYj9xURk0UJSBHgy94GXYtVXY7EplA8gUrtjZ6SX4iUPlfNqJbs2B7FXRidieovs-OamSjqzYSrAI-qX4ryNtEgHRqexhAtk7_e-iMCZ2UCY4bRg3WVrIsqGzM55uITNt3qGplU_p4wDf8HylXv3x2xlafxrG0LQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a2e21]/95 via-[#3a2e21]/45 to-transparent"></div>
              <div className="relative z-10 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#c59a45] to-[#f3bd70] text-[#291800] mb-2 shadow-md border border-white/20">
                  <span
                    className="material-symbols-outlined text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                  <span className="jc-label-sm tracking-wider uppercase font-bold text-xs">
                    Artisans du Bonheur
                  </span>
                </div>
                <h1 className="jc-headline-lg-mobile text-[#fff8f4] font-bold leading-tight drop-shadow-md">
                  Nous rendons vos événements inoubliables 🎉
                </h1>
              </div>
            </div>
            <p className="jc-body-md text-[#4e4637] mt-4 max-w-xs leading-relaxed">
              Pâtisseries d'exception &amp; reportages photo/vidéo pour immortaliser vos plus beaux
              moments avec élégance.
            </p>
            <div className="flex flex-col w-full gap-2 mt-6">
              <button
                className="w-full min-h-[56px] py-3.5 px-4 rounded-lg gold-gradient-btn text-white shadow-[0_8px_20px_-4px_rgba(197,154,69,0.45)] border border-[#ffdea6]/30 flex items-center justify-between group active:scale-[0.98] transition-transform text-left cursor-pointer"
                onClick={() => openModal('booking')}
              >
                <div className="flex items-center gap-2 text-left">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[24px] text-white">
                      calendar_month
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="jc-label-lg font-bold leading-tight text-white">
                      Réserver un service
                    </span>
                    <span className="jc-body-sm text-white/90">
                      Photo &amp; Vidéo événementielle
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[22px] text-white group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button
                className="w-full min-h-[56px] py-3.5 px-4 rounded-lg bg-[#fdeeef] text-[#7c5357] border border-[#ffdadc] shadow-[0_6px_16px_rgba(253,199,203,0.3)] flex items-center justify-between group active:scale-[0.98] transition-transform text-left cursor-pointer hover:bg-[#ffdadc]/30"
                onClick={() => openModal('cake')}
              >
                <div className="flex items-center gap-2 text-left">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7b5802] shadow-sm border border-[#ffdadc]/50">
                    <span className="material-symbols-outlined text-[24px]">cake</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="jc-label-lg text-[#241a0e] font-bold leading-tight">
                      Commander un gâteau
                    </span>
                    <span className="jc-body-sm text-[#7c5357]">
                      100% fait main &amp; sur-mesure
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[22px] text-[#7c5357] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>

          {/* ---------- RÉASSURANCE ---------- */}
          <section className="px-[1.25rem] py-2">
            <div className="w-full bg-[#fff1e6] rounded-xl p-4 flex justify-between items-center shadow-sm border border-[#d2c5b2]/30">
              <div
                className="flex flex-col items-center text-center flex-1 px-1 cursor-pointer active:scale-95 transition-transform"
                onClick={() => showToast('Devis rapide en ligne sans engagement')}
              >
                <div className="w-8 h-8 rounded-full bg-[#ffdea6] text-[#271900] flex items-center justify-center mb-1 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
                <span className="jc-label-sm text-[#241a0e] font-semibold">Simple &amp; Rapide</span>
                <span className="jc-body-sm text-[#4e4637] text-[11px] leading-tight">
                  Sans tracas
                </span>
              </div>
              <div className="w-px h-8 bg-[#d2c5b2]/40"></div>
              <div
                className="flex flex-col items-center text-center flex-1 px-1 cursor-pointer active:scale-95 transition-transform"
                onClick={() => showToast('Support client actif 7j/7')}
              >
                <div className="w-8 h-8 rounded-full bg-[#ffdadc] text-[#301216] flex items-center justify-center mb-1 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </div>
                <span className="jc-label-sm text-[#241a0e] font-semibold">Réponse &lt; 2h</span>
                <span className="jc-body-sm text-[#4e4637] text-[11px] leading-tight">
                  7j/7 Brazzaville
                </span>
              </div>
              <div className="w-px h-8 bg-[#d2c5b2]/40"></div>
              <div
                className="flex flex-col items-center text-center flex-1 px-1 cursor-pointer active:scale-95 transition-transform"
                onClick={() => showToast('Note 4.9/5 basée sur +350 avis vérifiés')}
              >
                <div className="w-8 h-8 rounded-full gold-gradient-btn text-white flex items-center justify-center mb-1 shadow-sm">
                  <span
                    className="material-symbols-outlined text-[17px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <span className="jc-label-sm text-[#241a0e] font-semibold">4.9/5 étoiles</span>
                <span className="jc-body-sm text-[#4e4637] text-[11px] leading-tight">
                  +350 avis
                </span>
              </div>
            </div>
          </section>

          {/* ---------- SERVICES ---------- */}
          <section className="px-[1.25rem] py-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="jc-label-sm uppercase tracking-wider text-[#7b5802] font-bold">
                  Notre Atelier
                </span>
                <h2 className="jc-headline-md text-[#241a0e] font-bold">Nos Deux Savoir-Faire</h2>
              </div>
              <div
                className="w-9 h-9 rounded-full bg-[#ffdea6]/40 border border-[#ffdea6] flex items-center justify-center text-[#7b5802] cursor-pointer active:rotate-45 transition-transform"
                onClick={() => showToast('Artisans certifiés Jessy Cakes Events')}
              >
                <span className="material-symbols-outlined text-[20px]">stars</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {/* Carte Photo & Vidéo */}
              <div className="bg-white rounded-xl p-4 shadow-[0_8px_24px_-4px_rgba(123,88,2,0.08)] border border-[#d2c5b2]/20 flex flex-col transition-all duration-300">
                <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 border border-[#d2c5b2]/30">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Photographer taking beautiful candid shots at a sunlit outdoor garden wedding"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNCzAr9eu2b6frtmFIIv03w2qsgsmI_AJ-C5185_a3q5J6QF9gcu4nGDYP_GN9RKvZiCUjE05rYtVcOJISz9R6ntMa78QnefqFUt7-EV6re_KGaw6MABeDrxXVQ8csIQxUtIsCw4rSfVaWUmAdJNiIjqUWjn8TIjERFplxO4EkZU50MUSLS0Q5TROpgNPioHexLgLGfCQlbzYAQwB3iilwSHxfcCERfaqtVRZS0ZlquSGAKSKDuA"
                  />
                  <div className="absolute top-1 right-1 bg-[#fff8f4]/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-[#7b5802] border border-[#ffdea6]">
                    <span className="jc-label-sm font-bold">À partir de 290€</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-7 h-7 rounded-full bg-[#ffdea6]/50 flex items-center justify-center text-[#7b5802]">
                    <span className="material-symbols-outlined text-[18px]">camera</span>
                  </div>
                  <h3 className="jc-headline-sm text-[#241a0e] font-bold">
                    Couverture Événementielle
                  </h3>
                </div>
                <p className="jc-body-md text-[#4e4637] mb-4">
                  Captation spontanée, discrète et pleine d'émotions pour immortaliser chaque éclat
                  de rire et moment clé.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Mariages', 'Anniversaires', 'Baptêmes', 'Soirées Privées'].map((tag) => (
                    <button
                      key={tag}
                      className={`px-2.5 py-1 rounded-full font-semibold text-[11px] leading-[14px] tracking-[0.05em] transition-colors active:scale-95 ${
                        selectedTags[tag]
                          ? 'gold-gradient-btn text-white font-bold'
                          : 'bg-[#ffead8] text-[#241a0e] hover:bg-[#ffdea6]'
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <button
                  className="w-full py-3.5 rounded-lg bg-[#fae5d1] text-[#241a0e] jc-label-lg flex items-center justify-center gap-1 hover:bg-[#ffdea6]/40 transition-colors cursor-pointer border border-[#d2c5b2]/30"
                  onClick={() => openModal('booking')}
                >
                  <span className="font-bold">Réserver ce service</span>
                  <span className="material-symbols-outlined text-[18px] text-[#7b5802]">
                    chevron_right
                  </span>
                </button>
              </div>

              {/* Carte Gâteaux */}
              <div className="bg-white rounded-xl p-4 shadow-[0_8px_24px_-4px_rgba(123,88,2,0.08)] border border-[#d2c5b2]/20 flex flex-col transition-all duration-300">
                <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 border border-[#d2c5b2]/30">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Artisanal layered celebration cake decorated with pastel edible flowers"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWDibUP5znqUewSwjshOWbTSuodvVJuVwQ-Gy9i_Y86J2Zq4L2r6mavKNRDRJWbXavh6FMw19HK7J0RXc7RVcB-CO_Y1Vo4vAAwmkWlftTlcIrNWN_18aqBVrewZRab2iaecIbkQxg8x3L4IFYkqs5BO9XUkpjslIFnr4MOFqot9dfI2yCJ-GRJSfsXmgInzFWnXbfog3rHBj2ANO_MrrE27yLJfdCxUfsfj2AMmmjhNltbuzYA"
                  />
                  <div className="absolute top-1 right-1 bg-[#fff8f4]/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-[#7b5802] border border-[#ffdea6]">
                    <span className="jc-label-sm font-bold">À partir de 45€</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-7 h-7 rounded-full bg-[#ffdadc]/50 flex items-center justify-center text-[#7c5357]">
                    <span className="material-symbols-outlined text-[18px]">cake</span>
                  </div>
                  <h3 className="jc-headline-sm text-[#241a0e] font-bold">
                    Gâteaux Personnalisés
                  </h3>
                </div>
                <p className="jc-body-md text-[#4e4637] mb-4">
                  Créations uniques élaborées selon vos goûts : textures aériennes, saveurs
                  équilibrées et esthétique féerique.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Design Cakes', 'Pièces Montées', 'Saveurs Gourmandes', 'Options Sans Gluten'].map(
                    (tag) => (
                      <button
                        key={tag}
                        className={`px-2.5 py-1 rounded-full font-semibold text-[11px] leading-[14px] tracking-[0.05em] transition-colors active:scale-95 ${
                          selectedTags[tag]
                            ? 'gold-gradient-btn text-white font-bold'
                            : 'bg-[#ffead8] text-[#241a0e] hover:bg-[#ffdea6]'
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
                <button
                  className="w-full py-3.5 rounded-lg gold-gradient-btn text-white jc-label-lg flex items-center justify-center gap-1 shadow-md border border-[#ffdea6]/30 active:scale-[0.98] transition-transform cursor-pointer"
                  onClick={() => openModal('cake')}
                >
                  <span className="font-bold">Créer mon gâteau</span>
                  <span className="material-symbols-outlined text-[18px]">palette</span>
                </button>
              </div>
            </div>
          </section>

          {/* ---------- TÉMOIGNAGES ---------- */}
          <section className="px-[1.25rem] py-6 bg-[#fff1e6]/70 border-y border-[#d2c5b2]/30">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="jc-label-sm uppercase tracking-wider text-[#7b5802] font-bold">
                  Expériences Vécues
                </span>
                <h2 className="jc-headline-md text-[#241a0e] font-bold">Avis &amp; Témoignages</h2>
              </div>
              <div className="flex items-center gap-1 text-[#7b5802] bg-[#ffdea6]/40 px-2 py-0.5 rounded-full border border-[#ffdea6]">
                <span
                  className="material-symbols-outlined text-[17px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="jc-label-md font-bold text-[#241a0e]">4.9</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-[#d2c5b2]/20 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-9 h-9 rounded-full bg-[#ffdea6] text-[#271900] flex items-center justify-center jc-label-md font-bold">
                      CL
                    </div>
                    <div>
                      <span className="jc-label-md text-[#241a0e] block font-bold">
                        Camille &amp; Lucas
                      </span>
                      <span className="jc-body-sm text-[#4e4637] text-[12px]">
                        Mariage au Domaine des Roses
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[#c59a45]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="jc-body-md text-[#4e4637] italic mt-1 leading-relaxed">
                  « Le gâteau à 3 étages était aussi succulent que beau ! Et les photos de soirée
                  retranscrivent parfaitement l'ambiance. Équipe bienveillante et ponctuelle. »
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-[#d2c5b2]/20 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-9 h-9 rounded-full bg-[#ffdadc] text-[#301216] flex items-center justify-center jc-label-md font-bold">
                      SB
                    </div>
                    <div>
                      <span className="jc-label-md text-[#241a0e] block font-bold">Sophie B.</span>
                      <span className="jc-body-sm text-[#4e4637] text-[12px]">
                        30 ans surprise
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[#c59a45]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="jc-body-md text-[#4e4637] italic mt-1 leading-relaxed">
                  « Commandé en 48h, service client d'une gentillesse rare par téléphone. Mes invités
                  m'en parlent encore ! »
                </p>
              </div>
            </div>
          </section>

          {/* ---------- CTA FINAL ---------- */}
          <section className="px-[1.25rem] pt-6 pb-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#ffdadc] flex items-center justify-center text-[#7c5357] mb-2 shadow-sm border border-[#eeb9bd]">
              <span className="material-symbols-outlined text-[26px]">favorite</span>
            </div>
            <h2 className="jc-headline-md text-[#241a0e] font-bold">Un projet particulier ?</h2>
            <p className="jc-body-md text-[#4e4637] mt-1 max-w-xs mb-6">
              Discutons de vos envies en direct avec notre cheffe pâtissière et nos photographes.
            </p>
            <div className="flex flex-col w-full gap-2">
              <button
                className="w-full min-h-[52px] py-3.5 px-4 rounded-lg bg-[#fae5d1] text-[#241a0e] jc-label-lg flex items-center justify-center gap-1 active:bg-[#f4dfcc] transition-colors shadow-sm cursor-pointer border border-[#d2c5b2]/30 font-bold"
                onClick={() => openModal('call')}
              >
                <span className="material-symbols-outlined text-[20px] text-[#7b5802]">call</span>
                <span>Nous appeler au 06 949 95 12</span>
              </button>
              <button
                className="w-full min-h-[52px] py-3.5 px-4 rounded-lg gold-gradient-btn text-white jc-label-lg flex items-center justify-center gap-1 active:scale-[0.98] transition-transform shadow-md cursor-pointer border border-[#ffdea6]/30 font-bold"
                onClick={() => openModal('whatsapp')}
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Écrire sur WhatsApp</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* ---------- FAB "Besoin d'aide ?" ---------- */}
      <aside className="fixed bottom-24 right-[1.25rem] z-40">
        <button
          className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full gold-gradient-btn text-white shadow-[0_8px_20px_-4px_rgba(123,88,2,0.35)] border border-[#ffdea6]/40 transition-all active:scale-95 cursor-pointer font-bold"
          onClick={() => openModal('whatsapp')}
        >
          <span className="material-symbols-outlined text-[20px]">support_agent</span>
          <span className="jc-label-md tracking-wide">Besoin d'aide ?</span>
        </button>
      </aside>

      {/* ================= MODALE RÉSERVATION ================= */}
      {modal === 'booking' && (
        <BookingModal
          service={bookingService}
          setService={setBookingService}
          onClose={closeModal}
          onSubmit={() => {
            closeModal()
            showToast('Réservation enregistrée ! Notre équipe vous contacte sous 2h.', 'calendar_month')
          }}
        />
      )}

      {/* ================= MODALE GÂTEAU ================= */}
      {modal === 'cake' && (
        <CakeModal
          cakeType={cakeType}
          setCakeType={setCakeType}
          onClose={closeModal}
          onSubmit={(flavor, parts) => {
            closeModal()
            showToast(`Gâteau (${flavor}, ${parts}) ajouté à votre devis !`, 'cake')
          }}
        />
      )}

      {/* ================= MODALE WHATSAPP ================= */}
      {modal === 'whatsapp' && <WhatsAppModal onClose={closeModal} />}

      {/* ================= MODALE APPEL ================= */}
      {modal === 'call' && <CallModal onClose={closeModal} />}

      {/* ================= TOAST ================= */}
      {toast && (
        <div
          key={toast.key}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] toast-in"
        >
          <div className="px-4 py-2.5 rounded-full bg-[#241a0e]/95 text-[#fff8f4] jc-label-sm shadow-xl flex items-center gap-2 border border-[#c59a45]/40">
            <span
              className="material-symbols-outlined text-[18px] text-[#ffdea6]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {toast.icon}
            </span>
            <span className="font-medium">{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  )
}

function BookingModal({ service, setService, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center">
      <div className="bg-[#fff8f4] w-full max-w-lg rounded-t-2xl sm:rounded-2xl max-h-[90vh] overflow-y-auto p-4 shadow-2xl flex flex-col border-t sm:border border-[#ffdea6]">
        <div className="flex items-center justify-between pb-3 border-b border-[#d2c5b2]/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7b5802] text-[24px]">
              calendar_month
            </span>
            <h3 className="jc-headline-sm text-[#241a0e] font-bold">Réservation d'un Service</h3>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-[#ffead8] flex items-center justify-center text-[#4e4637] active:scale-90"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
              Prestation désirée
            </label>
            <select
              className="w-full px-3 py-2.5 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="Photo & Vidéo Mariage">
                Couverture Mariage Complète (Photo &amp; Vidéo)
              </option>
              <option value="Anniversaire & Fête">Anniversaire / Célébration privée</option>
              <option value="Baptême & Communion">Baptême &amp; Cérémonie religieuse</option>
              <option value="Séance Shooting Studio">Shooting Privé / Portrait</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
                Date souhaitée
              </label>
              <input
                className="w-full px-3 py-2.5 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
                required
                type="date"
              />
            </div>
            <div>
              <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
                Ville / Quartier
              </label>
              <input
                className="w-full px-3 py-2.5 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
                placeholder="Brazzaville, Mfilou..."
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
              Vos coordonnées (Nom &amp; Téléphone)
            </label>
            <input
              className="w-full px-3 py-2.5 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
              placeholder="Ex: Sarah M. - 06 949 95 12"
              required
              type="text"
            />
          </div>
          <div>
            <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
              Détails de l'événement (optionnel)
            </label>
            <textarea
              className="w-full px-3 py-2 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
              placeholder="Heures, ambiance, besoins particuliers..."
              rows="2"
            />
          </div>
          <div className="mt-2 flex gap-2">
            <button
              className="flex-1 py-3 rounded-lg bg-[#fae5d1] text-[#241a0e] jc-label-md font-semibold"
              onClick={onClose}
              type="button"
            >
              Annuler
            </button>
            <button
              className="flex-1 py-3 rounded-lg gold-gradient-btn text-white jc-label-md font-bold shadow-md"
              type="submit"
            >
              Confirmer ma demande
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function CakeModal({ cakeType, setCakeType, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const flavor = e.target.cakeFlavor.value
    const parts = e.target.cakeParts.value
    onSubmit(flavor, parts)
  }
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center">
      <div className="bg-[#fff8f4] w-full max-w-lg rounded-t-2xl sm:rounded-2xl max-h-[90vh] overflow-y-auto p-4 shadow-2xl flex flex-col border-t sm:border border-[#ffdea6]">
        <div className="flex items-center justify-between pb-3 border-b border-[#d2c5b2]/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7b5802] text-[24px]">cake</span>
            <h3 className="jc-headline-sm text-[#241a0e] font-bold">
              Créer mon Gâteau Jessy Cakes
            </h3>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-[#ffead8] flex items-center justify-center text-[#4e4637] active:scale-90"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
              Type de gâteau
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Design Cake', 'Pièce Montée', 'Layer Cake'].map((t) => (
                <button
                  key={t}
                  className={`p-2 rounded-lg text-center text-[11px] leading-[14px] tracking-[0.05em] font-bold active:scale-95 transition-all ${
                    cakeType === t
                      ? 'border-2 border-[#c59a45] bg-[#ffdea6]/40 text-[#241a0e]'
                      : 'border border-[#d2c5b2]/50 bg-[#fff1e6] text-[#241a0e]'
                  }`}
                  onClick={() => setCakeType(t)}
                  type="button"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
                Nombre de parts
              </label>
              <select
                className="w-full px-3 py-2 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
                name="cakeParts"
              >
                <option>10 à 15 parts</option>
                <option>20 à 30 parts</option>
                <option>40 à 60 parts</option>
                <option>+100 parts (Mariage)</option>
              </select>
            </div>
            <div>
              <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
                Parfum principal
              </label>
              <select
                className="w-full px-3 py-2 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
                name="cakeFlavor"
              >
                <option>Vanille Bourbon &amp; Framboise</option>
                <option>Chocolat Intense &amp; Praliné</option>
                <option>Red Velvet &amp; Cream Cheese</option>
                <option>Mangue &amp; Passion Exotique</option>
                <option>Caramel Beurre Salé</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block jc-label-sm text-[#4e4637] mb-1 font-semibold">
              Message d'inscription sur le gâteau
            </label>
            <input
              className="w-full px-3 py-2.5 rounded-lg bg-[#fff1e6] border border-[#d2c5b2]/40 text-[#241a0e] text-[15px] focus:outline-[#7b5802]"
              placeholder="Ex: Joyeux Anniversaire Sarah (25 ans)"
              type="text"
            />
          </div>
          <div className="bg-[#fdeeef] p-2.5 rounded-lg flex items-center justify-between text-[#7c5357] jc-label-sm border border-[#ffdadc]/50">
            <span className="font-semibold">Option sans gluten / allégé :</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-9 h-5 bg-[#d2c5b2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c59a45]"></div>
            </label>
          </div>
          <div className="mt-2 flex gap-2">
            <button
              className="flex-1 py-3 rounded-lg bg-[#fae5d1] text-[#241a0e] jc-label-md font-semibold"
              onClick={onClose}
              type="button"
            >
              Fermer
            </button>
            <button
              className="flex-1 py-3 rounded-lg gold-gradient-btn text-white jc-label-md font-bold shadow-md"
              type="submit"
            >
              Ajouter &amp; Deviser
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function WhatsAppModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center" onClick={onClose}>
      <div
        className="bg-[#fff8f4] w-full max-w-sm rounded-t-2xl sm:rounded-2xl p-4 shadow-2xl flex flex-col border-t sm:border border-[#ffdea6]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#d2c5b2]/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gold-gradient-btn text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </div>
            <div>
              <h3 className="jc-headline-sm text-[#241a0e] leading-tight font-bold">
                Jessy Cakes Events
              </h3>
              <p className="text-[11px] text-[#7b5802] flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b5802] inline-block"></span> En ligne
                à Brazzaville
              </p>
            </div>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-[#ffead8] flex items-center justify-center text-[#4e4637] active:scale-90"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div className="py-3 flex flex-col gap-2">
          <p className="jc-body-md text-[#4e4637]">
            Échangez directement avec notre équipe pour un devis instantané ou une question :
          </p>
          <div className="bg-[#fff1e6] p-2.5 rounded-lg text-[12px] text-[#4e4637] flex flex-col gap-1 border border-[#ffdea6]/40">
            <span className="font-semibold text-[#241a0e]">
              📍 01 rue babalako, av. Cité des 17, Mfilou
            </span>
            <span className="font-medium text-[#7b5802]">
              📞 +242 06 949 95 12 / 05 050 26 86
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="w-full py-3 rounded-lg gold-gradient-btn text-white jc-label-md font-bold text-center flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all border border-[#ffdea6]/30"
            href="https://wa.me/242069499512?text=Bonjour%20Jessy%20Cakes%20Events,%20je%20souhaite%20commander%20un%20g%C3%A2teau%20ou%20r%C3%A9server%20un%20service"
            rel="noopener"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Ouvrir WhatsApp (+242 06 949 95 12)
          </a>
          <a
            className="w-full py-2.5 rounded-lg bg-[#fdeeef] text-[#7c5357] jc-label-md font-semibold text-center flex items-center justify-center gap-2 active:scale-95 transition-all border border-[#ffdadc]"
            href="https://wa.me/242050502686?text=Bonjour%20Jessy%20Cakes%20Events,%20je%20souhaite%20des%20renseignements"
            rel="noopener"
            target="_blank"
          >
            Ligne alternative (+242 05 050 26 86)
          </a>
        </div>
      </div>
    </div>
  )
}

function CallModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#fff8f4] w-full max-w-sm rounded-t-2xl sm:rounded-2xl p-4 shadow-2xl flex flex-col border-t sm:border border-[#ffdea6]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#d2c5b2]/30">
          <h3 className="jc-headline-sm text-[#241a0e] font-bold">Appeler l'Atelier</h3>
          <button
            className="w-8 h-8 rounded-full bg-[#ffead8] flex items-center justify-center text-[#4e4637]"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div className="py-4 flex flex-col gap-2.5">
          <a
            className="w-full py-3 px-4 rounded-lg gold-gradient-btn text-white jc-label-md font-bold flex items-center justify-between shadow-md transition-transform border border-[#ffdea6]/30"
            href="tel:+242069499512"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">call</span>
              <span>06 949 95 12 (Principal)</span>
            </div>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </a>
          <a
            className="w-full py-3 px-4 rounded-lg bg-[#fae5d1] text-[#241a0e] jc-label-md font-semibold flex items-center justify-between shadow-sm transition-transform border border-[#d2c5b2]/30"
            href="tel:+242050502686"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7b5802]">phone_in_talk</span>
              <span>05 050 26 86 (Atelier)</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-[#7b5802]">
              chevron_right
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
