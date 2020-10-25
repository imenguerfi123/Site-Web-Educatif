import {Categories} from "./categories";

export class Cours {
  id;
  matiere: string;
  reference: string;
  date: string;
  photo: string;
  description: string;
  duree: string;
  nombre_lecon: string;
  categories: Categories;
}
