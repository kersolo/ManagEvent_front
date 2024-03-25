import { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileEvents from "./ProfileEvents";
import ProfileSkills from "./ProfileSkills";

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();

  // get request on user/:id

  type ActiveLink = "events" | "skills";
  const [activeLink, setActiveLink] = useState<ActiveLink>("events");
  return (
    <div className="flex flex-col justify-center text-center gap-5 p-12">
      <section>Infos user</section>
      <nav className="flex justify-center gap-3">
        <button className=" text-orangeDP hover:underline">Evénements</button>
        <button className=" text-orangeDP hover:underline">Compétences</button>
      </nav>
      {activeLink === "events" ? <ProfileEvents /> : <ProfileSkills />}
    </div>
  );
}
