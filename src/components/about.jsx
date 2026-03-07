export default function About() {
  return (
    <div className="flex flex-col px-28 gap-10">
      <h2 className="text-3xl">About Me</h2>

      <div className="flex flex-col justify-between items-center gap-20 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <p>
            Hi, I’m a Canadian software engineer and mentor, currently based in
            Spain. I create beautiful, scalable applications while empowering
            others along the way. I specialize in React, TypeScript, Next.js,
            and PostgreSQL, and I’m passionate about inspiring more women to
            explore coding and pursue meaningful careers in tech.
          </p>

          <p>Here are some technologies I have been working with:</p>
          <ul className="grid grid-cols-2">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>PostgreSQL</li>
            <li>Node.js</li>
          </ul>

          <p>Outside of work, I like pizza and I'm a silly goose.</p>
        </div>

        <div>
          <img
            className="h-80 rounded-md"
            src="https://www.techbabes.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffounder.97d3bdf8.png&w=3840&q=75"
          />
        </div>
      </div>
    </div>
  )
}
