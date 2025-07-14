interface ContactProps {
  t: any
}

const Contact = ({ t }: ContactProps) => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">{t.contactTitulo}</h2>
      <p className="mb-2">{t.contactDescripcion}</p>
      <form className="space-y-4">
        <input className="w-full border rounded p-2" type="text" placeholder={t.contactNombre} />
        <input className="w-full border rounded p-2" type="email" placeholder={t.contactEmail} />
        <textarea className="w-full border rounded p-2" placeholder={t.contactMensaje} rows={4}></textarea>
        <button className="bg-stripe-blue text-white px-4 py-2 rounded" type="submit">{t.contactEnviar}</button>
      </form>
    </div>
  )
}

export default Contact