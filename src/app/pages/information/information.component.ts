import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Information} from "../../models/models";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  data:Information;
  entries:Array<{key:string,val:any}>=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data.information;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }
}
