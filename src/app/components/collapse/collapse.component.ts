import { Component, OnInit } from '@angular/core';
import {Skills} from "../../models/models";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  collapse: boolean[]=[true,true,true,true,true,true,true,true,true,true];
  data: Skills[];

  constructor(private cvservice: CurriculumService) {
  }

  ngOnInit(): void {
    this.cvservice.getSection('skills').subscribe(data => {
      this.data = data;
    })
  }
}
