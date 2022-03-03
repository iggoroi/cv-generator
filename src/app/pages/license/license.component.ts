import { Component, OnInit } from '@angular/core';
import {Information, License} from "../../models/models";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {
  data:License;
  entries:Array<{key:string,val:any}>=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("assets/CV.json").subscribe(data=>{
      this.data=data.license;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key,val})
      })
    })
  }

}
