import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';
import {LoginComponent} from './login/login.component';
import {ProjetsComponent} from './home/projets/projets.component';
import {ProjdetComponent} from './home/projdet/projdet.component';
import {AdminComponent} from './home/admin/admin.component';
import {UtilisateurComponent} from './home/utilisateur/utilisateur.component';
import {AdmindetComponent} from './home/admindet/admindet.component';
import {UtilisateurdetComponent} from './home/utilisateurdet/utilisateurdet.component';
import {CoursComponent} from './home/cours/cours.component';
import {TDsComponent} from './home/tds/tds.component';
import {TpsComponent} from './home/tps/tps.component';
import {ExamenComponent} from './home/examen/examen.component';
import {ArticleComponent} from './home/article/article.component';
import {ContactComponent} from './home/contact/contact.component';
import {BibliothequeComponent} from './home/bibliotheque/bibliotheque.component';
import {SidebarComponent} from './home/sidebar/sidebar.component';
import {CommandeComponent} from './home/commande/commande.component';
import {AjouteradminComponent} from "./home/ajouteradmin/ajouteradmin.component";
import {CategoriesComponent} from "./home/categories/categories.component";
import {AjoutercategoriesComponent} from "./home/ajoutercategories/ajoutercategories.component";
import {AjouterprojetComponent} from "./home/ajouterprojet/ajouterprojet.component";
import {AjoutercoursComponent} from "./home/ajoutercours/ajoutercours.component";
import {AjoutertdComponent} from "./home/ajoutertd/ajoutertd.component";
import {AjoutertpComponent} from "./home/ajoutertp/ajoutertp.component";
import {AjouterarticleComponent} from "./home/ajouterarticle/ajouterarticle.component";
import {AjouterexamenComponent} from "./home/ajouterexamen/ajouterexamen.component";
import {ProfilComponent} from "./home/profil/profil.component";
import {AuthGuard} from "./services/auth.guard";
import {CommentaireComponent} from "./home/commentaire/commentaire.component";
import {CoursdetComponent} from "./home/coursdet/coursdet.component";

const routes: Routes = [{path: 'home', component: HomeComponent,canActivate:[AuthGuard],
  children: [
    {path: '', component: ContainerComponent},
    {path: 'projets', component: ProjetsComponent},
    {path: 'projets/:id/projdet', component: ProjdetComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'utilisateur', component: UtilisateurComponent},
    {path: 'admin/:id/admindet', component: AdmindetComponent},
    {path: 'utilisateur/:id/utilisateurdet', component: UtilisateurdetComponent},
    {path: 'cours', component: CoursComponent},
    {path: 'td', component: TDsComponent},
    {path: 'tps', component: TpsComponent},
    {path: 'examen', component: ExamenComponent},
    {path: 'article', component: ArticleComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'biblio', component: BibliothequeComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path: 'commande', component: CommandeComponent},
    {path: 'Ajoutadmin', component: AjouteradminComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'ajoutercategorie', component: AjoutercategoriesComponent},
    {path: 'ajouterprojet', component: AjouterprojetComponent},
    {path: 'ajoutercours', component: AjoutercoursComponent},
    {path: 'ajoutertds', component: AjoutertdComponent},
    {path: 'ajoutertps', component: AjoutertpComponent},
    {path: 'ajouterarticle', component: AjouterarticleComponent},
    {path: 'ajouterexamen', component: AjouterexamenComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'commentaire', component: CommentaireComponent},
    {path: 'cours/:id/coursdet', component: CoursdetComponent}



  ]
},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
