import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { ContainerComponent } from './home/container/container.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './home/footer/footer.component';
import { ProjetsComponent } from './home/projets/projets.component';
import { ProjdetComponent } from './home/projdet/projdet.component';
import { AdminComponent } from './home/admin/admin.component';
import { UtilisateurComponent } from './home/utilisateur/utilisateur.component';
import { AdmindetComponent } from './home/admindet/admindet.component';
import { UtilisateurdetComponent } from './home/utilisateurdet/utilisateurdet.component';
import { CoursComponent } from './home/cours/cours.component';
import { TDsComponent } from './home/tds/tds.component';
import { TpsComponent } from './home/tps/tps.component';
import { ExamenComponent } from './home/examen/examen.component';
import { ArticleComponent } from './home/article/article.component';
import { ContactComponent } from './home/contact/contact.component';
import { BibliothequeComponent } from './home/bibliotheque/bibliotheque.component';
import {CommandeComponent} from './home/commande/commande.component';
import { AjouteradminComponent } from './home/ajouteradmin/ajouteradmin.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { AjoutercategoriesComponent } from './home/ajoutercategories/ajoutercategories.component';
import { AjouterprojetComponent } from './home/ajouterprojet/ajouterprojet.component';
import { AjoutercoursComponent } from './home/ajoutercours/ajoutercours.component';
import { AjoutertdComponent } from './home/ajoutertd/ajoutertd.component';
import { AjoutertpComponent } from './home/ajoutertp/ajoutertp.component';
import { AjouterarticleComponent } from './home/ajouterarticle/ajouterarticle.component';
import { AjouterexamenComponent } from './home/ajouterexamen/ajouterexamen.component';
import { ProfilComponent } from './home/profil/profil.component';
import { CommentaireComponent } from './home/commentaire/commentaire.component';
import { CoursdetComponent } from './home/coursdet/coursdet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    ContainerComponent,
    LoginComponent,
    FooterComponent,
    ProjetsComponent,
    ProjdetComponent,
    AdminComponent,
    UtilisateurComponent,
    AdmindetComponent,
    UtilisateurdetComponent,
    CoursComponent,
    TDsComponent,
    TpsComponent,
    ExamenComponent,
    ArticleComponent,
    ContactComponent,
    BibliothequeComponent,
    CommandeComponent,
    AjouteradminComponent,
    CategoriesComponent,
    AjoutercategoriesComponent,
    AjouterprojetComponent,
    AjoutercoursComponent,
    AjoutertdComponent,
    AjoutertpComponent,
    AjouterarticleComponent,
    AjouterexamenComponent,
    ProfilComponent,
    CommentaireComponent,
    CoursdetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
