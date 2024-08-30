import Contact from "./Contact"
import Education from "./Educations"
import Experience from "./Experience"
import Hero2 from "./Hero2"
import HireMe from "./HireMe"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"

export default function App() {
    return (
        <div>
            <Navbar/>
            <Hero2/>
            <Skills/>
            <Education/>
            <HireMe/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>
    )
}