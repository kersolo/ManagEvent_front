import { Link } from "react-router-dom";
import ContactUs from "../ContctUs/ContactUs";
import "./Homepage.css";

export default function Homepage() {
    return (

        <div className="homepage flex flex-col p-5 ">

            <h1 className="mx-auto mt-20 text-white ">Manag'Event</h1>

            <p className="mt-20 text-justify text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque in vel quod fuga illo sequi voluptate et voluptatibus dolor temporibus distinctio, expedita nam, eum soluta. Quaerat cupiditate, corporis quod iure pariatur sed animi quam aliquam, delectus esse assumenda incidunt quos voluptates in accusamus, nesciunt voluptate? Tenetur nobis fuga sapiente tempora similique quos odio hic voluptatibus debitis dicta corporis in, soluta, ut nisi beatae pariatur iusto sint omnis quam, aut autem! !</p>

            <Link to={"/Se-connecter"} className="mx-auto mt-20 bg-yellow-500 mb-3 px-5 rounded">
                Se connecter
            </Link>
            <Link to={"/S'inscrire"} className="mx-auto bg-yellow-500 px-9 rounded">
                S'inscrire
            </Link>
            <Link to={"/Contactez-nous"} className="mx-auto mt-20 border-b-2 text-white ">
                <ContactUs />
            </Link>
            
        </div>

    )
}
