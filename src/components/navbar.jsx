import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)

    setIsOpen(false)

    if (elem) {
      setTimeout(() => {
        const offset = 80 // navbar height
        const elementPosition = elem.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }, 10)
    }

    window.history.pushState(null, "", href)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a
            href="#home"
            className="text-fg font-bold text-lg tracking-tight hover:text-accent-cyan transition-colors"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            Liliana Benitez
          </a>

          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-fg-muted hover:text-accent-cyan transition-colors text-xs font-semibold uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* socials */}
        <div className="hidden md:flex items-center space-x-6">
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

        {/* hamburger */}
        <button
          className="md:hidden text-fg p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border/10 bg-bg-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-fg-muted hover:text-accent-cyan transition-colors text-lg font-semibold uppercase tracking-widest block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border/10 flex items-center gap-6">
                <SocialIcon
                  icon={<Mail size={20} />}
                  href="mailto:lilibenitezdev@gmail.com"
                />
                <SocialIcon
                  icon={<Github size={20} />}
                  href="https://github.com/liliana-benitez"
                />
                <SocialIcon
                  icon={<Linkedin size={20} />}
                  href="https://www.linkedin.com/in/lili-benitez/"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
