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
  discount?: number
}

const OrderContents = ({ order, dispatch, t, tip = 0, discount = 0 }: OrderContentsProps) => {
  const subTotal = order.reduce((total, item) => total + item.quantity * item.price, 0)
  const discountAmount = subTotal * (discount / 100)
  const discountedSubTotal = subTotal - discountAmount
  const tipAmount = discountedSubTotal * (tip / 100)
  const total = discountedSubTotal + tipAmount
  const navigate = useNavigate()

  const tipOptions = [
    { id: 'tip-0', value: 0, label: '0%' },
    { id: 'tip-5', value: 5, label: '5%' },
    { id: 'tip-10', value: 10, label: '10%' },
    { id: 'tip-25', value: 25, label: '25%' },
    { id: 'tip-50', value: 50, label: '50%' },
    { id: 'tip-100', value: 100, label: '100%' },
  ]

  const discountOptions = [
    { id: 'discount-0', value: 0, label: '0%' },
    { id: 'discount-5', value: 5, label: '5%' },
    { id: 'discount-10', value: 10, label: '10%' },
    { id: 'discount-15', value: 15, label: '15%' },
    { id: 'discount-20', value: 20, label: '20%' },
    { id: 'discount-25', value: 25, label: '25%' },
  ]

  return (
    <div>
      {/* Totales movidos arriba - con estilo distintivo */}
      <div className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-lg p-4 mb-6 border-2 border-lime-600 shadow-lg">
        <h3 className="text-lg font-bold bg-gradient-to-r from-lime-600 to-yellow-500 bg-clip-text text-transparent mb-3">Resumen</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-bold text-lg text-lime-700">{formatCurrency(subTotal)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center text-red-600">
              <span>Descuento ({discount}%):</span>
              <span className="font-bold text-lg">-{formatCurrency(discountAmount)}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Propina:</span>
            <span className="font-bold text-lg text-green-600">{formatCurrency(tipAmount)}</span>
          </div>
          <hr className="border-lime-200" />
          <div className="flex justify-between items-center">
            <span className="text-xl font-black bg-gradient-to-r from-lime-600 to-yellow-500 bg-clip-text text-transparent">Total:</span>
            <span className="text-2xl font-black bg-gradient-to-r from-lime-600 to-yellow-500 bg-clip-text text-transparent">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      {/* Formulario de descuentos */}
      <div className="mb-6 space-y-5">
        <label className="block text-stripe-dark font-medium mb-1 text-lg">
          Porcentaje de descuento
        </label>
        <form className="flex flex-wrap gap-2 items-center" onSubmit={e => e.preventDefault()}>
          {discountOptions.map((option) => (
            <div key={option.id} className="relative">
              <input
                className="peer absolute opacity-0 w-0 h-0"
                type="radio"
                id={option.id}
                name="discount"
                value={option.value}
                checked={discount === option.value}
                onChange={() => dispatch({ type: 'add-discount', payload: { value: option.value } })}
              />
              <label
                htmlFor={option.id}
                className={`block px-4 py-2 rounded-lg border font-semibold cursor-pointer transition-colors ${
                  option.value === 0 
                    ? 'border-gray-400 text-gray-600 peer-checked:bg-gray-500 peer-checked:text-white peer-checked:border-gray-500 hover:bg-gray-500/10'
                    : 'border-red-600 text-red-600 peer-checked:bg-red-600 peer-checked:text-white peer-checked:border-red-600 hover:bg-red-600/10'
                }`}
              >
                {option.value === 0 ? '0%' : `-${option.label}`}
              </label>
            </div>
          ))}
          <input
            type="number"
            min={0}
            max={100}
            step={1}
            value={discount === 0 ? '' : discount}
            onChange={(e) => {
              const value = e.target.value
              if (/^\d{0,3}$/.test(value)) {
                dispatch({ type: 'add-discount', payload: { value: value === '' ? 0 : Number(value) } })
              }
            }}
            className="ml-2 w-20 border border-stripe-gray2 rounded-lg px-3 py-2 bg-white text-stripe-dark placeholder-stripe-gray3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            placeholder="Otro"
          />
        </form>
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
                className={`block px-4 py-2 rounded-lg border font-semibold cursor-pointer transition-colors ${
                  option.value === 0 
                    ? 'border-gray-400 text-gray-600 peer-checked:bg-gray-500 peer-checked:text-white peer-checked:border-gray-500 hover:bg-gray-500/10'
                    : 'border-green-600 text-green-600 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 hover:bg-green-600/10'
                }`}
              >
                {option.value === 0 ? '0%' : `+${option.label}`}
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
            className="ml-2 w-20 border border-stripe-gray2 rounded-lg px-3 py-2 bg-white text-stripe-dark placeholder-stripe-gray3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
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
      
      {/* TICKET TÉRMICO POS */}
      <h2 className="text-2xl font-black mb-4">{t.ticket.title}</h2>
      <div className="bg-white border border-gray-300 shadow-lg p-6 font-mono text-base max-w-sm mx-auto">
        {/* Encabezado del ticket */}
        <div className="text-center mb-4 border-b border-dotted border-gray-400 pb-4">
          <div className="text-lg font-bold">{t.ticket.header}</div>
          <div className="text-sm text-gray-600">{t.ticket.salesTicket}</div>
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('es-ES')} {new Date().toLocaleTimeString('es-ES')}
          </div>
        </div>

        {/* Lista de productos */}
        <div className="mb-4">
          {order.map((item, index) => (
            <div key={item.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-2">
                  <div className="text-sm font-semibold uppercase tracking-wide">{item.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.quantity} {t.ticket.quantity} {formatCurrency(item.price)}
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="font-bold text-base">{formatCurrency(item.price * item.quantity)}</div>
                  <button
                    className="text-red-600 hover:text-red-800 mt-1 w-6 h-6 flex items-center justify-center"
                    onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })}
                    aria-label={t.remove}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              {index < order.length - 1 && (
                <div className="border-b border-dotted border-gray-300 mt-2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Línea separadora */}
        <div className="border-b border-dotted border-gray-400 my-4"></div>

        {/* Subtotales */}
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>{t.ticket.subtotal}</span>
            <span>{formatCurrency(subTotal)}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-red-600">
              <span>{t.ticket.discount} ({discount}%):</span>
              <span>-{formatCurrency(discountAmount)}</span>
            </div>
          )}
          
          <div className="flex justify-between text-green-600">
            <span>{t.ticket.tip} ({tip}%):</span>
            <span>+{formatCurrency(tipAmount)}</span>
          </div>
        </div>

        {/* Línea separadora doble */}
        <div className="border-b-2 border-double border-gray-600 my-3"></div>

        {/* Total */}
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>{t.ticket.total}</span>
          <span>{formatCurrency(total)}</span>
        </div>

        {/* Pie del ticket */}
        <div className="text-center text-sm text-gray-500 border-t border-dotted border-gray-400 pt-4">
          <div>{t.ticket.thankYou}</div>
          <div className="mt-1">{t.ticket.ticketNumber}{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</div>
        </div>
      </div>
    </div>
  )
}

export default OrderContents
