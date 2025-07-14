interface PlansProps {
  t: any
}

const Plans = ({ t }: PlansProps) => {
  const plans = [
    {
      name: t.plans.basico,
      price: "Gratis",
      description: "Ideal para pequeños restaurantes que quieren probar Tipify sin compromiso.",
      features: [
        "Menú digital básico",
        "Hasta 50 productos",
        "Soporte por email",
        "Instalación y configuración inicial incluida"
      ],
      highlight: false,
    },
    {
      name: t.plans.pro,
      price: "€19/mes",
      description: "Para restaurantes que buscan digitalizar su carta y recibir pedidos online.",
      features: [
        "Menú digital avanzado",
        "Pedidos online ilimitados",
        "Personalización de diseño",
        "Soporte prioritario",
        "Instalación y configuración incluida",
        "Actualizaciones automáticas"
      ],
      highlight: true,
    },
    {
      name: t.plans.premium,
      price: "€39/mes",
      description: "Solución completa para cadenas y restaurantes con necesidades avanzadas.",
      features: [
        "Todas las funciones PRO",
        "Integración con TPV y sistemas de pago",
        "Gestión multi-restaurante",
        "Estadísticas avanzadas",
        "Soporte técnico 24/7",
        "Consultoría personalizada",
        "Instalación, configuración y puesta online"
      ],
      highlight: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-2">
      <h2 className="text-3xl font-bold mb-4 text-center">Planes Tipify para Restaurantes</h2>
      <p className="mb-8 text-center text-stripe-gray3">
        Elige el plan que mejor se adapta a tu restaurante. Nosotros nos encargamos de la instalación, configuración y puesta online de tu menú digital.
        <br />
        <span className="font-semibold text-stripe-blue">¿Quieres tu restaurante online en menos de 24h? ¡Contáctanos!</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`rounded-2xl border shadow p-6 flex flex-col items-center
              ${plan.highlight ? 'border-stripe-blue bg-stripe-blue/5' : 'border-stripe-gray2 bg-white'}
            `}
          >
            <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-stripe-blue' : 'text-stripe-dark'}`}>{plan.name}</h3>
            <div className="text-3xl font-black mb-2">{plan.price}</div>
            <p className="mb-4 text-center text-stripe-gray3">{plan.description}</p>
            <ul className="mb-6 text-stripe-gray3 text-left space-y-2">
              {plan.features.map(f => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <a
              href="mailto:info@tipify.app?subject=Quiero%20Tipify%20-%20Plan%20" 
              className={`px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center
                ${plan.highlight
                  ? 'bg-stripe-blue text-white hover:bg-stripe-blue/90'
                  : 'bg-stripe-gray2 text-stripe-dark hover:bg-stripe-blue hover:text-white'}
              `}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar este plan
            </a>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-stripe-gray3 mb-2">
          ¿Tienes dudas o necesitas un plan personalizado? <br />
          <a href="mailto:info@tipify.app" className="text-stripe-blue underline">Contáctanos y te asesoramos sin compromiso.</a>
        </p>
        <p className="text-xs text-stripe-gray3 mt-4">
          Instalación, configuración y puesta online incluida en todos los planes. Tipify es la solución profesional para digitalizar tu restaurante.
        </p>
      </div>
    </div>
  )
}

export default Plans