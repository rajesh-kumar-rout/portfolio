import { MdCode } from "react-icons/md"
import { experiences } from "./assets/app.json"

export default function Experience() {
    return (
        <div class="mb-28 px-4 lg:px-0" id="education">
            <div class="text-3xl font-bold text-center text-orange-600 mb-16">EXPERIENCE</div>

            <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {experiences.map(experience => (
                    <div class="flex gap-4">
                        <div class="text-3xl bg-orange-600 text-white h-12 w-12 flex justify-center items-center rounded-full">
                            <MdCode size={24} />
                        </div>

                        <div class="text-left">
                            <div class="font-bold text-2xl text-gray-200">{experience.position}</div>
                            <div class="text-gray-400 mt-1">{experience.company}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}