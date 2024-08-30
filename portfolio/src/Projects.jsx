import { projects } from "./assets/app.json"

export default function Projects() {
    return (
        <div class="mb-28 px-3" id="projects">
            <div class="text-3xl font-bold text-center text-orange-600 mb-16">PROJECTS</div>

            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {projects.map(project => (
                    <div class="bg-gray-700 rounded-md overflow-hidden">
                        <img src={project.image} className="object-cover" />

                        <div className="p-4">
                            <p class="text-lg font-medium mb-4 text-gray-200">{project.name}</p>

                            <div class="flex gap-2">
                                <a
                                    target="_blank"
                                    rel="noopener"
                                    href={project.link}
                                    class="px-5 text-center rounded-full hover:bg-orange-600 transition-all duration-300 hover:text-white py-1.5 border-2 border-orange-600 font-medium bg-orange-600 text-white"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href={project.github}
                                    class="px-5 rounded-full hover:bg-orange-600 transition-all duration-300 hover:text-white py-1.5 border-2 text-center border-orange-600 text-orange-600 font-medium"
                                >
                                    Github
                                </a>

                                <button
                                    class="px-5 rounded-full hover:bg-orange-600 transition-all duration-300 hover:text-white py-1.5 border-2 border-orange-600 text-orange-600 font-medium"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}