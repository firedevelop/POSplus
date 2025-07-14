import type { OrderItem } from '../types'
import type { Dispatch } from 'react'
import type { OrderActions } from '../reducers/order-reducer'
import { formatCurrency } from '../helpers'

interface OrderContentsProps {
  order: OrderItem[]
  dispatch: Dispatch<OrderActions>
  t: any
  tip?: number
}

const OrderContents = ({ order, dispatch, t, tip = 0 }: OrderContentsProps) => {
  const subTotal = order.reduce((total, item) => total + item.quantity * item.price, 0)
  const tipAmount = subTotal * (tip / 100)
  const total = subTotal + tipAmount

  return (
    <div>
      {/* Totales movidos arriba */}
      <div className="space-y-3 mb-6">
        <p>
          <h2 className="text-2xl font-black">Total: {formatCurrency(total)}</h2>
        </p>        
        <p>
          Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotal)}</span>
        </p>
        <p>
          Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
      </div>
      
      <h2 className="text-4xl font-black">{t.order}</h2>
      <div className="mt-10 space-y-3">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-5 border-t border-gray-200 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                {t.add}: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full hover:bg-red-200 transition"
              onClick={() =>
                dispatch({ type: 'remove-item', payload: { id: item.id } })
              }
              aria-label={t.remove}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderContents
