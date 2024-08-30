import { MdOutlineMailOutline, MdPhone, MdWhatsapp } from "react-icons/md"
import { contact } from "./assets/app.json"

export default function Contact() {
    const contacts = [
        {
            label: "Email",
            data: contact.email,
            icon: <MdOutlineMailOutline size={20} />
        },
        {
            label: "Mobile",
            data: contact.mobile,
            icon: <MdPhone size={20} />
        },
        {
            label: "Whatsapp",
            data: contact.mobile,
            icon: <MdWhatsapp size={20} />
        },
    ]

    return (
        <div className="mb-28 px-4 lg:px-0" id="contact">
            <div className="text-3xl font-bold text-center text-orange-600 mb-16">CONTACT</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between max-w-4xl mx-auto">
                <div className="flex flex-col gap-8">
                    {contacts.map(contact => (
                        <div key={contact.label} className="flex gap-4">
                            <div className="w-10 h-10 flex items-center justify-center border border-orange-600 rounded-full text-orange-600">
                                {contact.icon}
                            </div>

                            <div>
                                <p className="mb-1 font-semibold text-gray-200">{contact.label}</p>
                                <p className="text-gray-400">{contact.data}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <form>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-1.5 block w-full focus:border-orange-600 focus:ring-1 outline-none focus:ring-orange-600"
                        placeholder="Name"
                    />

                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-1.5 mt-4 block w-full focus:border-orange-600 focus:ring-1 outline-none focus:ring-orange-600"
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-1.5 mt-4 block w-full focus:border-orange-600 focus:ring-1 outline-none focus:ring-orange-600"
                        placeholder="Subject"
                    />

                    <textarea
                        className="border border-gray-300 rounded-md px-3 py-1.5 mt-4 w-full block focus:border-orange-600 focus:ring-1 outline-none focus:ring-orange-600"
                        placeholder="Message"
                    />

                    <button
                        className="rounded-md w-full py-1.5 mt-4 cursor-pointer font-medium bg-orange-600 text-white focus:ring focus:ring-offset-1 focus:ring-orange-600 transition-all duration-300 hover:bg-orange-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}