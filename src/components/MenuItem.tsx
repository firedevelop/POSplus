import { Dispatch, useState } from 'react'
import { formatCurrency } from '../helpers'
import type { MenuItem as MenuItemType } from '../types'
import { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
  item: MenuItemType
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white border border-stripe-gray2 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Imagen del producto */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
        {/* Botón de añadir superpuesto */}
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-stripe-blue rounded-full shadow-lg hover:bg-stripe-dark transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stripe-blue"
          onClick={() => dispatch({ type: 'add-item', payload: { item } })}
          aria-label={`Añadir ${item.name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      {/* Información del producto */}
      <div className="p-3">
        <h3 className="text-stripe-dark font-semibold text-sm sm:text-base mb-1 line-clamp-2 leading-tight">
          {item.name}
        </h3>
        <p className="text-stripe-blue font-bold text-lg mb-2">
          {formatCurrency(item.price)}
        </p>
        
        {/* Botón para ver descripción */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-1 text-stripe-gray3 hover:text-stripe-blue text-xs transition-colors focus:outline-none"
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
            className="mt-2 pt-2 border-t border-stripe-gray2 text-stripe-dark text-xs leading-relaxed"
          >
            {item.description}
          </div>
        )}
      </div>
    </div>
  )
}
