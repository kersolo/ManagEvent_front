import { useEffect, useState } from "react";
import { getProfileById } from "../../services/api/profile";
import { useRequiredParams } from "../../services/hooks/useRequiredParams";
import ProfileEvents from "./ProfileEvents";
import ProfileSkills from "./ProfileSkills";

interface Profile {
  id: string;
  firstname: string;
  lastname: string;
  nickname: string;
  avatar_url: string;
  email: string;
}
type ActiveLink = "events" | "skills";

export default function ProfilePage() {
  const { id } = useRequiredParams<{ id: string }>();
  const [activeLink, setActiveLink] = useState<ActiveLink>("events");
  const [isUser, setIsUser] = useState(false);

  const [profile, setProfile] = useState<Profile>({
    id: "",
    firstname: "",
    lastname: "",
    nickname: "",
    avatar_url: "",
    email: "",
  });

  useEffect(() => {
    const getData = async () => {
      const response = await getProfileById(id);
      if (response) {
        setIsUser(true);
        setProfile(response);
      } else {
        console.log("no user with this id");
      }
    };
    getData();
  }, [id]);

  // get request on profile/:id

  return isUser ? (
    <div className="flex flex-col justify-center text-center gap-5 p-12">
      <section>
        <h1>Infos user</h1>
        <div>{profile.firstname}</div>
        <div>{profile.lastname}</div>
        <div>{profile.nickname}</div>
        <div>{profile.avatar_url}</div>
        <div>{profile.email}</div>
      </section>
      <nav className="flex justify-center gap-3">
        <button
          onClick={() => {
            setActiveLink("events");
          }}
          className={
            activeLink === "events"
              ? "underline cursor-default text-orangeDP"
              : "text-orangeDP hover:underline"
          }
        >
          Evénements
        </button>
        <button
          onClick={() => {
            setActiveLink("skills");
          }}
          className={
            activeLink === "skills"
              ? "underline cursor-default text-orangeDP"
              : "text-orangeDP hover:underline"
          }
        >
          Compétences
        </button>
      </nav>
      {activeLink === "events" ? <ProfileEvents /> : <ProfileSkills />}
    </div>
  ) : (
    <h1>Profile not found</h1>
  );
}
