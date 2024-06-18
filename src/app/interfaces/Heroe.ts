import { Publisher } from "./Publisher";

export interface Heroe {
  id:               string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  img_name?:        string;
}
