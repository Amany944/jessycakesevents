import { useMemo, useState } from 'react'

const EVENTS = [
  { id: 'wedding', emoji: '💍', label: 'Mariage civil ou religieux / Dot', sub: 'Union sacrée & famille', recap: 'Mariage civil ou religieux / Dot 💍' },
  { id: 'birthday', emoji: '🎂', label: 'Anniversaire & Célébration', sub: 'Gâteau & fête joyeuse', recap: 'Anniversaire & Célébration 🎂' },
  { id: 'ceremony', emoji: '🕊️', label: 'Baptême & Communion', sub: 'Bénédiction & douceur', recap: 'Baptême & Communion 🕊️' },
  { id: 'party', emoji: '🥂', label: 'Fête privée ou Soirée', sub: 'Réception & cocktail', recap: 'Fête privée ou Soirée 🥂' },
  { id: 'corporate', emoji: '💼', label: 'Événement pro & Conférence', sub: 'Séminaire, gala entreprise', recap: 'Événement pro & Conférence 💼' },
  { id: 'other', emoji: '✨', label: 'Autre événement festif', sub: 'Sur-mesure à Brazzaville', recap: 'Autre événement festif ✨' },
]

const SERVICES = [
  { id: 'couverture_mariage', name: 'Couverture mariage', price: 120000, icon: 'videocam', iconBg: 'bg-[#ffdea6] text-[#5d4200]', desc: 'Reportage photo et vidéo complet de votre cérémonie, cocktail et soirée avec rendu haute définition et album souvenirs.' },
  { id: 'shooting_photo', name: 'Shooting photo', price: 45000, icon: 'photo_camera', iconBg: 'bg-[#fdc7cb]/50 text-[#7c5357]', desc: "Séance shooting studio ou extérieur pour couple, solo, grossesse, baptême ou shooting d'anniversaire avec retouches professionnelles." },
  { id: 'vente_gateaux', name: 'Vente de gâteaux & livraison', price: 35000, icon: 'cake', iconBg: 'bg-[#ffdea6]/60 text-[#7b5802]', desc: 'Confection artisanale sur-mesure (pièces montées, gâteaux à thème, saveurs au choix) et livraison soignée sur le lieu de l\'événement.' },
  { id: 'decoration_voiture_lieux', name: 'Décoration voiture de mariage & lieux', price: 60000, icon: 'directions_car', iconBg: 'bg-[#ffddb2] text-[#624000]', desc: "Fleurissement élégant du véhicule des mariés, scénographie de la salle, arche florale, décoration des tables et éclairage d'ambiance." },
]

const TIME_SLOTS = [
  { id: 'matin', label: 'Matinée', sub: '09h - 13h', value: 'Matinée (09h-13h)' },
  { id: 'apresmidi', label: 'Après-midi', sub: '13h - 18h', value: 'Après-midi (13h-18h)' },
  { id: 'soir', label: 'Soirée', sub: 'Dès 18h', value: 'Soirée & Dîner' },
]

