import { Component, OnInit } from '@angular/core';
import {Formation, Information} from "../../models/models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  data:Formation;
  entries:Array<{key:string,val:any}>=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data.formation;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }

}
