import { useEffect, useState } from "react";
import { getSkillsByUserIdForProfilePage } from "../../services/api/profile";

interface SkillProfileType {
  name: string;
  level: number;
}

export default function ProfileSkills({ id }: { id: string }) {
  const [skills, setEvents] = useState<SkillProfileType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSkillsByUserIdForProfilePage(id);
        if (response) {
          setEvents(response);
        } else {
          console.log("Profile not found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex justify-start gap-4 border-dp p-large">
          <h3 className="h3-size ml-large">{skill.name}</h3>
          <div className="flex grow justify-end">
            <p className="underline">level : {skill.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
