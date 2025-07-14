import { Dispatch, useState } from 'react'
import { formatCurrency } from '../helpers'
import type { MenuItem as MenuItemType, Template } from '../types'
import { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
  item: MenuItemType
  dispatch: Dispatch<OrderActions>
  template?: Template
}

export default function MenuItem({ item, dispatch, template }: MenuItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`bg-white border-2 ${template?.colors?.border || 'border-lime-200'} rounded-xl shadow-md hover:shadow-xl ${template?.colors?.borderHover || 'hover:border-lime-300'} transition-all duration-300 overflow-hidden group`}>
      {/* Imagen del producto */}
      <button
        type="button"
        className={`relative aspect-square overflow-hidden w-full focus:outline-none focus:ring-4 ${template?.colors?.ring || 'focus:ring-lime-300'} focus:ring-offset-2 rounded-t-xl`}
        onClick={() => dispatch({ type: 'add-item', payload: { item } })}
        aria-label={`Añadir ${item.name} al pedido`}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
        {/* Overlay sutil para indicar que es clickeable */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${template?.colors?.primary || 'from-lime-600 to-yellow-500'} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
            Añadir
          </div>
        </div>
      </button>

      {/* Información del producto */}
      <div className="p-3">
        <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 line-clamp-2 leading-tight">
          {item.name}
        </h3>
        <p className={`bg-gradient-to-r ${template?.colors?.primary || 'from-lime-600 to-yellow-500'} bg-clip-text text-transparent font-bold text-lg mb-2`}>
          {formatCurrency(item.price)}
        </p>
        
        {/* Botón para ver descripción */}
        <button
          type="button"
          className={`w-full flex items-center justify-center gap-1 text-gray-500 ${template?.colors?.text || 'hover:text-lime-600'} text-xs transition-colors focus:outline-none`}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls={`desc-${item.id}`}
        >
          <span>Ver detalles</span>
          <svg
            className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Descripción expandible */}
        {open && (
          <div
            id={`desc-${item.id}`}
            className={`mt-2 pt-2 border-t ${template?.colors?.border || 'border-lime-200'} text-gray-700 text-xs leading-relaxed`}
          >
            {item.description}
          </div>
        )}
      </div>
    </div>
  )
}
