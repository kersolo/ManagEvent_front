import { useQuery } from "@tanstack/react-query";
import { getSkillsByUserIdForProfilePage } from "../../services/api/profile";
import { SkillInProfilePageInterface } from "../../services/interfaces/ProfileInterface";

export default function ProfileSkills({ id }: { id: string }) {
  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery<SkillInProfilePageInterface[] | undefined>({
    queryKey: ["events"],
    queryFn: () => getSkillsByUserIdForProfilePage(id),
    staleTime: 0,
  });

  return isLoading ? (
    <p>Loader</p>
  ) : isError ? (
    <p>Une erreur s'est produite</p>
  ) : (
    <div className="flex flex-col gap-4 md:gap-6">
      {skills && skills.length > 0 ? (
        skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-start gap-4 border-dp p-large"
          >
            <h3 className="h3-size ml-large">{skill.name}</h3>
            <div className="flex grow justify-end">
              <p className="underline">level : {skill.level}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Vous n'avez aucun badge de compétence pour le moment</p>
      )}
    </div>
  );
}
