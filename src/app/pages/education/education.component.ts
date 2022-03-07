import { Component, OnInit } from '@angular/core';
import {Education, Information} from "../../models/models";
import {HttpClient} from "@angular/common/http";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  data:Education;
  entries:Array<{key:string,val:any}> = [];
  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getEducation().subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }

}
