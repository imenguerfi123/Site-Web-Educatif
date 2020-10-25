import { Component, OnInit } from '@angular/core';
import {Categories} from "../../models/categories";
import {CategoriesService} from "../../services/categories.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  listecategoeies;
  categorie = new Categories();
id;
  constructor(private srvcategories: CategoriesService ) {
    this.allcategories();
  }

  ngOnInit() {
  }
  allcategories() {
    this.srvcategories.AficherList().subscribe(res => {
      this.listecategoeies = res;
      console.log(this.listecategoeies);
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
      this.srvcategories.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allcategories();
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
      domaine : this.categorie.domaine
    }
    this.srvcategories.edit(this.id,data).subscribe(res => {
      this.listecategoeies = res;
      console.log(this.listecategoeies);
      this.allcategories()
    });
  }
  recuperer(id,domaine){
    this.id = id;
    this.categorie.domaine=domaine;
    console.log(this.id)
  }
}
