import { Component, OnInit } from '@angular/core';
import {Skills} from "../../models/models";
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss']
})

export class SkillsPage implements OnInit {

  data:Skills[];
  //entries:Array<{key:number,val:Skills}> = [];


  constructor(private cvservice:CurriculumService) { }

  ngOnInit(): void {
    this.cvservice.getSection('skills').subscribe(data=>{
      this.data=data;
      /*Object.entries(this.data).forEach(([key,val])=>{
        this.entries.push({key: parseInt(key),val})
      })*/
    })

  }

  trigger(event:any){
    alert(event);
  }

}
