import React from "react"
import { motion } from "framer-motion"
import { Folder, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "p1",
    title: "Tech Babes",
    description:
      "An ecommerce site I designed for my personal shop. Prior to this, my products were only available through Etsy. I wanted a more personalized site to really showcase what the brand and vision is all about.",
    tech: [
      "Next.js",
      "TypeScript",
      "Stripe API",
      "Tailwind",
      "Zod",
      "Webhooks",
      "Resend",
      "Printful API"
    ],
    github: "https://github.com/liliana-benitez/techbabes",
    link: "https://techbabes.dev",
    featured: true
  },
  {
    id: "p2",
    title: "Tech Babes Admin Dashboard",
    description:
      "An internal dashboard I built for Tech Babes, my e-commerce brand for women in tech. Right now, it helps me view and manage inventory in one place without relying solely on Etsy or Printful dashboards, since I am also creating my own shop frontend.",
    tech: ["TypeScript", "DND Kit", "Shadcn", "Framer Motion"],
    github: "https://github.com/liliana-benitez/techbabes-admin"
  },
  {
    id: "p3",
    title: "Notflix",
    description:
      "A front-end Netflix clone built using TMDB API to display movies and TV shows. Includes a sleek, responsive UI and a custom watchlist feature.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    github: "https://github.com/liliana-benitez/netflix-clone",
    link: "https://notflix-cloneflix.netlify.app/"
  },
  {
    id: "p4",
    title: "Portfolio",
    description:
      "Personal portfolio website built as a Single Page Application (SPA) featuring a simple aesthetic inspired by the VS Code Tokyo Night theme, designed to showcase my work and experience.",
    tech: ["React", "JavaScript", "Tailwind", "Vite"],
    github: "https://github.com/liliana-benitez/liliana",
    link: "https://lilianabenitez.com/"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-fg mb-12 flex items-center"
        >
          Projects
          <div className="h-px bg-border grow ml-6" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-bg-dark rounded-md p-8 flex flex-col h-full border border-border/50 hover:border-accent-purple/30 transition-all duration-300 shadow-lg relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-8">
        <Folder className="text-accent-cyan" size={40} strokeWidth={1.5} />
        <div className="flex items-center space-x-4 text-fg-muted">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-purple transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-purple transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-fg mb-3 group-hover:text-accent-cyan transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-fg-muted leading-relaxed mb-8 grow">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
        {project.tech.map((t) => (
          <li
            key={t}
            className="text-[10px] font-mono text-fg-muted/80 tracking-wider uppercase"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Projects
