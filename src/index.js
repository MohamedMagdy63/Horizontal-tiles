import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './styles.css'
import { App } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <p style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        WebX-Crafters
      </p>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>bad —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>10/17/2021</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>
)
