import data from "./assets/app.json"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="hero"
            className="max-w-5xl mx-auto hidden lg:grid gap-8 grid-cols-12 items-center" 
            style={{ height: "calc(100vh - 80px)" }} 
        >
            <div className="col-span-8" id="homeInfoContainer">
                <p className="text-5xl font-bold">Hi, I am {data.name}</p>

                <p className="text-gray-600 mt-4">{data.about}</p>

                <div className="flex mt-6 gap-4">
                    <a href={data.resume} className="w-40 text-center rounded-full hover:bg-orange-600 transition-all duration-300 hover:text-white py-2 border-2 border-orange-600 font-semibold bg-orange-600 text-white">View Resume</a>

                    <a href="#contact" className="w-40 text-center rounded-full hover:bg-orange-600 transition-all duration-300 hover:text-white py-2 border-2 border-orange-600 text-orange-600 font-semibold">Hire Me</a>
                </div>
            </div>

            <div className="col-span-4" id="homeImageContainer">
                {/* <img src={data.profileImg} className="w-full border-2 border-orange-600 rounded-xl" /> */}
                <img src={"/public/profile2.png"} className="w-full border-2 border-orange-600 rounded-full" />

                <div className="flex justify-center items-center gap-6 mt-4">
                    <a 
                        href={data.profiles.github} 
                        className="fa-brands fa-github text-2xl rounded-full flex items-center justify-center text-orange-600"
                    >
                        <FaGithub size={24}/>
                    </a>

                    <a 
                        href={data.profiles.linkedin} 
                        className="fa-brands fa-linkedin text-2xl rounded-full flex items-center justify-center text-orange-600"
                    >
                        <FaLinkedin size={24}/>
                    </a>

                    <a 
                        href={data.profiles.twitter} 
                        className="fa-brands fa-twitter text-2xl rounded-full flex items-center justify-center text-orange-600"
                    >
                        <FaTwitter size={24}/>
                    </a>
                </div>
            </div>
        </section>
    )
}