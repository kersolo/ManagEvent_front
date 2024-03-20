import { Link } from "react-router-dom";
import ContactUs from "../ContctUs/ContactUs";
import"./Homepage.css";

export default function Homepage() {
    return (
    
            <div className="text-white flex flex-col p-5 ">

                     <h1 className="mx-auto mt-20">Manag'Event</h1>
               
                     <p className="mt-20 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque in vel quod fuga illo sequi voluptate et voluptatibus dolor temporibus distinctio, expedita nam, eum soluta. Quaerat cupiditate, corporis quod iure pariatur sed animi quam aliquam, delectus esse assumenda incidunt quos voluptates in accusamus, nesciunt voluptate? Tenetur nobis fuga sapiente tempora similique quos odio hic voluptatibus debitis dicta corporis in, soluta, ut nisi beatae pariatur iusto sint omnis quam, aut autem! !</p>
            
              
                    <Link to={"/Se-connecter"} className="mx-auto mt-20 ">
                        Se connecter
                    </Link>
                    <Link to={"/S'inscrire"} className="mx-auto">
                        S'inscrire
                    </Link>

                    <Link to={"/Contactez-nous"} className="mx-auto mt-20 border-b-2">
                        <ContactUs />
                    </Link>
             
            </div>
      
    )
}
