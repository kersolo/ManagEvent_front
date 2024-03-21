import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonDefault from "../ButtonDefault";

export default function NavBar() {
  const [admin, setAdmin] = useState(true);

  return (
    <>
      <nav className="flex  justify-between items-center bg-darkBlueDP opacity-85 text-white p-large lg:px-20 h-12 md:h-16 lg:h-20 ">
        <Link
          to={"/"}
          className={`${
            admin ? "hidden" : ""
          } text-orangeDP hover:text-darkOrangeDP`}
        >
          Panel Admin
        </Link>
        <Link to={"/"} className="hover:text-lightBlueDP">
          Evénements
        </Link>
        <Link to={"/"} className="hover:text-lightBlueDP">
          Mes infos
        </Link>
        <Link to={"/"} className="hover:text-lightBlueDP">
          Notifications
        </Link>
        <Link to={"/"} className="hover:text-lightBlueDP">
          Messagerie
        </Link>
        <Link to={"/"} className="hover:text-lightBlueDP">
          Déconnexion
        </Link>
      </nav>
      <ButtonDefault
        onClick={() => {
          console.log("click");
          setAdmin(!admin);
        }}
      >
        Change
      </ButtonDefault>
    </>
  );
}
