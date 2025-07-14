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
    <div className="bg-white border border-stripe-gray2 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`desc-${item.id}`}
      >
        <div className="flex items-center gap-3 text-left flex-1">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded-full border border-stripe-gray2"
          />
          <div>
            <h3 className="text-stripe-dark font-semibold text-lg">{item.name}</h3>
            <p className="text-stripe-gray3 text-sm">{formatCurrency(item.price)}</p>
          </div>
        </div>
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center bg-stripe-blue rounded-full shadow-sm hover:bg-stripe-dark transition-colors focus:outline-none focus:ring-2 focus:ring-stripe-blue focus:ring-offset-2 ml-2"
          onClick={e => {
            e.stopPropagation()
            dispatch({ type: 'add-item', payload: { item } })
          }}
          aria-label="Añadir"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <svg
          className={`w-5 h-5 ml-2 text-stripe-blue transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          id={`desc-${item.id}`}
          className="px-4 pb-3 text-stripe-dark text-sm"
        >
          {item.description}
        </div>
      )}
    </div>
  )
}
