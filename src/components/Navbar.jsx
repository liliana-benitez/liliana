import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-accent-purple font-mono font-bold text-xl">
          Liliana Benitez
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <a
              href={link.href}
              className="text-fg-muted hover:text-accent-cyan transition-colors font-mono text-sm"
            >
              {link.name.toLowerCase()}
            </a>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <SocialIcon
            icon={<Mail size={18} />}
            href="mailto:lilibenitezdev@gmail.com"
          />
          <SocialIcon
            icon={<Github size={18} />}
            href="https://github.com/liliana-benitez"
          />
          <SocialIcon
            icon={<Linkedin size={18} />}
            href="https://www.linkedin.com/in/lili-benitez/"
          />
        </div>
      </div>
    </nav>
  )
}

const SocialIcon = ({ icon, href }) => (
  <motion.a
    whileHover={{ y: -2 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-fg-muted hover:text-accent-blue transition-colors"
  >
    {icon}
  </motion.a>
)

export default Navbar
