import { Link } from "react-router-dom";
import "./Homepage.css";
import ButtonDefault from "../../components/ButtonDefault";

export default function Homepage() {


    return (

        <div className="homepage">

            <div className="flex flex-col py-10">
                <h1 className="text-white mx-auto mt-5 font-bold">Manag'Event</h1>

                <p className="text-justify text-white w-8/12 mx-auto mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque in vel quod fuga illo sequi voluptate et voluptatibus dolor temporibus distinctio, expedita nam, eum soluta. Quaerat cupiditate, corporis quod iure pariatur sed animi quam aliquam, delectus esse assumenda incidunt quos voluptates in accusamus, nesciunt voluptate? Tenetur nobis fuga sapiente tempora similique quos odio hic voluptatibus debitis dicta corporis in, soluta, ut nisi beatae pariatur iusto sint omnis quam, aut autem! !</p>
            </div>
            <div className="mx-auto mb-2 w-6/12 mt-2">
                <ButtonDefault >
                    Se connecter
                </ButtonDefault>
            </div>
            <div className="mx-auto w-6/12 mb-5">
                <ButtonDefault>
                    S'inscrire
                </ButtonDefault>
            </div>
            <div className="flex justify-center mx-auto py-5">
                <Link to="" className="border-b-2 text-white">
                    Contactez-nous
                </Link>
            </div>

        </div>

    )
}
