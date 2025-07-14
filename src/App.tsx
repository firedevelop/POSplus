import { useReducer, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
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

// Templates disponibles
const TEMPLATES = [
  
  { 
    id: 'ocean', 
    name: 'Ocean Blue', 
    icon: '🌊',
    colors: {
      primary: 'from-blue-600 to-cyan-500',
      primaryHover: 'from-blue-700 to-cyan-600',
      bg: 'from-blue-50 via-cyan-50 to-blue-50',
      border: 'border-blue-200',
      borderHover: 'border-blue-300',
      text: 'text-blue-600',
      ring: 'ring-blue-300'
    }
  },
  { 
    id: 'sunset', 
    name: 'Sunset Orange', 
    icon: '🌅',
    colors: {
      primary: 'from-orange-600 to-pink-500',
      primaryHover: 'from-orange-700 to-pink-600',
      bg: 'from-orange-50 via-pink-50 to-orange-50',
      border: 'border-orange-200',
      borderHover: 'border-orange-300',
      text: 'text-orange-600',
      ring: 'ring-orange-300'
    }
  },
  { 
    id: 'purple', 
    name: 'Royal Purple', 
    icon: '👑',
    colors: {
      primary: 'from-purple-600 to-indigo-600',
      primaryHover: 'from-purple-700 to-indigo-700',
      bg: 'from-purple-50 via-indigo-50 to-purple-50',
      border: 'border-purple-200',
      borderHover: 'border-purple-300',
      text: 'text-purple-600',
      ring: 'ring-purple-300'
    }
  },
  { 
    id: 'emerald', 
    name: 'Emerald Forest', 
    icon: '🌲',
    colors: {
      primary: 'from-emerald-600 to-teal-600',
      primaryHover: 'from-emerald-700 to-teal-700',
      bg: 'from-emerald-50 via-teal-50 to-emerald-50',
      border: 'border-emerald-200',
      borderHover: 'border-emerald-300',
      text: 'text-emerald-600',
      ring: 'ring-emerald-300'
    }
  },
  { 
    id: 'modern', 
    name: 'Modern Lime', 
    icon: '🌟',
    colors: {
      primary: 'from-lime-600 to-yellow-500',
      primaryHover: 'from-lime-700 to-yellow-600',
      bg: 'from-lime-50 via-yellow-50 to-lime-50',
      border: 'border-lime-200',
      borderHover: 'border-lime-300',
      text: 'text-lime-600',
      ring: 'ring-lime-300'
    }
  },
  { 
    id: 'rose', 
    name: 'Rose Gold', 
    icon: '🌹',
    colors: {
      primary: 'from-rose-500 to-pink-500',
      primaryHover: 'from-rose-600 to-pink-600',
      bg: 'from-rose-50 via-pink-50 to-rose-50',
      border: 'border-rose-200',
      borderHover: 'border-rose-300',
      text: 'text-rose-600',
      ring: 'ring-rose-300'
    }
  }
] as const

type TemplateId = typeof TEMPLATES[number]['id']

// Template por defecto (configurable por el programador)
// Opciones disponibles: 'modern', 'ocean', 'sunset', 'purple', 'emerald', 'rose'
const DEFAULT_TEMPLATE: TemplateId = 'ocean'

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  const [activeCategory, setActiveCategory] = useState('pizzas')
  const [lang, setLang] = useState<LangCode>('es-ES')
  const [showLangs, setShowLangs] = useState(false)
  const [template, setTemplate] = useState<TemplateId>(DEFAULT_TEMPLATE)
  const [showTemplates, setShowTemplates] = useState(false)

  const currentMenu = menuData[lang]?.[activeCategory] || []
  const t = translations[lang]
  const currentTemplate = TEMPLATES.find(tmpl => tmpl.id === template) || TEMPLATES[0]

  // Función para obtener el filtro CSS del logo según el template
  const getLogoFilter = () => {
    switch (template) {
      case 'ocean':
        return 'hue-rotate(200deg) saturate(1.2)'
      case 'sunset':
        return 'hue-rotate(25deg) saturate(1.1)'
      case 'purple':
        return 'hue-rotate(270deg) saturate(1.3)'
      case 'emerald':
        return 'hue-rotate(150deg) saturate(1.1)'
      case 'rose':
        return 'hue-rotate(320deg) saturate(1.2)'
      default: // modern
        return 'none'
    }
  }

  // Cerrar dropdowns cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = () => {
      setShowLangs(false)
      setShowTemplates(false)
    }

    if (showLangs || showTemplates) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [showLangs, showTemplates])

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br ${currentTemplate.colors.bg} font-sans flex flex-col py-8 px-4 sm:px-6 lg:px-8`}>
        {/* --- Menú de navegación superior --- */}
        <nav className={`w-full mb-8 flex flex-wrap items-center justify-between text-base sm:text-lg font-medium bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border ${currentTemplate.colors.border} relative z-40`}>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors text-gray-800 hover:${currentTemplate.colors.text}`}
            >
              <img
                src="/logo.svg"
                alt="POS plus Logo"
                className="h-12 w-auto drop-shadow-md transition-all duration-300"
                style={{ filter: getLogoFilter() }}
              />
              <span className={`text-xl font-black tracking-tight bg-gradient-to-r ${currentTemplate.colors.primary} bg-clip-text text-transparent`}>POS +</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-4 ml-4">
              <Link
                to="/"
                className={`flex items-center gap-1 transition-colors text-gray-600 hover:${currentTemplate.colors.text}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${currentTemplate.colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                {t.home}
              </Link>
              
              <Link
                to="/compartir"
                className={`flex items-center gap-1 transition-colors text-gray-600 hover:${currentTemplate.colors.text}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${currentTemplate.colors.text}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                </svg>
                {t.share}
              </Link>
              
              <Link
                to="/plans"
                className={`flex items-center gap-1 transition-colors text-gray-600 hover:${currentTemplate.colors.text}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${currentTemplate.colors.text}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                {t.plans.titulo}
              </Link>
              
              <Link
                to="/contact"
                className={`flex items-center gap-1 transition-colors text-gray-600 hover:${currentTemplate.colors.text}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${currentTemplate.colors.text}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {t.contact}
              </Link>
            </div>
          </div>
          {/* Template selector and Language selector */}
          <div className="flex items-center gap-3">
            {/* Template selector */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`flex items-center border-2 ${currentTemplate.colors.border} rounded-lg px-3 py-2 bg-gradient-to-r ${currentTemplate.colors.primary} text-white font-semibold gap-2 hover:${currentTemplate.colors.primaryHover} transition-all duration-300 shadow-md`}
                onClick={() => setShowTemplates(v => !v)}
              >
                <span className="text-lg">{currentTemplate.icon}</span>
                {currentTemplate.name}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showTemplates && (
                <div className={`absolute right-0 mt-2 bg-white border-2 ${currentTemplate.colors.border} rounded-lg shadow-xl z-[60] min-w-[160px] backdrop-blur-sm`}>
                  {TEMPLATES.map(tmpl => (
                    <button
                      key={tmpl.id}
                      className={`flex items-center w-full px-4 py-2 gap-2 rounded-lg border border-transparent font-semibold transition-colors
              ${template === tmpl.id
                ? `bg-gradient-to-r ${tmpl.colors.primary} text-white`
                : `bg-white ${tmpl.colors.text} hover:bg-opacity-10 hover:${tmpl.colors.text}`}
            `}
                      onClick={() => {
                        setTemplate(tmpl.id)
                        setShowTemplates(false)
                      }}
                    >
                      <span className="text-lg">{tmpl.icon}</span>
                      {tmpl.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language selector */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`flex items-center border-2 ${currentTemplate.colors.border} rounded-lg px-3 py-2 bg-gradient-to-r ${currentTemplate.colors.primary} text-white font-semibold gap-2 hover:${currentTemplate.colors.primaryHover} transition-all duration-300 shadow-md`}
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
                <div className={`absolute right-0 mt-2 bg-white border-2 ${currentTemplate.colors.border} rounded-lg shadow-xl z-[60] min-w-[140px] backdrop-blur-sm`}>
                  {LANGS.map(l => (
                    <button
                      key={l.code}
                      className={`flex items-center w-full px-4 py-2 gap-2 rounded-lg border border-transparent font-semibold transition-colors
              ${lang === l.code
                ? `bg-gradient-to-r ${currentTemplate.colors.primary} text-white`
                : `bg-white ${currentTemplate.colors.text} hover:bg-opacity-10`}
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
          </div>
        </nav>
        {/* --- Fin menú navegación superior --- */}

          <Routes>
            <Route
              path="/"
              element={
                <main className="grid grid-cols-1 gap-6 lg:gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 relative z-10">
                  <section className={`w-full p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border ${currentTemplate.colors.border} flex flex-col justify-between lg:col-span-1 xl:col-span-1 2xl:col-span-1`}>
                    {state.order.length ? (
                      <>
                        <OrderContents order={state.order} dispatch={dispatch} t={t} tip={state.tip} discount={state.discount} template={currentTemplate} />
                      </>
                    ) : (
                      <div className="flex flex-1 items-center justify-center h-full">
                        <p className="text-center text-gray-500 text-lg">
                          {t.emptyOrder}
                        </p>
                      </div>
                    )}
                  </section>

                  <section className={`w-full p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border ${currentTemplate.colors.border} lg:col-span-2 xl:col-span-2 2xl:col-span-3`}>
                    <h2 className={`text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r ${currentTemplate.colors.primary} bg-clip-text text-transparent`}>
                      {t.menu}
                    </h2>
                    <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-lime-300 scrollbar-track-transparent">
                      {categories.map(cat => (
                        <button
                          key={cat.key}
                          className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold border-2 transition-all duration-300
        ${activeCategory === cat.key
          ? `bg-gradient-to-r ${currentTemplate.colors.primary} text-white ${currentTemplate.colors.border} shadow-lg`
          : `bg-white ${currentTemplate.colors.text} ${currentTemplate.colors.border} hover:bg-opacity-10 hover:shadow-md`}
      `}
                          onClick={() => setActiveCategory(cat.key)}
                        >
                          {t[cat.key]}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
                      {currentMenu.map((item: MenuItemType) => (
                        <MenuItem key={item.id} item={item} dispatch={dispatch} template={currentTemplate} />
                      ))}
                    </div>
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

        {/* Footer solo para Credits */}
        <footer className="w-full mt-8 flex flex-col items-center">
  <div className="flex items-center gap-3 text-lg text-gray-600 font-medium bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3 border border-lime-200">
    
    <a
      href="https://github.com/firedevelop/POSplus"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-lime-600 transition-colors"
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
      className="flex items-center gap-1 hover:text-lime-600 transition-colors"
    >
      by fireDevelop
    </a>
    <span className="hidden sm:inline">|</span>
    <span className="text-lg text-gray-600">
      MIT License ©{new Date().getFullYear()}
    </span>
    <Link to="/credits" className="hover:text-lime-600 transition-colors">{t.credits}</Link>
  </div>
</footer>
      </div>
    </Router>
  )
}

export default App
