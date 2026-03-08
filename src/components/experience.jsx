import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const jobs = [
  {
    id: "exp1",
    company: "arol.dev",
    role: "Software Engineer & Mentor",
    period: "OCT 2024 - PRESENT",
    description: [
      "I design and build software, including our custom learning management system, to improve educational tools and make the learning experience easier for students and mentors.",
      "Serve as an educator, teaching software engineering concepts to students, creating engaging hands-on learning experiences covering full-stack development, algorithms, and system design."
    ]
  },
  {
    id: "exp2",
    company: "Dopelist",
    role: "Software Engineer",
    period: "SEP 2023 - OCT 2024",
    description: [
      "Developed AI-powered tagging system using OpenAI API to automatically categorize user recommendations, improving content discoverability and search functionality.",
      "Implemented real-time messaging features via WhatsApp API integration to enable user notifications and engagement.",
      "Built full-stack features with Next.js, TypeScript, and PostgreSQL, including authentication (Auth0), responsive UI components, and API route architecture."
    ]
  },
  {
    id: "exp3",
    company: "itsYamiG",
    role: "Software Engineer",
    period: "DEC 2022 - SEP 2023",
    description: [
      "Developed booking and payment workflows by integrating Stripe, SimplyBook, and MailChimp APIs to automate client scheduling, payments, and email communications.",
      "Implemented server-side rendering (SSR) with Next.js to achieve sub-1-second page loads and improve SEO performance.",
      "Built responsive, accessible UI using React and Tailwind CSS to deliver seamless user experience across devices."
    ]
  }
]

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 lg:px-24 bg-bg-dark/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-fg mb-12 flex items-center"
        >
          {/* <span className="text-accent-purple font-mono mr-2">02.</span> */}
          Experience
          <div className="h-px bg-border grow ml-6 text-accent-purple" />
        </motion.h2>

        {/* Parent Flex Container */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 min-h-[400px]">
          {/* Sidebar Tabs Container */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible shrink-0 w-full md:w-48 border-l-2 md:border-l border-border/50 no-scrollbar">
            {jobs.map((job, idx) => (
              <button
                key={job.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 md:flex-none text-left px-4 py-3 font-mono text-sm transition-all relative border-l-2 ${
                  activeTab === idx
                    ? "text-accent-cyan border-accent-cyan bg-accent-cyan/10"
                    : "text-fg-muted border-transparent hover:text-fg hover:bg-bg-dark"
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Job Details Content */}
          <div className="grow py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={jobs[activeTab].id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-fg mb-1">
                  {jobs[activeTab].role}{" "}
                  <span className="text-accent-cyan">
                    @ {jobs[activeTab].company}
                  </span>
                </h3>
                <p className="font-mono text-xs text-fg-muted mb-6">
                  {jobs[activeTab].period}
                </p>
                <ul className="space-y-4">
                  {jobs[activeTab].description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-fg-muted leading-relaxed"
                    >
                      <span className="text-accent-purple mr-3 mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
