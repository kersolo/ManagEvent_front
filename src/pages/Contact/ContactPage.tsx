import { useState } from "react";

interface contactForm {
    name: string;
    email: string;
    message: string;
    rgpd: boolean;
}
export default function ContactPage() {

    const [form, setForm] = useState<contactForm>(
        {
            name: "",
            email: "",
            message: "",
            rgpd: false,
        })

    function handleSubmit(event: React.FormEvent) {
        console.log(event)
        event.preventDefault();

        setForm({ ...form })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

        const { name, value } = event.target;

        setForm({ ...form, [name]: value })
        console.log(form.rgpd, form.name, form.email, form.message)
    }

    return (

        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-screen mobileBgDp bg-cover">
            <h1 className="text-center text-xl text-white font-medium">Contact</h1>

            <form className="flex flex-col m-6 p-4 border-orange-300 border-2 rounded-lg backdrop-blur-lg"
                aria-label="Contactez-nous"
                onSubmit={handleSubmit}>
                <label className="text-white"
                    htmlFor="name">Nom et Prénom</label>
                <input className="rounded-lg px-8 py-2 mb-6"
                    type="text"
                    name="name"
                    onChange={handleChange} />
                <label className="text-white"
                    htmlFor="email"
                >Adresse Email</label>
                <input className="rounded-lg px-8 py-2 mb-6"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange} />
                <label className="text-white"
                    htmlFor="messag">
                    Votre message
                </label>
                <textarea className="rounded-lg px-8 py-2 mb-6"
                    name="message"
                    id="message"
                    onChange={handleChange} ></textarea>
                <div className="mb-6">
                    <input className="rounded-sm"
                        type="checkbox"
                        name="rgpd"
                        id="rgpd"
                        onClick={handleChange} />
                    <label className="text-white ml-2"
                        htmlFor="info">
                        En cochant cette case vous acceptez que vos informations soient envoyées et stockées dans notre base de données.
                    </label>
                </div>
                <button className="rounded-lg bg-orange-300 px-8 py-2"
                    type="submit">Envoyer</button>
            </form>
        </div>
    )
}