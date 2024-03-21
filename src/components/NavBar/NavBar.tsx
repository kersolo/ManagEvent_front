import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons/faPowerOff";
import { faUserShield } from "@fortawesome/free-solid-svg-icons/faUserShield";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  isAdmin: boolean;
}

export default function NavBar({ isAdmin }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-around md:justify-between items-center bg-navBarBlueDP opacity-95 text-white p-large fixed inset-x-0 bottom-0 md:sticky md:top-0">
        <div className="hidden md:flex gap-8 xl:gap-12 ">
          <Link
            to={"/admin"}
            className={`${
              isAdmin ? "" : "hidden"
            } text-orangeDP hover:text-darkOrangeDP flex gap-2`}
          >
            <span>Panel Admin</span>
            <FontAwesomeIcon icon={faUserShield} size="lg" />
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
        </div>
        <Link
          to={"/"}
          className="hover:text-lightBlueDP hidden md:flex md:gap-2"
        >
          <span>Déconnexion </span>
          <FontAwesomeIcon icon={faPowerOff} size="lg" />
        </Link>

        {isMenuOpen ? (
          <div className="md:hidden flex flex-col gap-8 justify-center items-center pt-4 ">
            <Link
              to={"/admin"}
              className={`${
                isAdmin ? "" : "hidden"
              } text-orangeDP hover:text-darkOrangeDP flex gap-2`}
            >
              <span>Panel Admin</span>
              <FontAwesomeIcon icon={faUserShield} size="lg" />
            </Link>
            <Link to={"/"} className="hover:text-lightBlueDP">
              Evénements
            </Link>
            <Link to={"/"} className="hover:text-lightBlueDP">
              Mes infos
            </Link>
            <Link to={"/"} className="hover:text-lightBlueDP">
              Messagerie
            </Link>
            <Link to={"/"} className="hover:text-lightBlueDP flex gap-2">
              <span>Déconnexion </span>
              <FontAwesomeIcon icon={faPowerOff} size="lg" />
            </Link>
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              cursor="pointer"
              className="hover:text-lightBlueDP"
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div className="md:hidden flex w-full justify-around ">
            <FontAwesomeIcon
              icon={faBell}
              size="lg"
              cursor="pointer"
              className=" hover:text-lightBlueDP"
            />
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              cursor="pointer"
              className=" hover:text-lightBlueDP"
              onClick={toggleMenu}
            />
          </div>
        )}
      </nav>
    </>
  );
}
