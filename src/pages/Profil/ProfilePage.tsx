import { useEffect, useState } from "react";
import ButtonDefault from "../../components/ButtonDefault";
import { getProfileById } from "../../services/api/profile";
import { useRequiredParams } from "../../services/hooks/useRequiredParams";
import ProfileInterface from "../../services/interfaces/ProfileInterface";
import ProfileEvents from "./ProfileEvents";
import ProfileSkills from "./ProfileSkills";

export default function ProfilePage() {
  const { id } = useRequiredParams<{ id: string }>();
  const [activeLink, setActiveLink] = useState<"events" | "skills">("events");
  const [isUser, setIsUser] = useState(false);
  const [profile, setProfile] = useState<ProfileInterface>({
    id: "",
    firstname: "",
    lastname: "",
    nickname: "",
    avatar_url: "",
    email: "",
  });
  const { firstname, lastname, nickname, avatar_url, email } = profile;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProfileById(id);
        if (response) {
          setIsUser(true);
          setProfile(response);
        } else {
          console.log("Profile not found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return isUser ? (
    <div className="flex flex-col md:w-2/3 m-large md:my-20 md:mx-auto gap-16">
      <section className="flex p-12 bg-mediumBlueDP rounded-xl">
        <div className="shrink-0 w-32 mr-12 md:mr-24">
          <img
            className="w-32 h-32 rounded-full"
            src={avatar_url}
            alt="Image de profil"
          />
        </div>
        <div className="flex flex-col w-full gap-2 md:gap-4 justify-center">
          <h1 className="h1-size mb-2">{nickname}</h1>
          <div className="flex flex-col">
            <div>
              {firstname} {lastname}
            </div>
            <div className="italic">{email}</div>
          </div>
          <div className="mt-4 flex lg:justify-end">
            <ButtonDefault className="h-12 w-32 text-sm md:text-lg">
              Modifier
            </ButtonDefault>
          </div>
        </div>
      </section>
      <nav className="flex justify-around md:text-xl">
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
          Mes Evénements
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
          Mes Compétences
        </button>
      </nav>
      {activeLink === "events" ? (
        <ProfileEvents id={id} />
      ) : (
        <ProfileSkills id={id} />
      )}
    </div>
  ) : (
    <h1>Profile not found</h1>
  );
}
