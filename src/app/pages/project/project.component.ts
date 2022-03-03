import { Component, OnInit } from '@angular/core';
import {Information, Project} from "../../models/models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  data:Project;
  entries:Array<{key:string,val:any}>=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data.projects;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }

}
