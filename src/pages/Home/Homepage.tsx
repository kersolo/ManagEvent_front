import { Link } from "react-router-dom";
import "./Homepage.css";
import ButtonDefault from "../../components/ButtonDefault";

export default function Homepage() {

    console.log("toto");
    return (
         <>
        <div className="homepage">
            <div className="flex flex-col">
                <h1 className="text-white mx-auto font-bold mt-20">Manag'Event</h1>
                <p className="text-justify text-white sm:w-10/12 sm:mx-auto  md:w-8/12 md:mx-auto lg:w-6/12 lg:mx-auto mt-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque in vel quod fuga illo sequi voluptate et voluptatibus dolor temporibus distinctio, expedita nam, eum soluta. Quaerat cupiditate, corporis quod iure pariatur sed animi quam aliquam, delectus esse assumenda incidunt quos voluptates in accusamus, nesciunt voluptate? Tenetur nobis fuga sapiente tempora similique quos odio hic voluptatibus debitis dicta corporis in, soluta, ut nisi beatae pariatur iusto sint omnis quam, aut autem! !</p>
            </div>
            <div className="sm:w-4/12 sm:mx-auto md:w-3/12 md:mx-auto lg:w-2/12 lg:mx-auto mt-5 mb-2">
                <ButtonDefault >
                    Se connecter
                </ButtonDefault>
            </div>
            <div className="sm:w-4/12 sm:mx-auto md:w-3/12 md:mx-auto lg:w-2/12 lg:mx-auto mb-10">
                <ButtonDefault>
                    S'inscrire
                </ButtonDefault>
            </div>
            <div className="flex justify-center mx-auto mt-10">
                <Link to="" className="border-b-2 text-white">
                    Contactez-nous
                </Link>
            </div>

        </div>
        </>
    )
}
