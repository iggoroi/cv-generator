import { Component, OnInit } from '@angular/core';
import {Education, Information} from "../../models/models";
import {HttpClient} from "@angular/common/http";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss']
})
export class EducationPage implements OnInit {
  data:Education;
  entries:Array<{key:string,val:any}> = [];

  constructor(private cvservice:CurriculumService) {}

  ngOnInit(): void {
    this.cvservice.getSection('education').subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }

}
