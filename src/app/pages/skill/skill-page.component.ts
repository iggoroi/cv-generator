import { Component, OnInit } from '@angular/core';
import {Skills} from "../../models/models";
import {HttpClient} from "@angular/common/http";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.scss']
})

export class SkillPage implements OnInit {

  data:Skills;
  entries:Array<{key:number,val:Skills}> = [];

  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getSkills().subscribe(data=>{
      this.data=data;
      Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key: parseInt(key),val})
      })
    })

  }

  trigger(event:any){
    alert(event);
  }

}
