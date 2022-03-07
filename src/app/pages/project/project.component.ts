import { Component, OnInit } from '@angular/core';
import {Information, Project} from "../../models/models";
import {HttpClient} from "@angular/common/http";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  data:Project;
  entries:Array<{key:number,val:any}>=[];

  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getProjects().subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key: parseInt(key),val})
      })
    })

  }

}
