
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [showText, setShowText] = useState(true)
  const [name, setName] = useState('')

  const colors = {
    background: darkMode ? '#151821' : '#f5f7ff',
    text: darkMode ? '#f5f5f5' : '#202438',
    card: darkMode ? '#222735' : '#ffffff',
    muted: darkMode ? '#b8c0d4' : '#667085',
    border: darkMode ? '#3b4355' : '#e3e8f4',
    primary: '#646cff',
  }

  const buttonStyle = {
    padding: '10px 18px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: colors.primary,
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    margin: '5px',
  }

  const cardStyle = {
    backgroundColor: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: '18px',
    padding: '24px',
    marginBottom: '20px',
    boxShadow: darkMode
      ? '0 5px 20px rgba(0,0,0,0.15)'
      : '0 5px 20px rgba(30,50,100,0.06)',
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: 'Arial, sans-serif',
        padding: '24px',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <main
        style={{
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '30px',
          }}
        >
          <h1 style={{ fontSize: '28px', margin: 0 }}>
            My React App
          </h1>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            style={buttonStyle}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* Hero */}
        <section
          style={{
            ...cardStyle,
            textAlign: 'center',
            padding: '35px 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '20px',
            }}
          >
            <img
              src={heroImg}
              alt="Hero"
              width="100"
              height="105"
              style={{ objectFit: 'contain' }}
            />

            <img
              src={reactLogo}
              alt="React logo"
              width="75"
              style={{ height: '75px' }}
            />

            <img
              src={viteLogo}
              alt="Vite logo"
              width="75"
              style={{ height: '75px' }}
            />
          </div>

          <h2 style={{ fontSize: '30px', margin: '10px 0' }}>
            Get Started 🚀
          </h2>

          <p style={{ color: colors.muted, lineHeight: 1.7 }}>
            Learn React by testing interactive features.
          </p>
        </section>

        {/* Counter */}
        <section style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>1. Counter App</h2>

          <p style={{ color: colors.muted }}>
            Test React useState and button events.
          </p>

          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: colors.primary,
              textAlign: 'center',
              margin: '20px 0',
            }}
          >
            {count}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => setCount(count + 1)}
              style={buttonStyle}
            >
              + Increase
            </button>

            <button
              type="button"
              onClick={() => setCount(Math.max(0, count - 1))}
              style={{
                ...buttonStyle,
                backgroundColor: '#e67e22',
              }}
            >
              - Decrease
            </button>

            <button
              type="button"
              onClick={() => setCount(0)}
              style={{
                ...buttonStyle,
                backgroundColor: '#e74c3c',
              }}
            >
              Reset
            </button>
          </div>

          <p style={{ textAlign: 'center', color: colors.muted }}>
            {count === 0
              ? 'Start clicking the buttons!'
              : count >= 10
                ? '🎉 Great! You reached 10 or more!'
                : 'Keep going!'}
          </p>
        </section>

        {/* Show and Hide */}
        <section style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>2. Show / Hide Text</h2>

          <button
            type="button"
            onClick={() => setShowText(!showText)}
            style={buttonStyle}
          >
            {showText ? 'Hide Text' : 'Show Text'}
          </button>

          {showText && (
            <p
              style={{
                marginTop: '20px',
                padding: '16px',
                borderRadius: '10px',
                backgroundColor: darkMode ? '#30394c' : '#eef0ff',
                color: colors.text,
                lineHeight: 1.7,
              }}
            >
              Hello! Welcome to my React application.
              You can show or hide this message by clicking the button.
            </p>
          )}
        </section>

        {/* Live Input */}
        <section style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>3. Live Input</h2>

          <label
            htmlFor="nameInput"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: '600',
            }}
          >
            Enter your name:
          </label>

          <input
            id="nameInput"
            type="text"
            placeholder="Type your name here..."
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{
              width: '100%',
              padding: '13px',
              boxSizing: 'border-box',
              border: `1px solid ${colors.border}`,
              borderRadius: '10px',
              fontSize: '16px',
              outline: 'none',
              backgroundColor: colors.background,
              color: colors.text,
            }}
          />

          <h3 style={{ marginBottom: '5px' }}>
            {name.trim()
              ? `Hello, ${name}! 👋`
              : 'Your name will appear here.'}
          </h3>

          <p style={{ color: colors.muted }}>
            Characters: {name.length}
          </p>
        </section>

        {/* Documentation */}
        <section style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>4. Documentation</h2>

          <p style={{ color: colors.muted }}>
            Learn more about the tools used in this project.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '20px',
            }}
          >
            <a
              href="https://vite.dev/"
              target="_blank"
              rel="noreferrer"
              style={{
                ...buttonStyle,
                textDecoration: 'none',
                display: 'inline-block',
                boxSizing: 'border-box',
              }}
            >
              ⚡ Explore Vite
            </a>

            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              style={{
                ...buttonStyle,
                textDecoration: 'none',
                display: 'inline-block',
                boxSizing: 'border-box',
              }}
            >
              ⚛️ Learn React
            </a>

            <a
              href="https://github.com/vitejs/vite"
              target="_blank"
              rel="noreferrer"
              style={{
                ...buttonStyle,
                textDecoration: 'none',
                display: 'inline-block',
                boxSizing: 'border-box',
              }}
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            textAlign: 'center',
            padding: '20px 10px',
            color: colors.muted,
            fontSize: '14px',
          }}
        >
          <p>Built with React + Vite</p>
          <p>Practice makes progress 💙</p>
        </footer>
      </main>
    </div>
  )
}

export default App
