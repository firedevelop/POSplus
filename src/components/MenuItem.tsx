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
      <button
        type="button"
        className="relative aspect-square overflow-hidden w-full focus:outline-none focus:ring-2 focus:ring-stripe-blue focus:ring-offset-2 rounded-t-xl"
        onClick={() => dispatch({ type: 'add-item', payload: { item } })}
        aria-label={`Añadir ${item.name} al pedido`}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
        />
        {/* Overlay sutil para indicar que es clickeable */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-stripe-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
            Añadir
          </div>
        </div>
      </button>

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
