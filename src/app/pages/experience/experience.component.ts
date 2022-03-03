import { Component, OnInit } from '@angular/core';
import {Experience} from "../../models/models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  data:Experience;
  entries:Array<{key:string,val:any}>=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data.experiences;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }

}
