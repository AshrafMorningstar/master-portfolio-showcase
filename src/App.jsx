export default function App() {
  const projects = [
    "micro-portfolio-generator", "offline-events-pwa", "recipe-remix-engine",
    "accessible-quiz-builder", "css-theme-playground", "ecommerce-ux-sandbox",
    "collaborative-cv-studio", "generative-ui-pattern-engine", "privacy-first-analytics",
    "micro-mentorship-pwa", "wasm-image-processing", "verifiable-content-platform"
  ];
  return (
    <div style={{maxWidth:'1000px', margin:'0 auto', padding:'2rem'}}>
      <h1>Ashraf Morningstar Portfolio</h1>
      <p>12 Production-Ready Web Engineering Projects</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))', gap:'1rem', marginTop:'2rem'}}>
        {projects.map(p => (
           <div key={p} style={{border:'1px solid #444', padding:'1rem', borderRadius:'8px'}}>
              <h3>{p.replace(/-/g, ' ')}</h3>
              <a href={`https://github.com/AshrafMorningstar/${p}`} style={{color:'#646cff'}}>View Repository</a>
           </div>
        ))}
      </div>
    </div>
  )
}