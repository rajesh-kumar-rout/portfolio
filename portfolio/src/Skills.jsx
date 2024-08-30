import { skills } from "./assets/app.json"

export default function Skills() {
    return (
        <section className="max-w-5xl mx-auto mb-28 px-4" id="skills">
            <div className="text-3xl font-bold text-center text-orange-600 mb-16">SKILLS</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map(skill => (
                    <div key={skill.name}>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-200">{skill.name}</p>
                            <p className="text-gray-200">{skill.percentage}</p>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden mt-2">
                            <div className={`h-full ${skill.color}`} style={{ width: skill.percentage }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}