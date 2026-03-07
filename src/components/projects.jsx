import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card"

const projects = [
  {
    name: "Project 6",
    desc: "add project description here",
    techStack: "JS",
    link: "",
    open: ""
  },
  {
    name: "Project 6",
    desc: "add project description here",
    techStack: "JS",
    link: "",
    open: ""
  },
  {
    name: "Project 6",
    desc: "add project description here",
    techStack: "JS",
    link: "",
    open: ""
  },
  {
    name: "Project 6",
    desc: "add project description here",
    techStack: "JS",
    link: "",
    open: ""
  },
  {
    name: "Project 6",
    desc: "add project description here",
    techStack: "JS",
    link: "",
    open: ""
  },
  {
    name: "Project 6",
    desc: "add project description here",
    techStack: "JS",
    link: "",
    open: ""
  }
]

export default function Projects() {
  return (
    <div className="flex flex-col px-28 gap-10">
      <h2 className="text-3xl">Projects</h2>
      <div className="grid grid-cols-3 gap-2">
        {projects.map((project) => {
          return (
            <Card className="bg-gray-600 rounded-md">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                {/* <CardDescription>{project.techStack}</CardDescription> */}
                <CardAction>🔗</CardAction>
              </CardHeader>
              <CardContent>
                <p>{project.desc}</p>
              </CardContent>
              <CardFooter>
                <p>{project.techStack}</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
