import React, { Dispatch, useEffect, useState } from 'react'
import type { OrderActions } from '../reducers/order-reducer'

const tipOptions = [
  { id: 'tip-5', value: 5, label: '5%' },
  { id: 'tip-10', value: 10, label: '10%' },
  { id: 'tip-25', value: 25, label: '25%' },
  { id: 'tip-50', value: 50, label: '50%' },
  { id: 'tip-100', value: 100, label: '100%' },
]

export interface TipPercentageFormProps {
  dispatch: Dispatch<OrderActions>
  tip: number
  t: any // O el tipo específico de tus traducciones si lo tienes
}

export default function TipPercentageForm({
  tip,
  dispatch,
}: TipPercentageFormProps) {
  const [inputValue, setInputValue] = useState(tip === 0 ? '' : String(tip))

  // Sincroniza el input cuando tip cambia desde fuera (por radio)
  useEffect(() => {
    setInputValue(tip === 0 ? '' : String(tip))
  }, [tip])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d{0,3}$/.test(value)) {
      setInputValue(value)
      dispatch({ type: 'add-tip', payload: { value: value === '' ? 0 : Number(value) } })
    }
  }

  const handleRadioChange = (value: number) => {
    setInputValue(String(value))
    dispatch({ type: 'add-tip', payload: { value } })
  }

  return (
    <div className="space-y-5">
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
              checked={Number(inputValue) === option.value}
              onChange={() => handleRadioChange(option.value)}
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
          value={inputValue}
          onChange={handleInputChange}
          className="ml-2 w-20 border border-stripe-gray2 rounded-lg px-3 py-2 bg-white text-stripe-dark placeholder-stripe-gray3 focus:outline-none focus:ring-2 focus:ring-stripe-blue focus:border-stripe-blue transition"
          placeholder="Otro"
        />
      </form>
    </div>
  )
}
