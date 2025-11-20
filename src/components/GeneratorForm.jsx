import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function GeneratorForm({ onGenerated }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    objective: 'Awareness',
    product_name: '',
    audience: '',
    pain_points: '',
    benefits: '',
    offer: '',
    call_to_action: 'Get Started',
    brand_voice: 'Playful, clear, friendly',
    budget: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BACKEND_URL}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          budget: form.budget ? Number(form.budget) : undefined,
        })
      })

      if (!res.ok) throw new Error('Failed to generate campaign')
      const data = await res.json()
      onGenerated?.(data)
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Campaign Title</label>
                <input name="title" value={form.title} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Summer Launch" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Objective</label>
                <select name="objective" value={form.objective} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2">
                  {['Awareness','Traffic','Leads','Sales'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Product Name</label>
                <input name="product_name" value={form.product_name} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Acme Widget" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Audience</label>
                <input name="audience" value={form.audience} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Small business owners" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Pain Points</label>
                <input name="pain_points" value={form.pain_points} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Time-consuming setup" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Benefits</label>
                <input name="benefits" value={form.benefits} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Fast, fun, effective" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Offer</label>
                <input name="offer" value={form.offer} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="20% off" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Call to Action</label>
                <input name="call_to_action" value={form.call_to_action} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Shop Now" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Brand Voice</label>
                <input name="brand_voice" value={form.brand_voice} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Playful, friendly" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Budget (optional)</label>
                <input name="budget" value={form.budget} onChange={handleChange} type="number" min="0" className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="500" />
              </div>
            </div>

            <button disabled={loading} className="w-full mt-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-4 py-2 rounded-lg transition disabled:opacity-60">
              {loading ? 'Generating…' : 'Generate Campaign'}
            </button>
          </form>

          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold">How it works</h3>
            <ol className="mt-3 list-decimal list-inside text-slate-300 space-y-1">
              <li>Tell us about your product and audience.</li>
              <li>We craft a comic-style, friendly campaign.</li>
              <li>Copy, headline, hooks, hashtags, and palette included.</li>
            </ol>
            <p className="mt-4 text-slate-400 text-sm">Your results are saved so you can revisit them later.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneratorForm
