import { Component, OnInit } from '@angular/core';
import {Experience} from "../../models/models";
import {HttpClient} from "@angular/common/http";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  data:Experience;
  entries:Array<{key:number,val:Experience}>=[];

  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getExperiences().subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
      this.entries.push({key: parseInt(key),val})
      })
    })

  }

}
