function ResultItem({ label, children }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">{label}</div>
      <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-white">{children}</div>
    </div>
  )
}

function Results({ data }) {
  if (!data) return null
  return (
    <section id="recent" className="bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-bold">Your Comic Ad Campaign</h2>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <ResultItem label="Primary Text">
              <pre className="whitespace-pre-wrap font-sans">{data.primary_text}</pre>
            </ResultItem>
            <ResultItem label="Headline">{data.headline}</ResultItem>
            {data.description && (
              <ResultItem label="Description">{data.description}</ResultItem>
            )}
            {data.hooks?.length > 0 && (
              <ResultItem label="Hooks">
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  {data.hooks.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </ResultItem>
            )}
          </div>

          <div className="space-y-4">
            {data.emojis?.length > 0 && (
              <ResultItem label="Emojis">{data.emojis.join(' ')}</ResultItem>
            )}
            {data.hashtags?.length > 0 && (
              <ResultItem label="Hashtags">{data.hashtags.join(' ')}</ResultItem>
            )}
            {data.color_palette?.length > 0 && (
              <ResultItem label="Color Palette">
                <div className="flex gap-2">
                  {data.color_palette.map((c, i) => (
                    <div key={i} className="h-8 w-8 rounded" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </ResultItem>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
