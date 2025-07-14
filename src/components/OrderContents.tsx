import type { OrderItem } from '../types'
import type { Dispatch } from 'react'
import type { OrderActions } from '../reducers/order-reducer'
import { formatCurrency } from '../helpers'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const tipOptions = [
    { id: 'tip-5', value: 5, label: '5%' },
    { id: 'tip-10', value: 10, label: '10%' },
    { id: 'tip-25', value: 25, label: '25%' },
    { id: 'tip-50', value: 50, label: '50%' },
    { id: 'tip-100', value: 100, label: '100%' },
  ]

  return (
    <div>
      {/* Totales movidos arriba - con estilo distintivo */}
      <div className="bg-white rounded-lg p-4 mb-6 border-2 border-stripe-blue shadow-sm">
        <h3 className="text-lg font-bold text-stripe-blue mb-3">Resumen</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-stripe-gray3">Subtotal:</span>
            <span className="font-bold text-lg">{formatCurrency(subTotal)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stripe-gray3">Propina:</span>
            <span className="font-bold text-lg">{formatCurrency(tipAmount)}</span>
          </div>
          <hr className="border-stripe-gray2" />
          <div className="flex justify-between items-center">
            <span className="text-xl font-black text-stripe-blue">Total:</span>
            <span className="text-2xl font-black text-stripe-blue">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      {/* Formulario de propina */}
      <div className="mb-6 space-y-5">
        <label className="block text-stripe-dark font-medium mb-1 text-lg">
          Porcentaje de propina
        </label>
        <form className="flex flex-wrap gap-2 items-center" onSubmit={e => e.preventDefault()}>
          {tipOptions.map((option) => (
            <div key={option.id} className="relative">
              <input
                className="peer absolute opacity-0 w-0 h-0"
                type="radio"
                id={option.id}
                name="tip"
                value={option.value}
                checked={tip === option.value}
                onChange={() => dispatch({ type: 'add-tip', payload: { value: option.value } })}
              />
              <label
                htmlFor={option.id}
                className="block px-4 py-2 rounded-lg border border-stripe-blue text-stripe-blue font-semibold cursor-pointer transition-colors
                  peer-checked:bg-stripe-blue peer-checked:text-white peer-checked:border-stripe-blue
                  hover:bg-stripe-blue/10"
              >
                {option.label}
              </label>
            </div>
          ))}
          <input
            type="number"
            min={0}
            max={100}
            step={1}
            value={tip === 0 ? '' : tip}
            onChange={(e) => {
              const value = e.target.value
              if (/^\d{0,3}$/.test(value)) {
                dispatch({ type: 'add-tip', payload: { value: value === '' ? 0 : Number(value) } })
              }
            }}
            className="ml-2 w-20 border border-stripe-gray2 rounded-lg px-3 py-2 bg-white text-stripe-dark placeholder-stripe-gray3 focus:outline-none focus:ring-2 focus:ring-stripe-blue focus:border-stripe-blue transition"
            placeholder="Otro"
          />
        </form>
      </div>

      {/* Botón Guardar orden */}
      <div className="mb-6">
        <button
          type="button"
          className="w-full bg-stripe-blue text-white font-semibold py-2 rounded-lg shadow-sm hover:bg-stripe-dark transition-colors focus:outline-none focus:ring-2 focus:ring-stripe-blue focus:ring-offset-2"
          onClick={() => {
            const orderNumber = Math.floor(100 + Math.random() * 900)
            dispatch({ type: 'reset-order' })
            navigate('/confirmacion', { state: { orderNumber } })
          }}
        >
          Guardar orden
        </button>
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
