import { Component, OnInit } from '@angular/core';
import {Experience} from "../../models/models";
import {HttpClient} from "@angular/common/http";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-experiences',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss']
})
export class ExperiencePage implements OnInit {
  data:Experience;
  entries:Array<{key:number,val:Experience}>=[];

  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getSection('experiences').subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
      this.entries.push({key: parseInt(key),val})
      })
    })

  }

}
