import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#111',
      color: '#fff'
    }}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>
        DEU BOM! 🚀
      </h1>
      <p style={{fontSize: '1.2rem'}}>
        Build passou na Vercel. Sem Tailwind, sem TypeScript, sem erro.
      </p>
      <p style={{marginTop: '2rem', opacity: 0.7}}>
        Agora é só codar teu projeto
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
