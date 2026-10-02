import { useState } from 'react'

export default function AccountPage() {
  const [view, setView] = useState('login') // 'login' | 'client' | 'admin'
  const [username, setUsername] = useState('Marie')
  const [password, setPassword] = useState('jessycakesEvents')
  const [showPass, setShowPass] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [quickHelp, setQuickHelp] = useState(false)
  const [validated, setValidated] = useState({})

  const handleAdminLogin = (e) => {
    e.preventDefault()
    if (password === 'jessycakesEvents') {
      setLoginError('')
      switchView('admin')
    } else {
      setLoginError(
        "Mot de passe incorrect pour le personnel. Le mot de passe atelier est : jessycakesEvents"
      )
    }
  }

  const switchView = (v) => {
    setView(v)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pb-28 lg:pb-12 lg:pt-16 max-w-md mx-auto relative shadow-2xl bg-[#FFFDF9] text-[#2B1E16]">
      {/* ================= HEADER ================= */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EEDDC8]/60 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8EXuKwcJADksV9Z8izM-57VTeJ91jwq7NnkgMcLxP2o-hTdSaUb1OzNbHogZr1Ux_OnwQX-IdnZBkGNX34IcGhCSTuy-mcZFlzZ-caep5Mcd6KiWS1C2zgMwZhl1YM1Wx3Q0F0uGhVTbzGcz0v4Kq5VekfO-XOxAWXlZ9IQ41XmSVhca2Zs2icg-LrxUe5iKVU2fmREE0VuZH9orsDeHnyWPAbHvWwMBrl7f5lfkDIAwU8j6eMiirmTMyFRsrTFc"
            alt="Jessy Cakes Events"
            className="w-10 h-10 rounded-full border border-amber-300 shadow-sm object-cover bg-white"
          />
          <div>
            <h1 className="font-serif font-bold text-base tracking-tight text-[#2B1E16] leading-tight">
              Jessy Cakes Events
            </h1>
            <p className="text-[11px] text-[#8C6721] font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[9px]">location_dot</span> Brazzaville
              • Mfilou
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="w-8 h-8 rounded-full bg-[#FDF7EB] text-[#8C6721] flex items-center justify-center text-xs border border-[#EEDDC8] hover:bg-[#C59A45] hover:text-white transition"
            href="tel:+242069499512"
          >
            <span className="material-symbols-outlined text-[16px]">phone</span>
          </a>
          <button
            className="w-8 h-8 rounded-full bg-[#FDEEEF] text-[#C59A45] flex items-center justify-center text-xs border border-pink-200"
            onClick={() => setQuickHelp(!quickHelp)}
          >
            <span className="material-symbols-outlined text-[16px]">help</span>
          </button>
        </div>
      </header>

      {/* Bandeau aide rapide */}
      {quickHelp && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-900 flex items-start justify-between">
          <p>
            <span className="material-symbols-outlined mr-1 text-amber-600 text-[14px] align-middle">
              info
            </span>
            Besoin d'aide pour l'équipe ou pour un suivi de commande ? Contact direct atelier au{' '}
            <strong>06 949 95 12</strong>.
          </p>
          <button className="text-amber-800 hover:text-black ml-2 font-bold" onClick={() => setQuickHelp(false)}>
            &times;
          </button>
        </div>
      )}

      <main className="px-4 py-4 space-y-4">
        {/* ============================================================ */}
        {/* VIEW 1 : PORTAIL DE CONNEXION                                */}
        {/* ============================================================ */}
        {view === 'login' && (
          <section className="space-y-4">
            <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FDF7EB] to-[#FFF8F4] border-2 border-[#C59A45]/30 rounded-2xl p-4 shadow-sm relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#C59A45]/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#C59A45] text-white uppercase shadow-sm">
                  <span className="material-symbols-outlined text-[10px]">shield</span> Accès
                  Réservé
                </span>
                <span className="text-xs font-semibold text-[#8C6721]">Équipe Jessy Cakes</span>
              </div>
              <h2 className="font-serif text-lg font-bold text-[#2B1E16] mb-1">
                Espace Personnel &amp; Atelier
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Cette partie est{' '}
                <strong>exclusivement réservée pour le personnel de Jessy Cakes Events</strong>{' '}
                (consultation des commandes, organisation des livraisons à Brazzaville et suivi des
                prestations mariage/fêtes).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3.5 border border-[#EEDDC8] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDEEEF] text-[#C59A45] flex items-center justify-center text-base">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-semibold">
                    Vous préparez une fête ?
                  </span>
                  <button
                    className="text-sm font-bold text-[#8C6721] hover:text-[#C59A45] underline decoration-[#C59A45] underline-offset-2 flex items-center gap-1 text-left"
                    onClick={() => switchView('client')}
                  >
                    <span>👉 Je suis un client</span>
                    <span className="material-symbols-outlined text-xs">arrow_right</span>
                  </button>
                </div>
              </div>
              <button
                className="px-3 py-1.5 bg-[#FDF7EB] text-[#8C6721] text-xs font-semibold rounded-lg border border-[#EEDDC8] hover:bg-[#C59A45] hover:text-white transition"
                onClick={() => switchView('client')}
              >
                Voir mes commandes
              </button>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EEDDC8] shadow-sm space-y-4">
              <div className="border-b border-[#EEDDC8]/50 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#2B1E16]">Connexion Collaborateur</h3>
                  <p className="text-[11px] text-stone-500">
                    Accédez au carnet de commandes &amp; livraisons
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#FDF7EB] text-[#C59A45] flex items-center justify-center text-xs">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                </span>
              </div>

              <form className="space-y-3.5" onSubmit={handleAdminLogin}>
                <div>
                  <label className="block text-xs font-semibold text-[#2B1E16] mb-1.5">
                    Nom d'utilisateur <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400 text-xs">
                      <span className="material-symbols-outlined text-[14px]">work</span>
                    </span>
                    <input
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FFFDF9] border border-[#EEDDC8] rounded-xl text-xs text-[#2B1E16] focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45] transition"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Ex: Marie / Jessy"
                      required
                      type="text"
                      value={username}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-[#2B1E16]">
                      Mot de passe secret <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-mono">
                      Clé atelier
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400 text-xs">
                      <span className="material-symbols-outlined text-[14px]">key</span>
                    </span>
                    <input
                      className="w-full pl-9 pr-9 py-2.5 bg-[#FFFDF9] border border-[#EEDDC8] rounded-xl text-xs text-[#2B1E16] font-mono focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45] transition"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      type={showPass ? 'text' : 'password'}
                      value={password}
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600 text-xs"
                      onClick={() => setShowPass(!showPass)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {showPass ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                  <p className="text-[10px] text-stone-500 mt-1">
                    <span className="material-symbols-outlined text-green-600 mr-1 text-[10px] align-middle">
                      check
                    </span>
                    Mot de passe d'équipe pré-rempli pour validation rapide.
                  </p>
                </div>

                {loginError && (
                  <p className="text-[11px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {loginError}
                  </p>
                )}

                <button
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#C59A45] to-[#8C6721] text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 active:scale-[0.99] transition flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[16px]">login</span>
                  <span>Se connecter en tant qu'admin</span>
                </button>
              </form>
            </div>

            <div className="bg-[#FDF7EB] border border-[#EEDDC8] rounded-2xl p-3.5 text-xs text-[#8C6721] space-y-1.5">
              <p className="font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#C59A45] text-[16px]">
                  auto_awesome
                </span>
                Conçu pour une prise en main ultra simple :
              </p>
              <ul className="text-[11px] text-stone-600 space-y-1 list-disc list-inside">
                <li>
                  <strong>Bouton direct WhatsApp :</strong> pour contacter les mariés ou les clients
                  en un clic.
                </li>
                <li>
                  <strong>Fiches de commande aérées :</strong> pas de jargon informatique, tout est
                  trié par date de livraison.
                </li>
                <li>
                  <strong>Cases de statut faciles :</strong> marquez « En préparation » ou « Livré »
                  facilement.
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* VIEW 2 : ESPACE CLIENT                                       */}
        {/* ============================================================ */}
        {view === 'client' && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                className="text-xs font-semibold text-[#8C6721] flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-[#EEDDC8] shadow-sm"
                onClick={() => switchView('login')}
              >
                <span className="material-symbols-outlined text-[10px]">arrow_back</span> Changer
                d'accès
              </button>
              <span className="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>{' '}
                Espace Client Actif
              </span>
            </div>

            <div className="bg-gradient-to-r from-[#FFF8F4] via-[#FDF7EB] to-white border border-[#EEDDC8] rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-[#8C6721] font-semibold uppercase tracking-wider">
                    Bienvenue dans votre salon
                  </p>
                  <h2 className="font-serif text-lg font-bold text-[#2B1E16]">
                    Bonjour Grace Malonga ✨
                  </h2>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Voici le résumé clair et limpide de toute votre activité chez Jessy Cakes
                    Events.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C59A45]/15 text-[#C59A45] flex items-center justify-center text-sm font-bold border border-[#C59A45]/30">
                  GM
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-white p-3 rounded-xl border border-[#EEDDC8] shadow-sm">
                <span className="text-[10px] text-stone-500 font-medium block">
                  Commandes en cours
                </span>
                <span className="font-bold text-base text-[#8C6721] flex items-center gap-1">
                  2 prestations{' '}
                  <span className="material-symbols-outlined text-xs text-[#C59A45]">
                    room_service
                  </span>
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium inline-block mt-1">
                  1 confirmée • 1 en cours
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#EEDDC8] shadow-sm">
                <span className="text-[10px] text-stone-500 font-medium block">
                  Prochain Grand Jour
                </span>
                <span className="font-bold text-sm text-[#2B1E16] block truncate">
                  Samedi 28 Juin
                </span>
                <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-medium inline-block mt-1">
                  Mariage Bacongo
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-sm text-[#2B1E16] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#C59A45] text-[16px]">
                    checklist
                  </span>
                  Vos 2 Prestations Résumées
                </h3>
                <span className="text-[11px] text-stone-500">Détails limpides</span>
              </div>

              {/* Fiche 1 */}
              <div className="bg-white rounded-2xl border-2 border-[#C59A45]/30 overflow-hidden shadow-sm">
                <div className="bg-[#FDF7EB] px-3.5 py-2 border-b border-[#EEDDC8] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8C6721] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#C59A45] text-[14px]">
                      cake
                    </span>
                    1. Pièce Montée Royale
                  </span>
                  <span className="badge-status-ready text-[10px] px-2 py-0.5 rounded-full font-bold">
                    ✓ Confirmée
                  </span>
                </div>
                <div className="p-3.5 space-y-2.5 text-xs">
                  <div className="grid grid-cols-2 gap-2 bg-stone-50 p-2.5 rounded-xl text-[11px]">
                    <div>
                      <span className="text-stone-400 block text-[9px] uppercase">
                        Type de commande
                      </span>
                      <strong className="text-stone-800">Gâteau 3 Étages Rose Gold</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[9px] uppercase">
                        Type d'événement
                      </span>
                      <strong className="text-stone-800">Mariage &amp; Dot Célébration</strong>
                    </div>
                    <div className="col-span-2 border-t border-stone-200/60 pt-1.5 mt-0.5">
                      <span className="text-stone-400 block text-[9px] uppercase">
                        Lieu de l'événement
                      </span>
                      <strong className="text-[#8C6721] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">location_on</span>
                        Salle Polyvalente, Bacongo (Brazzaville)
                      </strong>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-600 px-1">
                    <span>
                      <span className="material-symbols-outlined text-amber-600 mr-1 text-[12px] align-middle">
                        schedule
                      </span>
                      Livraison : <strong>28 Juin à 14h00</strong>
                    </span>
                    <span>
                      <span className="material-symbols-outlined text-stone-400 mr-1 text-[12px] align-middle">
                        groups
                      </span>
                      Pour <strong>250 convives</strong>
                    </span>
                  </div>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B1E16]">
                      Montant : 185 000 FCFA
                    </span>
                    <a
                      className="px-2.5 py-1 bg-[#25D366]/10 text-[#128C7E] font-semibold text-[11px] rounded-lg flex items-center gap-1 border border-[#25D366]/30"
                      href="https://wa.me/242069499512?text=Bonjour%20Jessy%20Cakes,%20question%20sur%20ma%20commande%20Gateau%20Mariage%20Grace"
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="material-symbols-outlined text-[12px]">chat</span> Échanger
                      sur WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Fiche 2 */}
              <div className="bg-white rounded-2xl border border-[#EEDDC8] overflow-hidden shadow-sm">
                <div className="bg-stone-50 px-3.5 py-2 border-b border-[#EEDDC8] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2B1E16] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#C59A45] text-[14px]">
                      photo_camera
                    </span>
                    2. Couverture Photo &amp; Vidéo HD
                  </span>
                  <span className="badge-status-progress text-[10px] px-2 py-0.5 rounded-full font-bold">
                    ⏳ En préparation
                  </span>
                </div>
                <div className="p-3.5 space-y-2.5 text-xs">
                  <div className="grid grid-cols-2 gap-2 bg-stone-50 p-2.5 rounded-xl text-[11px]">
                    <div>
                      <span className="text-stone-400 block text-[9px] uppercase">Formule</span>
                      <strong className="text-stone-800">Duo Photo + Vidéo Cérémonie</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[9px] uppercase">Événement</span>
                      <strong className="text-stone-800">Mariage Religieux &amp; Soirée</strong>
                    </div>
                    <div className="col-span-2 border-t border-stone-200/60 pt-1.5 mt-0.5">
                      <span className="text-stone-400 block text-[9px] uppercase">Lieu précis</span>
                      <strong className="text-[#8C6721] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">location_on</span>
                        Cité des 17, Mfilou vers Bacongo
                      </strong>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-600 px-1">
                    <span>
                      <span className="material-symbols-outlined text-amber-600 mr-1 text-[12px] align-middle">
                        schedule
                      </span>
                      Date : <strong>28 Juin dès 09h00</strong>
                    </span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">check</span> Équipe
                      assignée
                    </span>
                  </div>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B1E16]">
                      Montant : 145 000 FCFA
                    </span>
                    <button
                      className="px-2.5 py-1 bg-[#FDF7EB] text-[#8C6721] font-semibold text-[11px] rounded-lg border border-[#EEDDC8]"
                      onClick={() =>
                        alert('Votre fiche est complète et validée avec notre équipe Jessy Cakes Events.')
                      }
                    >
                      Voir fiche mémo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                className="w-full py-2.5 px-4 bg-[#FDF7EB] border border-[#C59A45] text-[#8C6721] font-bold text-xs rounded-xl hover:bg-[#C59A45] hover:text-white transition flex items-center justify-center gap-2"
                onClick={() => alert('Redirection vers le configurateur de réservation...')}
              >
                <span className="material-symbols-outlined text-sm">add_circle</span>
                <span>Ajouter une nouvelle prestation à mon événement</span>
              </button>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* VIEW 3 : TABLEAU DE BORD ADMIN                               */}
        {/* ============================================================ */}
        {view === 'admin' && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <h2 className="font-serif font-bold text-base text-[#2B1E16]">
                  Tableau de Bord Atelier
                </h2>
              </div>
              <button
                className="text-xs font-medium text-stone-500 hover:text-red-700 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200"
                onClick={() => switchView('login')}
              >
                <span className="material-symbols-outlined mr-1 text-[12px] align-middle">
                  logout
                </span>
                Quitter
              </button>
            </div>

            <div className="bg-gradient-to-r from-[#C59A45] to-[#8C6721] text-white rounded-2xl p-4 shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] bg-white/20 text-white font-semibold px-2 py-0.5 rounded uppercase">
                    Session {username || 'Marie'} (Atelier Brazzaville)
                  </span>
                  <h3 className="font-serif text-base font-bold mt-1">
                    Carnet des Commandes Enregistrées
                  </h3>
                  <p className="text-[11px] text-white/90 leading-tight mt-0.5">
                    Toutes les données renvoyées depuis l'application : clients, contacts, types et
                    dates de livraison.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  <span className="material-symbols-outlined text-[18px]">clipboard</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/20 text-center">
                <div className="bg-black/10 rounded-lg p-1.5">
                  <span className="block text-[9px] text-amber-200">À préparer</span>
                  <span className="text-sm font-bold">3 Gâteaux</span>
                </div>
                <div className="bg-black/10 rounded-lg p-1.5">
                  <span className="block text-[9px] text-amber-200">Événements</span>
                  <span className="text-sm font-bold">2 Mariages</span>
                </div>
                <div className="bg-black/10 rounded-lg p-1.5">
                  <span className="block text-[9px] text-amber-200">Ce week-end</span>
                  <span className="text-sm font-bold">4 Équipes</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scroll text-xs">
              <button className="px-3 py-1.5 bg-[#C59A45] text-white rounded-full font-semibold shadow-sm shrink-0 text-[11px]">
                Toutes (4)
              </button>
              <button className="px-3 py-1.5 bg-white text-stone-600 border border-[#EEDDC8] rounded-full font-medium shrink-0 text-[11px] hover:bg-[#FDF7EB]">
                🎂 Gâteaux seuls (2)
              </button>
              <button className="px-3 py-1.5 bg-white text-stone-600 border border-[#EEDDC8] rounded-full font-medium shrink-0 text-[11px] hover:bg-[#FDF7EB]">
                📸 Photo &amp; Déco (2)
              </button>
              <button className="px-3 py-1.5 bg-white text-stone-600 border border-[#EEDDC8] rounded-full font-medium shrink-0 text-[11px] hover:bg-[#FDF7EB]">
                Urgent Brazza
              </button>
            </div>

            <div className="space-y-3">
              {/* Commande 1 */}
              <div className="bg-white rounded-2xl border border-[#EEDDC8] p-3.5 shadow-sm space-y-3">
                <div className="flex items-start justify-between border-b border-stone-100 pb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FDF7EB] text-[#8C6721] font-bold text-[10px] flex items-center justify-center">
                        1
                      </span>
                      <h4 className="font-bold text-sm text-[#2B1E16]">Grace Malonga</h4>
                      <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">
                        Mariage civil &amp; Dot
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5 pl-8">
                      Inscrit via l'app • Id #JC-2025-084
                    </p>
                  </div>
                  <span className="badge-status-new text-[10px] font-bold px-2 py-0.5 rounded-full">
                    À confirmer
                  </span>
                </div>
                <div className="bg-[#FFFDF9] border border-[#EEDDC8]/70 rounded-xl p-2.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">🎂 Prestations demandées :</span>
                    <strong className="text-stone-900 text-right">
                      Gâteau 3 étages + Couverture photo
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">📅 Date &amp; Heure :</span>
                    <strong className="text-[#8C6721]">Samedi 28 Juin 2025 à 14h00</strong>
                  </div>
                  <div className="flex items-start justify-between text-[11px]">
                    <span className="text-stone-500">📍 Lieu de livraison :</span>
                    <span className="text-right font-semibold text-stone-800 max-w-[200px]">
                      Salle Polyvalente, Bacongo (Brazzaville)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-stone-200/50">
                    <span className="text-stone-500">💰 Devis prévisionnel :</span>
                    <strong className="text-emerald-700 font-bold">
                      185 000 FCFA (MoMo/Airtel)
                    </strong>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    className="flex-1 py-2 px-3 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95"
                    href="https://wa.me/242069499512?text=Bonjour%20Grace,%20ici%20Marie%20de%20Jessy%20Cakes%20Events%20pour%20votre%20commande"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span> Contacter
                    WhatsApp
                  </a>
                  <a
                    className="py-2 px-3 bg-stone-100 text-stone-700 text-xs font-bold rounded-xl border border-stone-200 flex items-center justify-center gap-1"
                    href="tel:+242069499512"
                  >
                    <span className="material-symbols-outlined text-[14px]">phone</span> Appeler
                  </a>
                  <button
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition ${
                      validated.c1
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-[#FDF7EB] text-[#8C6721] border-[#EEDDC8] hover:bg-[#C59A45] hover:text-white'
                    }`}
                    onClick={() => setValidated((v) => ({ ...v, c1: true }))}
                  >
                    {validated.c1 ? (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">done_all</span>
                        Confirmé
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Commande 2 */}
              <div className="bg-white rounded-2xl border border-[#EEDDC8] p-3.5 shadow-sm space-y-3">
                <div className="flex items-start justify-between border-b border-stone-100 pb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FDF7EB] text-[#8C6721] font-bold text-[10px] flex items-center justify-center">
                        2
                      </span>
                      <h4 className="font-bold text-sm text-[#2B1E16]">Guy-Serge Mabiala</h4>
                      <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                        Anniversaire Prestige
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5 pl-8">
                      Inscrit via l'app • Id #JC-2025-083
                    </p>
                  </div>
                  <span className="badge-status-progress text-[10px] font-bold px-2 py-0.5 rounded-full">
                    En préparation
                  </span>
                </div>
                <div className="bg-[#FFFDF9] border border-[#EEDDC8]/70 rounded-xl p-2.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">🎂 Prestations demandées :</span>
                    <strong className="text-stone-900 text-right">
                      Gâteau Chocolat Noir &amp; Feuille d'Or
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">📅 Date de livraison :</span>
                    <strong className="text-[#8C6721]">Dimanche 29 Juin 2025 à 16h30</strong>
                  </div>
                  <div className="flex items-start justify-between text-[11px]">
                    <span className="text-stone-500">📍 Lieu de livraison :</span>
                    <span className="text-right font-semibold text-stone-800">
                      Moungali, Rue Kimbondo (Brazzaville)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-stone-200/50">
                    <span className="text-stone-500">💰 Devis convenu :</span>
                    <strong className="text-emerald-700 font-bold">
                      65 000 FCFA (Acompte OK)
                    </strong>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    className="flex-1 py-2 px-3 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95"
                    href="https://wa.me/242050502686?text=Bonjour%20Guy-Serge,%20ici%20Jessy%20Cakes%20Events%20pour%20le%20gateau%20d'anniversaire"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
                    Guy-Serge
                  </a>
                  <button
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition ${
                      validated.c2
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-[#FDF7EB] text-[#8C6721] border-[#EEDDC8] hover:bg-[#C59A45] hover:text-white'
                    }`}
                    onClick={() => setValidated((v) => ({ ...v, c2: true }))}
                  >
                    {validated.c2 ? (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">done_all</span>
                        Confirmé
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          local_shipping
                        </span>
                        Prêt à livrer
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Commande 3 */}
              <div className="bg-white rounded-2xl border border-[#EEDDC8] p-3.5 shadow-sm space-y-3">
                <div className="flex items-start justify-between border-b border-stone-100 pb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FDF7EB] text-[#8C6721] font-bold text-[10px] flex items-center justify-center">
                        3
                      </span>
                      <h4 className="font-bold text-sm text-[#2B1E16]">Vanessa Kouka</h4>
                      <span className="text-[9px] bg-purple-100 text-purple-800 font-bold px-1.5 py-0.5 rounded">
                        Déco &amp; Voiture
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5 pl-8">
                      Inscrit via l'app • Id #JC-2025-081
                    </p>
                  </div>
                  <span className="badge-status-ready text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Équipe prête
                  </span>
                </div>
                <div className="bg-[#FFFDF9] border border-[#EEDDC8]/70 rounded-xl p-2.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">🚗 Prestations demandées :</span>
                    <strong className="text-stone-900 text-right">
                      Fleurissement cortège + Salle Kintélé
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">📅 Date événement :</span>
                    <strong className="text-[#8C6721]">Samedi 05 Juillet 2025 dès 08h00</strong>
                  </div>
                  <div className="flex items-start justify-between text-[11px]">
                    <span className="text-stone-500">📍 Lieu précis :</span>
                    <span className="text-right font-semibold text-stone-800">
                      Hôtel Alima Kintélé, Brazzaville
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    className="flex-1 py-2 px-3 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95"
                    href="https://wa.me/242069499512"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Équipe
                    Déco
                  </a>
                  <button
                    className="py-2 px-3 bg-stone-100 text-stone-700 text-xs font-bold rounded-xl border border-stone-200"
                    onClick={() => alert('Fiche technique Kintélé envoyée aux fleuristes.')}
                  >
                    <span className="material-symbols-outlined text-[14px]">print</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-amber-600 text-base mt-0.5">
                lightbulb
              </span>
              <div>
                <strong className="block text-xs text-amber-950">
                  Astuce pour l'organisation quotidienne :
                </strong>
                <span className="text-[11px] leading-relaxed text-amber-800">
                  Toutes les nouvelles réservations faites par les clients s'ajoutent automatiquement
                  ici avec le numéro WhatsApp, l'adresse à Brazzaville et l'heure de livraison
                  requise.
                </span>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ASSISTANCE FLOTTANTE */}
      <a
        className="fixed bottom-20 lg:bottom-6 right-4 z-40 bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition"
        href="https://wa.me/242069499512?text=Bonjour%20Jessy%20Cakes%20Events,%20besoin%20d'assistance"
        target="_blank"
        rel="noopener"
      >
        <span className="material-symbols-outlined text-lg">chat</span>
        <span className="text-xs font-bold tracking-wide">Besoin d'aide ?</span>
      </a>
    </div>
  )
}
