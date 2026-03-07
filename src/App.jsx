import About from "./components/about"
import Experience from "./components/experience"
import Intro from "./components/intro"
import Navigation from "./components/nav"
import Projects from "./components/projects"

export default function App() {
  return (
    <div className="flex flex-col gap-20 h-full text-[#565f89] pb-20">
      <Navigation />
      <Intro />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}
