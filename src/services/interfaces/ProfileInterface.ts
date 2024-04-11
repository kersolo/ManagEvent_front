export interface ProfileInterface {
  id: string;
  firstname: string;
  lastname: string;
  nickname: string;
  avatar_url: string;
  email: string;
}

export interface EventInProfilePageInterface {
  date: Date;
  title: string;
}

export interface SkillInProfilePageInterface {
  name: string;
  level: number;
}
