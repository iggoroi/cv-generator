import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Skills} from "../../models/models";

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  skill: Skills;

  @Output()
  hosceltote = new EventEmitter<Skills>()

  constructor() { }

  ngOnInit(): void {
  }

}
