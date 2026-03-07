export default function Navigation() {
  return (
    <div className="flex justify-between px-28 py-8">
      <div className="flex justify-between gap-4">
        <p>Liliana Benitez</p>
        <nav>
          <ul className="flex gap-2">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* SOCIALS */}
      <ul className="flex gap-4">
        <li>
          <a>✉️</a>
        </li>
        <li>
          <a>🐈‍⬛</a>
        </li>
        <li>
          <a>🔵</a>
        </li>
      </ul>
    </div>
  )
}
