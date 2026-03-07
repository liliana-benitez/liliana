export default function Intro() {
  return (
    <div className="flex justify-between gap-20 px-28 pb-28">
      <img
        className="h-80 rounded-md"
        src="https://i.pinimg.com/1200x/f3/40/71/f3407126c7abe0da329042b4c4daffcd.jpg"
      />

      <div className="flex flex-col justify-between gap-4">
        <h2 className="font-semibold text-4xl">Hi, I'm Lili</h2>
        <p>
          Hi, I’m a Canadian software engineer and mentor, currently based in
          Spain. I create beautiful, scalable applications while empowering
          others along the way. I specialize in React, TypeScript, Next.js, and
          PostgreSQL, and I’m passionate about inspiring more women to explore
          coding and pursue meaningful careers in tech.
        </p>

        <div>
          <button className="border rounded-md px-8 py-2">say hi!</button>
        </div>
      </div>
    </div>
  )
}
