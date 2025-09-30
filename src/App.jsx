import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isPulsing, setIsPulsing] = useState(false)
  const [loveMessage, setLoveMessage] = useState('')

  const loveMessages = [
    "You're amazing! 💫",
    "Creativity flows through you! 🌊",
    "Your potential is infinite! 🌟",
    "Make something beautiful! 🎨",
    "The world needs your ideas! 💡"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setLoveMessage(loveMessages[Math.floor(Math.random() * loveMessages.length)])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleCount = () => {
    setCount(count + 1)
    setIsPulsing(true)
    setTimeout(() => setIsPulsing(false), 600)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="main-content">
        {/* Header Section */}
        <header className="header">
          <div className="logo-container">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img 
                src={viteLogo} 
                className="logo vite-logo" 
                alt="Vite logo" 
              />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img 
                src={reactLogo} 
                className="logo react-logo spinning" 
                alt="React logo" 
              />
            </a>
          </div>
          
          <h1 className="main-title">
            <span className="title-creativity">Creativity</span>
            <span className="title-plus"> + </span>
            <span className="title-love">Love</span>
          </h1>
          
          <div className="love-message">
            {loveMessage}
          </div>
        </header>

        {/* Main Card */}
        <div className="card glass-effect">
          <div className="count-display">
            <span className="count-number">{count}</span>
            <div className="count-label">moments of inspiration</div>
          </div>

          <div className="button-group">
            <button 
              className={`count-button ${isPulsing ? 'pulse' : ''}`}
              onClick={handleCount}
            >
              ✨ Add Inspiration
            </button>
            
            {count > 0 && (
              <button 
                className="reset-button"
                onClick={resetCount}
              >
                🔄 Reset
              </button>
            )}
          </div>

          <div className="inspiration-quote">
            <p>
              "Every great dream begins with a <code>single step</code>..."
            </p>
            <div className="feature-list">
              <span className="feature">🚀 Fast</span>
              <span className="feature">⚡ Powerful</span>
              <span className="feature">🎯 Precise</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p className="signature">
            Crafted with ❤️ by <strong>Radhwane Harres</strong>
          </p>
          <p className="sub-signature">
            Building the future, one component at a time
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App