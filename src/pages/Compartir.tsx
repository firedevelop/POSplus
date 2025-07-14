interface CompartirProps {
  t: any
}

export default function Compartir({ t }: CompartirProps) {
  return (
    <div className="max-w-2xl mx-auto py-12 flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 text-stripe-blue">
        {/* ...icono... */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
      </svg>
      <h2 className="text-3xl font-bold mb-4">{t.compartirTitulo}</h2>
      <p className="mb-2 text-center">{t.compartirDescripcion}</p>
      <input
        className="w-full max-w-md border rounded p-2 mb-4 text-center"
        value={window.location.href}
        readOnly
        onFocus={e => e.target.select()}
      />
      <button
        className="bg-stripe-blue text-white px-4 py-2 rounded"
        onClick={() => navigator.clipboard.writeText(window.location.href)}
      >
        {t.compartirBoton}
      </button>
    </div>
  )
}