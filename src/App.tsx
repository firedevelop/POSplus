import { useReducer, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'
import { initialState, orderReducer } from './reducers/order-reducer'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import Credits from './pages/Credits'
import Compartir from './pages/Compartir'
import OrderConfirmation from './pages/OrderConfirmation'
import { menuData } from './data/menu' // Solo si necesitas varios idiomas
import type { MenuItemType } from './types/MenuItem'
import { translations } from './i18n/index'

const categories = [
  { key: 'pizzas', label: 'Pizzas' },
  { key: 'entrantes', label: 'Entrantes' },
  { key: 'bebidas', label: 'Bebidas' },
  { key: 'postres', label: 'Postres' }
]

// Cambia los códigos de idioma a formato estándar: 'es-ES', 'en-US', etc.
const LANGS = [
  { code: 'es-ES', flag: 'https://flagcdn.com/es.svg', label: 'Español' },
  { code: 'en-US', flag: 'https://flagcdn.com/us.svg', label: 'English' },
  { code: 'it-IT', flag: 'https://flagcdn.com/it.svg', label: 'Italiano' },
  { code: 'fr-FR', flag: 'https://flagcdn.com/fr.svg', label: 'Français' },
  { code: 'de-DE', flag: 'https://flagcdn.com/de.svg', label: 'Deutsch' },
] as const

// Usa los nuevos códigos en tu lógica de idioma
type LangCode = typeof LANGS[number]['code']

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  const [activeCategory, setActiveCategory] = useState('pizzas')
  const [lang, setLang] = useState<LangCode>('es-ES')
  const [showLangs, setShowLangs] = useState(false)

  const currentMenu = menuData[lang]?.[activeCategory] || []
  const t = translations[lang]

  return (
    <Router>
      <div className="min-h-screen bg-stripe-gray font-sans flex flex-col py-8 px-4 sm:px-6 lg:px-8">
        {/* --- Menú de navegación superior --- */}
        <nav className="w-full mb-8 flex flex-wrap items-center justify-between text-base sm:text-lg font-medium">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 transition-colors text-stripe-dark hover:text-stripe-blue"
            >
              <img
                src="/logo.svg"
                alt="POS plus Logo"
                className="h-8 w-auto drop-shadow-md"
              />
              <span className="text-xl font-black tracking-tight">POS plus</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-4 ml-4">
              <Link
                to="/"
                className="flex items-center gap-1 transition-colors text-stripe-gray3 hover:text-stripe-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-stripe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                {t.home}
              </Link>
              
              <Link
                to="/compartir"
                className="flex items-center gap-1 transition-colors text-stripe-gray3 hover:text-stripe-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-stripe-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                </svg>
                {t.share}
              </Link>
              
              <Link
                to="/plans"
                className="flex items-center gap-1 transition-colors text-stripe-gray3 hover:text-stripe-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-stripe-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                {t.plans.titulo}
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center gap-1 transition-colors text-stripe-gray3 hover:text-stripe-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-stripe-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {t.contact}
              </Link>
            </div>
          </div>
          {/* Language selector moved to the right */}
          <div className="relative">
            <button
              className="flex items-center border rounded px-2 py-1 bg-white text-stripe-blue font-semibold gap-2"
              onClick={() => setShowLangs(v => !v)}
            >
              <img
                src={LANGS.find(l => l.code === lang)?.flag}
                alt=""
                className="w-5 h-5 rounded-full object-cover"
                style={{ background: "#fff" }}
              />
              {LANGS.find(l => l.code === lang)?.label}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLangs && (
              <div className="absolute right-0 mt-2 bg-white border border-stripe-blue rounded-lg shadow-lg z-10 min-w-[140px]">
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    className={`flex items-center w-full px-4 py-2 gap-2 rounded-lg border border-transparent font-semibold transition-colors
          ${lang === l.code
            ? 'bg-stripe-blue text-white border-stripe-blue'
            : 'bg-white text-stripe-blue hover:bg-stripe-blue/10'}
        `}
                    onClick={() => {
                      setLang(l.code)
                      setShowLangs(false)
                    }}
                  >
                    <img
                      src={l.flag}
                      alt={l.label}
                      className="w-5 h-5 rounded-full object-cover"
                      style={{ background: "#fff" }}
                    />
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        {/* --- Fin menú navegación superior --- */}

        <div className="w-full bg-white shadow-xl rounded-3xl p-4 sm:p-10 lg:p-16 border border-stripe-gray2">
          <Routes>
            <Route
              path="/"
              element={
                <main className="grid grid-cols-1 gap-6 lg:gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  <section className="w-full p-4 sm:p-6 lg:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2 lg:col-span-2 xl:col-span-2 2xl:col-span-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-stripe-dark mb-6 flex items-center gap-3">
                      {t.menu}
                    </h2>
                    <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-stripe-gray2 scrollbar-track-transparent">
                      {categories.map(cat => (
                        <button
                          key={cat.key}
                          className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold border transition-colors
        ${activeCategory === cat.key
          ? 'bg-stripe-blue text-white border-stripe-blue'
          : 'bg-white text-stripe-blue border-stripe-blue hover:bg-stripe-blue/10'}
      `}
                          onClick={() => setActiveCategory(cat.key)}
                        >
                          {t[cat.key]}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {currentMenu.map((item: MenuItemType) => (
                        <MenuItem key={item.id} item={item} dispatch={dispatch} />
                      ))}
                    </div>
                  </section>

                  <section className="w-full p-4 sm:p-6 lg:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2 flex flex-col justify-between lg:col-span-1 xl:col-span-1 2xl:col-span-1">
                    {state.order.length ? (
                      <>
                        <OrderContents order={state.order} dispatch={dispatch} t={t} />
                        <TipPercentageForm dispatch={dispatch} tip={state.tip} t={t} />
                        <OrderTotals
                          order={state.order}
                          tip={state.tip}
                          dispatch={dispatch}
                        />
                        {/* Elimina el botón duplicado aquí */}
                      </>
                    ) : (
                      <div className="flex flex-1 items-center justify-center h-full">
                        <p className="text-center text-stripe-gray3 text-lg">
                          {t.emptyOrder}
                        </p>
                      </div>
                    )}
                  </section>
                </main>
              }
            />
            <Route path="/plans" element={<Plans t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
            <Route path="/credits" element={<Credits t={t} />} />
            <Route path="/compartir" element={<Compartir t={t} />} />
            <Route path="/confirmacion" element={<OrderConfirmation t={t} />} />
          </Routes>
        </div>
        {/* Footer solo para Credits */}
        <footer className="w-full mt-8 flex flex-col items-center">
  <div className="flex items-center gap-3 text-lg text-stripe-gray3 font-medium">
    
    <a
      href="https://github.com/firedevelop/Tipify"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-stripe-blue transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
      GitHub
    </a>
    <a
      href="https://firedevelop.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-stripe-blue transition-colors"
    >
      by fireDevelop
    </a>
    <span className="hidden sm:inline">|</span>
    <span className="text-lg text-stripe-gray3">
      MIT License ©{new Date().getFullYear()}
    </span>
    <Link to="/credits" className="hover:text-stripe-blue transition-colors">{t.credits}</Link>
  </div>
</footer>
      </div>
    </Router>
  )
}

export default App
