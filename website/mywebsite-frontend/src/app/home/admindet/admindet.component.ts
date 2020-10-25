import { Component, OnInit } from '@angular/core';
import {AdminsService} from "../../services/admins.service";
import {ActivatedRoute} from "@angular/router";
import {Mail} from "../../models/mail";

@Component({
  selector: 'app-admindet',
  templateUrl: './admindet.component.html',
  styleUrls: ['./admindet.component.css']
})
export class AdmindetComponent implements OnInit {
id;
detailleadmin;
  mail = new Mail();
  constructor(private srvadmin: AdminsService, private actvroute:ActivatedRoute) {
    this.id=this.actvroute.params['value']['id']
    this.details(this.id)
  }

  ngOnInit() {
  }
details(id){
  this.srvadmin.AfficherDetails(id).subscribe(res => {
    this.detailleadmin= res;
    console.log(this.detailleadmin);
})
}
  sendmail(){
    const data ={
      to:this.detailleadmin.email,
      subject:this.mail.subject,
      content:this.mail.content
    }
    console.log(data)
    this.srvadmin.mail(data).subscribe(res=>{
      console.log(res)
      this.mail= new Mail();
    })
  }


}
