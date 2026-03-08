import React from "react"
import Navbar from "./components/temp-navbar.jsx"
import Hero from "./components/temp-hero.jsx"
import About from "./components/temp-about.jsx"
import Experience from "./components/temp-expeerience.jsx"
import Projects from "./components/temp-projects.jsx"

function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-fg selection:bg-accent-purple selection:text-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className="py-12 text-center border-t border-border/30 bg-bg-dark/20">
        <p className="font-mono text-base text-fg-muted">
          Built with <span className="text-accent-red">♥</span> by Liliana
        </p>
      </footer>
    </div>
  )
}

export default App
