import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  data:any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("assets/CV.json").subscribe(data=>{
      debugger;
    })
  }

}
