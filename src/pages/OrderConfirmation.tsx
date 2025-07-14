import { useLocation, useNavigate } from "react-router-dom"

interface OrderConfirmationProps {
  t: any
}

const OrderConfirmation = ({ t }: OrderConfirmationProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const orderNumber = location.state?.orderNumber ?? "000"

  return (
    <div className="max-w-xl mx-auto py-16 flex flex-col items-center">
      <div className="flex items-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mr-2 text-stripe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
        <h2 className="text-3xl font-bold text-center">{t.orderSaved}</h2>
      </div>
      <p className="text-lg font-medium mb-2 text-center text-stripe-dark">
        {t.orderIs}
      </p>
      <p className="text-5xl font-extrabold mb-6 text-center text-stripe-blue">
        {orderNumber}
p      </p>
      <button
        className="bg-stripe-blue text-white px-6 py-3 rounded font-semibold"
        onClick={() => navigate("/", { replace: true })}
      >
        {t.backHome}
      </button>
    </div>
  )
}

export default OrderConfirmation
