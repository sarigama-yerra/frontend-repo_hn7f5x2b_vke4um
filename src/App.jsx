import { useRef, useState } from 'react'
import Hero from './components/Hero'
import GeneratorForm from './components/GeneratorForm'
import Results from './components/Results'

function App() {
  const formRef = useRef(null)
  const [result, setResult] = useState(null)

  const handleGetStarted = () => {
    const el = document.getElementById('generator')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onGetStarted={handleGetStarted} />

      <div id="generator" />
      <GeneratorForm onGenerated={setResult} />
      <Results data={result} />

      <footer className="bg-slate-950 text-slate-400 py-8 text-center">
        Built for playful, easy-to-understand campaigns.
      </footer>
    </div>
  )
}

export default App
