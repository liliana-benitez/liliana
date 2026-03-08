import { motion } from "framer-motion"

export default function About() {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "PostgreSQL",
    "Node.js"
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-24 px-6 lg:px-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-fg">About Me</h2>
          <div className="h-px bg-border/40 flex-1 max-w-sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6 text-fg/80 leading-relaxed text-base">
            <p>
              Hi, I’m a Canadian software engineer currently based in Barcelona,
              Spain. By day I'm mentoring the next generation of developers and
              contributing to a custom LMS at{" "}
              <a
                href="https://www.arol.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline decoration-accent-cyan/40 transition-all font-semibold"
              >
                arol.dev
              </a>
              . By night I'm running{" "}
              <a
                href="https://www.techbabes.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline decoration-accent-cyan/40 transition-all font-semibold"
              >
                Tech Babes
              </a>
              , my own ecommerce brand built from the ground up.
            </p>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-purple/80">
                Core Stack:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
                {technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 group">
                    <span className="text-accent-purple font-bold">/</span>
                    <span className="group-hover:text-accent-blue transition-colors duration-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-fg-muted pt-6 border-t border-border/20 leading-relaxed">
              Outside of work, I'm a paddle boarder, foodie, dog mom, ukulele
              beginner, and board game enthusiast.
            </p>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <motion.div
              whileHover={{ y: -5 }}
              className="relative max-w-[280px] w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-bg-dark z-10 block aspect-square">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  src="https://www.techbabes.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffounder.97d3bdf8.png&w=3840&q=75"
                  alt="Liliana"
                />
                <div className="absolute inset-0 bg-accent-purple/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-accent-blue rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-accent-blue rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
