import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

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
  },
  {
    id: "exp4",
    company: "Roomate",
    role: "Software Engineer",
    period: "JAN 2021 - DEC 2022",
    description: [
      "Contributed as a core developer to the RooMate application - a platform designed to streamline shared living for roommates.",
      "Built and maintained features across a Vite-powered React frontend and an Express backend, delivering performant and scalable solutions.",
      "Implemented custom React hooks to promote reusable logic and experimented with a variety of libraries to enhance functionality and user experience."
    ]
  }
]

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center py-24 px-6 lg:px-24"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-fg mb-12 flex items-center"
        >
          Experience
          <div className="h-px bg-border grow ml-6 text-accent-purple" />
        </motion.h2>

        <Tabs
          defaultValue="exp1"
          orientation="vertical"
          className="flex flex-col md:flex-row gap-8 md:gap-16 min-h-[400px]"
          onValueChange={(value) => {
            const index = jobs.findIndex((j) => j.id === value)
            setActiveTab(index)
          }}
        >
          <TabsList className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible shrink-0 w-full md:w-48 relative border-b md:border-b-0 md:border-r border-border/20 no-scrollbar bg-transparent items-center md:items-start h-auto md:h-full">
            <motion.div
              className="absolute right-0 w-0.5 bg-accent-purple hidden md:block"
              initial={false}
              animate={{
                top: `${activeTab * 48 + 8}px`,
                height: "32px"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            />
            {jobs.map((job) => (
              <TabsTrigger
                key={job.id}
                value={job.id}
                className={`flex-none text-center md:text-left px-6 md:px-4 h-12 transition-all relative w-auto md:w-full justify-center md:justify-start data-[state=active]:text-accent-purple data-[state=active]:bg-accent-purple/5 text-fg-muted hover:text-fg hover:bg-white/5 border-none after:h-0.5 after:bg-accent-purple after:absolute after:bottom-0 after:left-0 after:right-0 after:opacity-0 data-[state=active]:after:opacity-100 md:after:hidden`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-inherit">
                  {job.company}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grow py-2">
            <AnimatePresence mode="wait">
              {jobs.map((job, idx) => (
                <TabsContent
                  key={job.id}
                  value={job.id}
                  className="mt-0 outline-none"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-fg mb-1">
                      {job.role}{" "}
                      <span className="text-accent-purple">
                        @ {job.company}
                      </span>
                    </h3>
                    <p className="font-mono text-xs text-fg-muted mb-8 tracking-wide">
                      {job.period}
                    </p>
                    <ul className="space-y-6">
                      {job.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-base text-fg-muted leading-relaxed"
                        >
                          <span className="text-accent-purple mr-4 mt-1.5 text-[10px]">
                            ▸
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Experience
