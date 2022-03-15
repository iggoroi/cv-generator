import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Information} from "../../models/models";
import {KeyValue} from "@angular/common";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-informations',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss']
})
export class InformationPage implements OnInit {
  data:Information;
  entries:Array<{key:string,val:any}>=[];

  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getSection('information').subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })

  }

}
