import { Component, OnInit } from '@angular/core';
import {CurriculumService} from "../../services/curriculum.service";
import {Languages} from "../../models/models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss']
})
export class LanguagesPage implements OnInit {

  data:Languages;
  entries:Array<{key:string,val:Languages}> = [];

  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getSection('languages').subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }
}
