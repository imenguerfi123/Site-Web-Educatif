import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import Swal from 'sweetalert2';
import {Cours} from '../../models/cours';
import {CoursService} from '../../services/cours.service';
import {Projet} from '../../models/projet';
import {ProjetsService} from '../../services/projets.service';
import {TDs} from '../../models/tds';
import {TDsService} from '../../services/tds.service';
import {Tps} from '../../models/tps';
import {TpsService} from '../../services/tps.service';
import {Examen} from '../../models/examen';
import {ExamenService} from '../../services/examen.service';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {
  listearticles;
  article = new Article();
  listecours;
  cours = new Cours();
  listeprojets;
  projet = new Projet();
  listetds;
  td = new TDs();
  listetps;
  tp = new Tps();
  listeexamens;
  examen = new Examen();
  id;
  idcat;
  idco;
  idc;
  constructor(private srvcarticle: ArticleService, private srvcours: CoursService, private srvcproj: ProjetsService, private srvctds: TDsService, private srvctps: TpsService, private srvexamen: ExamenService) {
    this.allarticles();
    this.allcours();
    this.allprojet();
    this.alltds();
    this.alltps();
    this.allexamens();
  }

  ngOnInit() {
  }
  allarticles() {
    this.srvcarticle.AficherList().subscribe(res => {
      this.listearticles = res;
      console.log(this.listearticles);
    });
  }

  deletee(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvcarticle.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allarticles();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  moddiifier(){
    const data ={
      titre : this.article.titre,
      auteur : this.article.auteur,
      reference : this.article.reference,
      date_publication : this.article.date_publication,
      categories : this.article.categories,
    }
    this.srvcarticle.edit(this.id,this.idcat,data).subscribe(res => {
      this.listearticles = res;
      console.log(this.listearticles);
      this.allarticles()
    });
  }
  reccupperer(id,titre,auteur,reference,date_publication,idcat){
    this.id = id;
    this.article.titre = titre;
    this.article.auteur = auteur;
    this.article.reference = reference;
    this.article.date_publication = date_publication;
    this.idcat= idcat;
    console.log(this.id)
  }

  allcours() {
    this.srvcours.AficherList().subscribe(res => {
      this.listecours = res;
      console.log(this.listecours);
    });
  }
  delete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvcours.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allcours();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  modiffier(){
    const data ={
      matiere : this.cours.matiere,
      reference : this.cours.reference,
      date : this.cours.date,
      categories : this.cours.categories,
    }
    this.srvcours.edit(this.id,this.idcat,data).subscribe(res => {
      this.listecours = res;
      console.log(this.listecours);
      this.allcours()
    });
  }
  recupperer(id,matiere,reference,date,idcat){
    this.id = id;
    this.cours.matiere = matiere;
    this.cours.reference = reference;
    this.cours.date = date;
    this.idcat= idcat;
    console.log(this.idcat)
  }
  allprojet() {
    this.srvcproj.AficherList().subscribe(res => {
      this.listeprojets = res;
      console.log(this.listeprojets);
    });
  }
  deleete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvcproj.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allprojet();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  modifier(){
    const data ={
      titre : this.projet.titre,
      logiciel : this.projet.logiciel,
      description : this.projet.description,
      prix : this.projet.prix,
      date : this.projet.date,
      categories : this.projet.categories,
    }
    this.srvcproj.edit(this.id,this.idcat,data).subscribe(res => {
      this.listeprojets = res;
      console.log(this.listeprojets);
      this.allprojet()
    });
  }
  recuperer(id,titre,logiciel,description,prix,date,idcat){
    this.id = id;
    this.projet.titre = titre;
    this.projet.logiciel = logiciel;
    this.projet.description = description;
    this.projet.prix = prix;
    this.projet.date = date;
    this.idcat= idcat;
    console.log(this.id)
  }

  alltds() {
    this.srvctds.AficherList().subscribe(res => {
      this.listetds = res;
      console.log(this.listetds);
    });
  }
  dellete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvctds.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.alltds();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  moddifier(){
    const data ={
      matiere : this.td.matiere,
      chapitre : this.td.chapitre,
      nombre_exercice : this.td.nombre_exercie,
      date : this.td.date,
      cours:this.td.cours,
    }
    this.srvctds.edit(this.id,this.idco,data).subscribe(res => {
      this.listetds = res;
      console.log(this
        .listetds);
      this.alltds()
    });
  }
  reccuperer(id,matiere,chapitre,nombre_exercice,date,idco){
    this.id = id;
    this.td.matiere = matiere;
    this.td.chapitre = chapitre;
    this.td.nombre_exercie = nombre_exercice;
    this.td.date = date;
    this.idco= idco;
    console.log(this.id)
  }

  alltps() {
    this.srvctps.AficherList().subscribe(res => {
      this.listetps = res;
      console.log(this.listetps);
    });
  }
  delette(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvctps.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.alltps();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  moodifier(){
    const data ={
      titre : this.tp.titre,
      objectif : this.tp.objectif,
      materiels : this.tp.materiels,
      logiciel : this.tp.logiciel,
      date : this.tp.date,
      cours:this.tp.cours,
    }
    this.srvctps.edit(this.id,this.idcat,data).subscribe(res => {
      this.listetps = res;
      console.log(this.listetps);
      this.alltps()
    });
  }
  reecuperer(id,titre,objectif,materiels,logiciel,date,idcat){
    this.id = id;
    this.tp.titre = titre;
    this.tp.objectif = objectif;
    this.tp.materiels = materiels;
    this.tp.logiciel = logiciel;
    this.tp.date = date;
    this.idcat= idcat;
    console.log(this.id)
  }
  allexamens() {
    this.srvexamen.AficherList().subscribe(res => {
      this.listeexamens = res;
      console.log(this.listeexamens);
    });
  }
  deeleete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvexamen.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allexamens();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  modifiiier(){
    const data ={
      matiere : this.examen.matiere,
      nombre_exercices : this.examen.nombre_exercices,
      nombre_page : this.examen.nombre_page,
      duree_examen : this.examen.duree_examen,
      cours:this.examen.cours,
    }
    console.log(data)
    this.srvexamen.edit(this.id,this.idc,data).subscribe(res => {
      console.log(res);
      this.allexamens()
    });
  }
  recuppperer(id,matiere,nombre_exercices,nombre_page,duree_examen,idc){
    this.id = id;
    this.examen.matiere = matiere;
    this.examen.nombre_exercices = nombre_exercices;
    this.examen.nombre_page = nombre_page;
    this.examen.duree_examen = duree_examen;
    this.idc= idc;
    console.log(this.idc)
  }
}
