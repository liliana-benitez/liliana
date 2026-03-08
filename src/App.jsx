import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"

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
