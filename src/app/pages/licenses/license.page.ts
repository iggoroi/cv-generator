import { Component, OnInit } from '@angular/core';
import {Information, License} from "../../models/models";
import {HttpClient} from "@angular/common/http";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-licenses',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss']
})
export class LicensePage implements OnInit {
  data:License;
  entries:Array<{key:string,val:any}>=[];

  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getSection('license').subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })

  }

}
