import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (

        <>
            <nav className="bg-blue-900 text-center text-gray-100 font-medium">
                <NavLink
                    to="/Contact">
                    Contact
                </NavLink>
            </nav>
        </>
    )
}