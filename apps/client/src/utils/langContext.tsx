import { createContext } from "react";

export type LangData = {
  headeri: Footer;
  footer: Footer;
  home_page: HomePage;
  projects_page: ProjectsPage;
  stories_page: StoriesPage;
};

export type Footer = {
  _comment: string;
  home_page: string;
  projects: string;
  stories: string;
  contact: string;
  back_to_top?: string;
};

export type HomePage = {
  _comment: string;
  title: string;
  text: string;
  employed_to_text: string;
  companies_list: string[];
  why_virittamo: string;
  for_an_employee: ForA;
  for_a_company: ForA;
  teams: Teams;
  apply: Apply;
  partners: string;
  contact_details: ContactDetails;
  locations: Location[];
};

export type Apply = {
  title: string;
  description: string;
  qualifications: Qualification[];
};

export type Qualification = {
  title: string;
  desc: string;
};

export type ContactDetails = {
  title: string;
  team: Team[];
};

export type Team = {
  name: string;
  title: string;
  phone: string;
  email: string;
};

export type ForA = {
  title: string;
  description: string[];
};

export type Location = {
  name: string;
  title: string;
  address: string;
  postalCode: string;
};

export type Teams = {
  title: string;
  media_desc: string;
  ict_desc: string;
  software_desc: string;
  read_more_btn: string;
  read_less_btn: string;
};

export type ProjectsPage = {
  title: string;
  desc: string;
  carousels: Carousels;
};

export type Carousels = {
  text: Text;
  slides: Slides;
};

export type Slides = {
  media: ICTElement[];
  ict: ICTElement[];
  softa: ICTElement[];
};

export type ICTElement = {
  _id: number;
  team: string;
  component: string;
  client_name: string;
  project_title: string;
  completion_year: string;
  img_src: string;
  img_src_small: string;
  alt: string;
  link: string;
  description: string;
};

export type Text = {
  media: TextICT;
  ict: TextICT;
  softa: TextICT;
};

export type TextICT = {
  title: string;
  description: string;
  contact: string;
};

export type StoriesPage = {
  _comment: string;
  title: string;
  text: string;
  view_story_btn: string;
  stories: Story[];
};

export type Story = {
  index: number;
  alt: string;
  img_src: string;
  full_name: string;
  job_title: string;
  story_text: string[];
  component: string;
};

export type Lang = {
  lang: LangData;
  seLocale: (value: string) => void;
  fi: LangData;
  en: LangData;
};

export const LanguageContext = createContext({});
