import { Component, OnInit } from '@angular/core';
import {Skills} from "../../models/models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {

  data:Skills;
  entries:Array<{key:string,val:Skills}> = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data.skills;
      Object.entries(this.data).forEach(([key, val])=>{
        this.entries.push({key, val})
      })
    })

  }

}
