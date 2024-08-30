import data from "./assets/app.json"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Hero2() {

    return (
        <section
            id="hero"
            className="max-w-5xl mx-auto text-center flex items-center flex-col justify-center"
            style={{ height: "calc(100vh - 64px)" }}
        >
            <img src={data.profileImg} className="rounded-full border-2 border-orange-600 h-48 w-48 object-cover" />

            <p className="text-2xl font-bold mt-4 text-gray-200">{data.name}</p>

            <p className="max-w-xl mx-auto mt-4 text-gray-400">{data.about}</p>

            <div className="flex mt-4 gap-4">
                <a href={data.resume} className="w-40 text-center rounded-full hover:bg-orange-600 transition-all duration-300 hover:text-white py-2 border-2 border-orange-600 font-semibold bg-orange-600 text-white">View Resume</a>

                <a href="#contact" className="w-40 text-center rounded-full hover:bg-orange-600 transition-all duration-300 hover:text-white py-2 border-2 border-orange-600 text-orange-600 font-semibold">Hire Me</a>
            </div>

            <div className="flex justify-center items-center gap-6 mt-4">
                <a
                    href={data.profiles.github}
                    className="fa-brands fa-github text-2xl rounded-full flex items-center justify-center text-orange-600"
                >
                    <FaGithub size={24} />
                </a>

                <a
                    href={data.profiles.linkedin}
                    className="fa-brands fa-linkedin text-2xl rounded-full flex items-center justify-center text-orange-600"
                >
                    <FaLinkedin size={24} />
                </a>

                <a
                    href={data.profiles.twitter}
                    className="fa-brands fa-twitter text-2xl rounded-full flex items-center justify-center text-orange-600"
                >
                    <FaTwitter size={24} />
                </a>
            </div>

        </section>
    )
}