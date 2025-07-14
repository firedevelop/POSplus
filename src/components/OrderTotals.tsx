import { useMemo, Dispatch } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'
import { OrderActions } from '../reducers/order-reducer'
import { useNavigate } from 'react-router-dom'

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  const subTotalAmmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  const tipAmount = subTotalAmmount * (tip / 100)
  const totalAmount = subTotalAmmount + tipAmount

  const navigate = useNavigate()

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subTotalAmmount)}</span>
        </p>

        <p>
          Propina: {''}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

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
    </>
  )
}
