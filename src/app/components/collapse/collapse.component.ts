import { Component, OnInit } from '@angular/core';
import {Languages, Skills} from "../../models/models";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  collapse: boolean[]=[];
  data: Skills[];
  entries:Array<{key:string,val:Skills}> = [];


  constructor(private cvservice: CurriculumService) {
  }

  ngOnInit(): void {
    this.cvservice.getSection('skills').subscribe(data => {
      this.data = data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.collapse.push(true);
      })
    })
  }

}