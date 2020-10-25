import {Projet} from "./projet";
import {Cours} from "./cours";
import {Utilisateur} from "./utilisateur";

export class Commentaire {
  description: string;
  date : string;
  heure : string;
  projet : Projet;
  cours : Cours;
  utilisateur : Utilisateur;
}
