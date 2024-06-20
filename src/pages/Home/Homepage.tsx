import { Link } from 'react-router-dom';
import ButtonDefault from '../../components/ButtonDefault';
import './Homepage.css';

export default function Homepage() {
    return (
        <>
            <div className="homepage pt-20 px-6">
                <div className="flex flex-col">
                    <h1 className="text-white mx-auto font-bold py-10">Manag'Event</h1>
                    <p className="text-justify text-white sm:w-10/12 sm:mx-auto  md:w-7/12 md:mx-auto lg:w-5/12 lg:mx-auto xl:w-4/12 xl:mx-auto py-2 p-2">
                    Bienvenue sur Manag'Event, notre application dédiée à l'organisation d'événements variés et au recrutement de bénévoles. Chacune de ces occasions, qu'elles soient culturelles, caritatives, sportives ou artistiques, représente une formidable occasion de fusionner nos compétences et nos passions pour façonner des expériences inoubliables et uniques.
                    </p>
                </div>
                <div className="mb-5 mt-5">
                    <div className="w-4/12  md:w-3/12 md:lg:w-3/12 lg:mx-auto xl:w-2/12  mb-2 mx-auto">
                        <Link to={'/login'}>
                            <ButtonDefault>Se connecter</ButtonDefault>
                        </Link>
                    </div>
                    <div className="w-4/12  md:w-3/12 lg:w-3/12  xl:w-2/12 mx-auto">
                        <Link to={'/register'}>
                            <ButtonDefault>S'inscrire</ButtonDefault>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center mx-auto">
                    <Link to="/contact" className="border-b-2 text-white">
                        Contactez-nous
                    </Link>
                </div>
            </div>
        </>
    );
}