export default function BookingPage() {
  const [events, setEvents] = useState(['wedding'])
  const [services, setServices] = useState(['couverture_mariage'])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('14:00')
  const [slot, setSlot] = useState('Après-midi (13h-18h)')
  const [location, setLocation] = useState('')
  const [showConfirm, setShowConfirm] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const toggle = (list, setList, id) => {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id])
  }

  const recapEvents = useMemo(
    () => (events.length ? events.map((id) => EVENTS.find((e) => e.id === id)?.recap).join(', ') : 'Aucun événement sélectionné'),
    [events]
  )
  const recapServices = useMemo(
    () =>
      services.length
        ? services.map((id) => SERVICES.find((s) => s.id === id)?.name).join(', ')
        : 'Veuillez choisir un service',
    [services]
  )
  const total = useMemo(
    () => services.reduce((sum, id) => sum + (SERVICES.find((s) => s.id === id)?.price || 0), 0),
    [services]
  )
  const recapDateTime = `${location.trim() || 'Brazzaville'} • ${date || 'Date à préciser'} (${time})`

  return (
    <div className="bg-[#fff8f4] text-[#241a0e] flex flex-col min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="lg:hidden fixed top-0 w-full z-50 pt-safe bg-[#fff8f4]/90 backdrop-blur-xl shadow-[0_1px_10px_rgba(123,88,2,0.06)] border-b border-[#fae5d1]/60">
        <div className="h-16 px-[1.25rem] flex items-center justify-between gap-2">
          <div className="flex items-center min-w-0 gap-2">
            <img
              alt="Jessy Cakes Events Brazzaville"
              className="h-11 w-11 object-contain rounded-full border border-[#c59a45]/40 p-0.5 shadow-sm bg-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqBp46eqMV-sKh9QcFFMkVfdyDvV0OgT6GO95SEMJXhCTChqpaNoVnnrD-D4sd0yntCRRA5sTybpsYI0VTI4PRhw-RbVoNWo43kz09oZQfUCXirf_MnrkejEHhVwGY8tEsuJn6TWob5T-AqRdLCrbmcLQ3wehA_fe8PWbp8ZRdJVLVbCbguAVbaQlrNAgeH0NAR9swEaN_CwvIJu49nOWtrM1fYQEtwxrxc1wdsmOCkKNQ5d8LpWhOJJjqD1DFtvk"
            />
            <div className="flex flex-col min-w-0">
              <span className="jc-headline-sm text-[17px] text-[#241a0e] truncate leading-tight">
                Jessy Cakes Events
              </span>
              <span className="jc-label-sm text-[11px] text-[#7b5802] font-semibold truncate flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">location_on</span>Brazzaville
                • Mfilou
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <a
              aria-label="WhatsApp direct Brazzaville"
              className="w-10 h-10 rounded-full bg-[#fdc7cb]/40 flex items-center justify-center text-[#7b5802] hover:bg-[#fdc7cb] transition-colors"
              href="https://wa.me/242069499512?text=Bonjour%20Jessy%20Cakes%20Events,%20je%20souhaite%20r%C3%A9server%20une%20prestation%20%C3%A0%20Brazzaville"
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
            <a
              aria-label="Appel direct atelier Brazzaville"
              className="w-10 h-10 rounded-full bg-[#ffdea6] flex items-center justify-center text-[#5d4200] hover:bg-[#eebf66] transition-colors"
              href="tel:069499512"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <button
              aria-label="Assistance"
              className="w-8 h-8 rounded-full bg-[#7b5802] flex items-center justify-center ml-1 text-white"
              onClick={() => setShowHelp(true)}
            >
              <span className="material-symbols-outlined text-[18px]">help_outline</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-16 pb-28 lg:pb-12 lg:max-w-3xl lg:mx-auto bg-[#fff8f4]">
        {/* ---------- HERO ---------- */}
        <div className="relative w-full overflow-hidden bg-[#fff1e6] px-[1.25rem] pt-4 pb-6 border-b border-[#fae5d1]/50">
          <div className="relative z-10 flex flex-col gap-1">
            <div className="inline-flex items-center gap-1 self-start px-3 py-1 rounded-full bg-[#ffdea6]/60 text-[#5d4200] border border-[#c59a45]/30">
              <span className="material-symbols-outlined text-[15px] text-[#7b5802]">verified</span>
              <span className="tracking-wide jc-label-sm">
                Artisans de l'Événementiel • Brazzaville
              </span>
            </div>
            <h1 className="jc-headline-lg-mobile text-[#241a0e]">
              Réservez votre événement &amp; vos prestations ✨
            </h1>
            <p className="jc-body-md text-[#4e4637]">
              Réservation rapide et confirmation personnalisée en FCFA. Notre équipe de Brazzaville
              vous accompagne de A à Z.
            </p>
          </div>
          <div className="mt-4 relative rounded-lg overflow-hidden shadow-md border border-[#d2c5b2]/30">
            <img
              className="object-cover w-full h-44"
              data-alt="A joyful bride and groom laughing together during an evening wedding reception"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGpm-0ApA3J6WLVl7HC2cPy8_on-hPk-HsejVzF1GTvii27xWqOmCsOF63lPAvZ_8lU7Swkyh1kDiB66pcUZsIL8D5XfcMtbbVL1cCHZgvu30frkHx5TPhvywNL-jkIVv18fACENcqM4YO42PfNxOyHLo6jtynxi_7Z9vqFWGJHw8-PRJwaDFT1zJyYprzMrUI__jyAowsDKFtTqAPKU_ATOMAlEfydYWQp4meWsk0N5krzXWdNQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241a0e]/85 via-transparent to-transparent flex items-end p-4">
              <p className="jc-label-md text-[#fff8f4] flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#ffdea6]">
                  favorite
                </span>
                +320 célébrations féeriques et prestations réussies à Brazzaville
              </p>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col px-[1.25rem] pt-6 gap-10 pb-10"
          onSubmit={(e) => {
            e.preventDefault()
            setShowConfirm(true)
          }}
        >
          {/* ---------- SECTION 1 ---------- */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#7b5802] text-[22px]">
                celebration
              </span>
              <h2 className="jc-headline-sm text-[#241a0e]">1. Quel est votre événement ?</h2>
            </div>
            <p className="jc-body-sm text-[#4e4637] -mt-1">
              Sélectionnez un ou plusieurs événements à célébrer :
            </p>
            <div aria-label="Type d'événement" className="grid grid-cols-2 gap-2">
              {EVENTS.map((ev) => {
                const checked = events.includes(ev.id)
                return (
                  <label
                    key={ev.id}
                    className={`event-tile flex flex-col justify-between p-4 rounded-[0.75rem] shadow-sm cursor-pointer transition-all active:scale-[0.98] select-none min-h-[110px] relative ${
                      checked
                        ? 'bg-[#fff8f4] border-2 border-[#7b5802]'
                        : 'bg-white border border-[#d2c5b2]/30'
                    }`}
                    onClick={(e) => {
                      if (e.target.tagName.toLowerCase() !== 'input') toggle(events, setEvents, ev.id)
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[26px]">{ev.emoji}</span>
                      <span
                        className={`material-symbols-outlined text-[22px] ${
                          checked ? 'text-[#7b5802]' : 'text-[#f4dfcc]'
                        }`}
                        style={{ fontVariationSettings: checked ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        {checked ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                    </div>
                    <div>
                      <span className="jc-label-md text-[#241a0e] font-bold block">{ev.label}</span>
                      <span className="jc-body-sm text-[#4e4637] mt-0.5 block">{ev.sub}</span>
                    </div>
                  </label>
                )
              })}
            </div>
          </section>

          {/* ---------- SECTION 2 ---------- */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#7b5802] text-[22px]">
                  hotel_class
                </span>
                <h2 className="jc-headline-sm text-[#241a0e]">2. Services souhaités</h2>
              </div>
              <span className="jc-label-sm text-[#7b5802] font-bold bg-[#ffdea6]/50 px-2.5 py-0.5 rounded-full">
                Devis en FCFA
              </span>
            </div>
            <p className="jc-body-sm text-[#4e4637] -mt-1">
              Cochez une ou plusieurs prestations pour votre célébration :
            </p>
            <div className="flex flex-col gap-2">
              {SERVICES.map((sv) => {
                const checked = services.includes(sv.id)
                return (
                  <label
                    key={sv.id}
                    className={`service-card flex items-start gap-4 p-4 rounded-[0.75rem] shadow-sm cursor-pointer transition-all active:scale-[0.99] relative hover:shadow-md ${
                      checked ? 'bg-[#fff8f4] border-2 border-[#7b5802]' : 'bg-white border border-[#d2c5b2]/30'
                    }`}
                    onClick={(e) => {
                      if (e.target.tagName.toLowerCase() !== 'input')
                        toggle(services, setServices, sv.id)
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm ${sv.iconBg}`}
                    >
                      <span className="material-symbols-outlined text-[24px]">{sv.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="jc-label-lg text-[#241a0e] font-bold">{sv.name}</span>
                        <span className="jc-label-sm text-[12px] font-bold text-[#7b5802] px-2 py-0.5 rounded-md bg-[#ffead8]">
                          Dès {sv.price.toLocaleString('fr-FR')} FCFA
                        </span>
                      </div>
                      <p className="jc-body-sm text-[#4e4637] mt-1 leading-snug">{sv.desc}</p>
                    </div>
                    <div className="flex items-center self-center justify-center pl-1 shrink-0">
                      <span
                        className={`material-symbols-outlined text-[26px] ${
                          checked ? 'text-[#7b5802]' : 'text-[#f4dfcc]'
                        }`}
                        style={{ fontVariationSettings: checked ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        {checked ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                    </div>
                  </label>
                )
              })}
            </div>
          </section>

          {/* ---------- SECTION 3 ---------- */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#7b5802] text-[22px]">
                calendar_clock
              </span>
              <h2 className="jc-headline-sm text-[#241a0e]">
                3. Date &amp; Lieu de l'événement
              </h2>
            </div>
            <div className="p-4 rounded-[0.75rem] bg-white shadow-sm border border-[#d2c5b2]/30 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label
                  className="jc-label-md text-[#241a0e] font-semibold flex items-center gap-1.5"
                  htmlFor="event-date-input"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#7b5802]">
                    calendar_month
                  </span>
                  Date de l'événement *
                </label>
                <div className="relative flex items-center">
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-[0.75rem] bg-[#ffead8] text-[#241a0e] border border-[#d2c5b2]/40 text-[15px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#7b5802] focus:border-[#7b5802] transition-all"
                    id="event-date-input"
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="JJ / MM / AAAA"
                    required
                    type="date"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#7b5802] text-[20px] pointer-events-none">
                    event
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="jc-label-md text-[#241a0e] font-semibold flex items-center gap-1.5"
                  htmlFor="event-time-input"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#7b5802]">
                    schedule
                  </span>
                  Heure de début / Créneau horaire *
                </label>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  <div className="relative">
                    <p className="text-[#4e4637] text-[12px] mb-0.5">Heure exacte de début </p>
                    <input
                      className="w-full h-12 px-4 rounded-[0.75rem] bg-[#ffead8] text-[#241a0e] text-[15px] leading-[24px] border border-[#d2c5b2]/40 focus:outline-none focus:ring-2 focus:ring-[#7b5802] focus:border-[#7b5802] transition-all"
                      id="event-time-input"
                      onChange={(e) => setTime(e.target.value)}
                      required
                      type="time"
                      value={time}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-1" role="radiogroup">
                    <p className="text-[#4e4637] text-[12px] mb-0.5 col-span-3"> Veillez cliquez sur l'un pour indiquer le moment de la journée</p>
                    {TIME_SLOTS.map((ts) => {
                      const active = slot === ts.value
                      return (
                        <label
                          key={ts.id}
                          className={`time-slot-chip flex flex-col items-center justify-center p-1.5 rounded-[0.75rem] cursor-pointer text-center text-[11px] font-semibold transition-all select-none ${
                            active
                              ? 'bg-[#7b5802] text-white shadow-sm'
                              : 'bg-[#ffead8] text-[#241a0e] border border-[#d2c5b2]/30'
                          }`}
                        >
                          <input
                            checked={active}
                            className="sr-only"
                            name="time_slot"
                            onChange={() => setSlot(ts.value)}
                            type="radio"
                            value={ts.value}
                          />
                          <span>{ts.label}</span>
                          <span className={`text-[10px] ${active ? 'text-[#ffdea6]' : 'text-[#4e4637]'}`}>
                            {ts.sub}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="jc-label-md text-[#241a0e] font-semibold flex items-center gap-1.5"
                  htmlFor="location-input"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#7b5802]">
                    pin_drop
                  </span>
                  Lieu précis de l'événement à Brazzaville *
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-[0.75rem] bg-[#ffead8] text-[#241a0e] placeholder:text-[#807665] border border-[#d2c5b2]/40 text-[15px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#7b5802] focus:border-[#7b5802] transition-all"
                    id="location-input"
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Salle Polyvalente, Bacongo, Brazzaville ou domicile..."
                    required
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#7b5802] text-[20px]">
                    location_on
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- SECTION 4 ---------- */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#7b5802] text-[22px]">badge</span>
              <h2 className="jc-headline-sm text-[#241a0e]">4. Vos coordonnées &amp; Récapitulatif</h2>
            </div>
            <div className="p-4 rounded-[0.75rem] bg-white shadow-sm border border-[#d2c5b2]/30 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="jc-label-md text-[#241a0e] font-semibold" htmlFor="client-name">
                  Nom et Prénom *
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-[0.75rem] bg-[#ffead8] text-[#241a0e] placeholder:text-[#807665] text-[15px] leading-[24px] border border-[#d2c5b2]/40 focus:outline-none focus:ring-2 focus:ring-[#7b5802] focus:border-[#7b5802] transition-all"
                    id="client-name"
                    placeholder="Ex: Grace Malonga"
                    required
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#807665] text-[20px]">
                    person
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="jc-label-md text-[#241a0e] font-semibold" htmlFor="client-phone">
                  Numéro WhatsApp ou Téléphone (Congo) *
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-[0.75rem] bg-[#ffead8] text-[#241a0e] placeholder:text-[#807665] text-[15px] leading-[24px] border border-[#d2c5b2]/40 focus:outline-none focus:ring-2 focus:ring-[#7b5802] focus:border-[#7b5802] transition-all"
                    id="client-phone"
                    placeholder="06 949 95 12 ou 05 050 26 86"
                    required
                    type="tel"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#7b5802] text-[20px]">
                    phone_iphone
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 text-[#4e4637] text-[12px]">
                  <span className="material-symbols-outlined text-[14px] text-[#7b5802]">
                    check_circle
                  </span>
                  <span>Compatible règlements Airtel Money / MTN MoMo Brazzaville</span>
                </div>
              </div>
            </div>

            {/* RÉCAP */}
            <div className="p-4 rounded-[0.75rem] bg-[#ffead8] shadow-sm border border-[#c59a45]/40 flex flex-col gap-2 mt-1">
              <div className="flex items-center justify-between">
                <span className="jc-headline-sm text-[18px] text-[#241a0e] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[20px] text-[#7b5802]">
                    receipt_long
                  </span>
                  Devis prévisionnel estimé
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#7b5802] text-white jc-label-sm font-bold">
                  Sans frais en ligne
                </span>
              </div>
              <div className="flex flex-col gap-1 py-1 border-y border-[#d2c5b2]/30">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#4e4637] text-[13px]">Événement(s) :</span>
                  <span className="jc-label-md text-[#241a0e] font-semibold text-right">
                    {recapEvents}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#4e4637] text-[13px]">Prestation(s) :</span>
                  <span className="jc-label-md text-[#241a0e] font-semibold text-right">
                    {recapServices}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4e4637] text-[13px]">Lieu &amp; Date :</span>
                  <span className="jc-label-md text-[#241a0e] text-right">{recapDateTime}</span>
                </div>
              </div>
              <div className="pt-1 flex items-center justify-between bg-white p-2 rounded-[0.75rem] border border-[#d2c5b2]/20">
                <div>
                  <span className="jc-label-md text-[#241a0e] block font-semibold">
                    Estimation totale
                  </span>
                  <span className="jc-body-sm text-[11px] text-[#4e4637]">
                    Acompte et modalités validés par téléphone
                  </span>
                </div>
                <span className="font-display text-[22px] font-bold text-[#7b5802]">
                  {total.toLocaleString('fr-FR')} FCFA
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <button
                className="w-full h-14 lg:h-12 rounded-full bg-[#7b5802] text-white jc-label-lg shadow-lg hover:bg-[#c59a45] active:scale-[0.98] transition-all flex items-center justify-center gap-1 cursor-pointer border border-[#ffdea6]/40"
                id="btn-submit-booking"
                type="submit"
              >
                <span className="material-symbols-outlined text-[22px]">calendar_today</span>
                <span className="font-bold tracking-wide">
                  Confirmer ma demande de réservation 📅
                </span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[#4e4637] pt-1 text-center">
                <span className="material-symbols-outlined text-[16px] text-[#7b5802]">lock</span>
                <span className="jc-label-sm">
                  Réservation garantie sans paiement immédiat • Réponse sous 2h
                </span>
              </div>
            </div>
          </section>
        </form>

        {/* ---------- BADGES RÉASSURANCE ---------- */}
        <section className="px-[1.25rem] pt-4 pb-10 bg-[#fff8f4] flex flex-col gap-2">
          <span className="jc-label-sm text-[#4e4637] text-center uppercase tracking-wider font-bold">
            POURQUOI CHOISIR JESSY CAKES EVENTS BRAZZAVILLE ?
          </span>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-[0.75rem] bg-[#ffead8] flex items-center gap-1 border border-[#d2c5b2]/20 min-h-[48px] lg:min-h-[44px]">
              <span className="material-symbols-outlined text-[#7b5802] text-[20px] shrink-0">
                payments
              </span>
              <span className="jc-label-sm text-[12px] text-[#241a0e] font-semibold leading-tight">
                MoMo &amp; Airtel acceptés
              </span>
            </div>
            <a
              className="p-2 rounded-[0.75rem] bg-[#ffead8] flex items-center gap-1 border border-[#d2c5b2]/20 min-h-[48px] lg:min-h-[44px] hover:border-[#7b5802] transition-colors"
              href="https://wa.me/242069499512"
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[#7b5802] text-[20px] shrink-0">
                chat
              </span>
              <span className="jc-label-sm text-[12px] text-[#241a0e] font-semibold leading-tight">
                Assistance WhatsApp 06 949 95 12
              </span>
            </a>
            <div className="p-2 rounded-[0.75rem] bg-[#ffead8] flex items-center gap-1 border border-[#d2c5b2]/20 min-h-[48px] lg:min-h-[44px]">
              <span className="material-symbols-outlined text-[#7b5802] text-[20px] shrink-0">
                verified
              </span>
              <span className="jc-label-sm text-[12px] text-[#241a0e] font-semibold leading-tight">
                Qualité Haute Définition &amp; Saveurs
              </span>
            </div>
            <div className="p-2 rounded-[0.75rem] bg-[#ffead8] flex items-center gap-1 border border-[#d2c5b2]/20 min-h-[48px] lg:min-h-[44px]">
              <span className="material-symbols-outlined text-[#7b5802] text-[20px] shrink-0">
                local_shipping
              </span>
              <span className="jc-label-sm text-[12px] text-[#241a0e] font-semibold leading-tight">
                Livraison &amp; Installation Brazzaville
              </span>
            </div>
          </div>
        </section>

        {/* ---------- FAB ---------- */}
        <aside className="fixed bottom-20 lg:bottom-6 right-[1.25rem] z-40">
          <button
            className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full bg-[#7b5802] text-white shadow-[0_8px_24px_-4px_rgba(123,88,2,0.35)] hover:bg-[#c59a45] transition-all active:scale-95 border border-[#ffdea6]/40 cursor-pointer"
            onClick={() => setShowHelp(true)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">support_agent</span>
            <span className="font-semibold tracking-wide jc-label-md">Besoin d'aide ?</span>
          </button>
        </aside>

        {/* ---------- MODALE CONFIRMATION ---------- */}
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-[1.25rem] bg-[#241a0e]/50 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-[#fff8f4] rounded-xl p-6 shadow-2xl flex flex-col items-center text-center gap-4 border border-[#c59a45]/30">
              <div className="w-16 h-16 lg:w-14 lg:h-14 rounded-full bg-[#ffdea6] flex items-center justify-center text-[#5d4200] shadow-sm">
                <span className="material-symbols-outlined text-[36px] lg:text-[30px] text-[#7b5802]">
                  mark_email_read
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="jc-headline-md text-[#241a0e]">Demande bien reçue !</h3>
                <p className="jc-body-md text-[#4e4637]">
                  Merci pour votre confiance. L'équipe Jessy Cakes Events Brazzaville vous contacte
                  par téléphone ou WhatsApp dans les 2 heures.
                </p>
              </div>
              <div className="w-full p-2 rounded-[0.75rem] bg-[#ffead8] flex items-center gap-2 text-left border border-[#d2c5b2]/30">
                <span className="material-symbols-outlined text-[#7b5802] text-[24px]">
                  schedule
                </span>
                <div className="flex flex-col">
                  <span className="jc-label-md text-[#241a0e] font-semibold">
                    Délai de rappel garanti
                  </span>
                  <span className="jc-body-sm text-[#4e4637]">Sous 2 heures ouvrées</span>
                </div>
              </div>
              <button
                className="w-full h-12 rounded-full bg-[#7b5802] text-white jc-label-md active:scale-95 transition-transform shadow-md cursor-pointer"
                id="btn-close-modal"
                onClick={() => setShowConfirm(false)}
                type="button"
              >
                Parfait, merci !
              </button>
            </div>
          </div>
        )}

        {/* ---------- MODALE AIDE ---------- */}
        {showHelp && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowHelp(false)
            }}
          >
            <div className="w-full sm:max-w-md bg-[#fff8f4] rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl flex flex-col gap-4 border border-[#c59a45]/40 max-h-[85vh] overflow-y-auto">
              <div className="flex items-start justify-between border-b border-[#d2c5b2]/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#ffdea6] flex items-center justify-center text-[#5d4200]">
                    <span className="material-symbols-outlined text-[22px] text-[#7b5802]">
                      live_help
                    </span>
                  </div>
                  <div>
                    <h3 className="jc-headline-sm text-[19px] text-[#241a0e] leading-tight">
                      Besoin d'aide ? 🌟
                    </h3>
                    <p className="jc-body-sm text-[12px] text-[#4e4637]">
                      Nous sommes là pour vous à Brazzaville
                    </p>
                  </div>
                </div>
                <button
                  className="w-8 h-8 rounded-full bg-[#ffead8] flex items-center justify-center text-[#4e4637] hover:bg-[#fae5d1] transition-colors"
                  onClick={() => setShowHelp(false)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <span className="jc-label-sm text-[11px] text-[#7b5802] uppercase font-bold tracking-wider">
                  Contact direct atelier (Brazzaville)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    className="flex items-center justify-center gap-1.5 p-3 rounded-[0.75rem] bg-[#ffdea6]/40 text-[#5d4200] border border-[#c59a45]/40 jc-label-md text-[13px] hover:bg-[#ffdea6] transition-colors text-center"
                    href="tel:069499512"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#7b5802]">
                      call
                    </span>
                    <span>06 949 95 12</span>
                  </a>
                  <a
                    className="flex items-center justify-center gap-1.5 p-3 rounded-[0.75rem] bg-[#ffdea6]/40 text-[#5d4200] border border-[#c59a45]/40 jc-label-md text-[13px] hover:bg-[#ffdea6] transition-colors text-center"
                    href="tel:050502686"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#7b5802]">
                      call
                    </span>
                    <span>05 050 26 86</span>
                  </a>
                </div>
                <a
                  className="flex items-center justify-center gap-2 p-3 rounded-[0.75rem] bg-[#25D366]/15 text-[#075E54] border border-[#25D366]/30 jc-label-md hover:bg-[#25D366]/25 transition-colors font-bold"
                  href="https://wa.me/242069499512?text=Bonjour%20Jessy%20Cakes%20Events,%20j'ai%20besoin%20d'aide%20pour%20une%20réservation%20à%20Brazzaville."
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Échanger sur WhatsApp</span>
                </a>
              </div>
              <div className="p-2 rounded-[0.75rem] bg-[#ffead8] flex items-start gap-2 border border-[#d2c5b2]/30">
                <span className="material-symbols-outlined text-[#7b5802] text-[20px] shrink-0 mt-0.5">
                  storefront
                </span>
                <div className="text-[12px]">
                  <span className="font-bold text-[#241a0e] block">
                    Atelier Jessy Cakes Events
                  </span>
                  <span className="text-[#4e4637] block">
                    01 rue babalako, av. Cité des 17, Mfilou, Brazzaville
                  </span>
                  <span className="text-[#7b5802] font-semibold block mt-0.5">
                    Ouvert du Lundi au Samedi • 08h00 - 18h30
                  </span>
                </div>
              </div>
              <button
                className="w-full h-11 rounded-full bg-[#f4dfcc] text-[#241a0e] jc-label-md hover:bg-[#ebd6c3] transition-colors"
                onClick={() => setShowHelp(false)}
                type="button"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
