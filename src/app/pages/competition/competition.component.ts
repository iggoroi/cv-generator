import { Component, OnInit } from '@angular/core';
import {Competence} from "../../models/models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  data:Competence;
  entries:Array<{key:string, val:any}>= [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data.competences;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }

}
