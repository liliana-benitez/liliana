import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="bg-bg min-h-screen text-fg selection:bg-accent-purple selection:text-bg">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>

      <footer className="py-12 text-center border-t border-border/30 bg-bg-dark/20">
        <p className="font-mono text-sm text-fg-muted">
          Built with <span className="text-accent-red">♥</span> by Liliana
        </p>
      </footer>
    </div>
  )
}

export default App
