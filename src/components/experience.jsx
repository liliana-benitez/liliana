import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

const experienceItems = {
  "arol.dev": {
    jobTitle: "Software Engineer & Mentor @",
    duration: "OCT 2024 - PRESENT",
    desc: [
      "I design and build software, including our custom learning management system, to improve educational tools and make the learning experience easier for students and mentors.",
      "Serve as an educator, teaching software engineering concepts to students, creating engaging hands-on learning experiences covering full-stack development, algorithms, and system design."
    ]
  },
  Dopelist: {
    jobTitle: "Software Engineer @",
    duration: "SEP 2023 - OCT 2024",
    desc: [
      "Developed AI-powered tagging system using OpenAI API to automatically categorize user recommendations, improving content discoverability and search functionality.",
      "Implemented real-time messaging features via WhatsApp API integration to enable user notifications and engagement.",
      "Built full-stack features with Next.js, TypeScript, and PostgreSQL, including authentication (Auth0), responsive UI components, and API route architecture."
    ]
  },
  itsYamiG: {
    jobTitle: "Software Engineer @",
    duration: "DEC 2022 - SEP 2023",
    desc: [
      "Developed booking and payment workflows by integrating Stripe, SimplyBook, and MailChimp APIs to automate client scheduling, payments, and email communications.",
      "Implemented server-side rendering (SSR) with Next.js to achieve sub-1-second page loads and improve SEO performance.",
      "Built responsive, accessible UI using React and Tailwind CSS to deliver seamless user experience across devices."
    ]
  }
}

const triggerClass =
  "w-full justify-start px-4 py-3 text-[#565f89] text-xs tracking-widest uppercase font-normal bg-transparent shadow-none rounded-none border-l border-transparent data-[state=active]:border-l-2 data-[state=active]:border-teal-400 data-[state=active]:text-[#565f89] data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-foreground transition-colors"

export default function Experience() {
  return (
    <div className="flex flex-col px-28 gap-10">
      <h2 className="text-3xl font-bold">Experience</h2>

      <Tabs
        defaultValue={Object.keys(experienceItems)[0]}
        orientation="vertical"
        className="flex flex-row w-full gap-0"
      >
        <TabsList className="flex flex-col h-fit bg-transparent gap-4 p-0 min-w-[140px]">
          {Object.keys(experienceItems).map((company) => (
            <TabsTrigger key={company} value={company} className={triggerClass}>
              {company}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Vertical divider */}
        <div className="w-px bg-border mx-6 self-stretch" />

        {Object.entries(experienceItems).map(
          ([company, { jobTitle, duration, desc }]) => (
            <TabsContent
              key={company}
              value={company}
              className="mt-0 flex flex-col gap-4 flex-1"
            >
              <div>
                <h3 className="text-2xl font-bold">
                  {jobTitle} <span className="text-teal-400">{company}</span>
                </h3>
                <p className="text-sm text-muted-foreground tracking-widest mt-2">
                  {duration}
                </p>
              </div>
              <ul className="flex flex-col gap-5 mt-2">
                {desc.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-teal-400 mt-1 text-xs">▷</span>
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          )
        )}
      </Tabs>
    </div>
  )
}
