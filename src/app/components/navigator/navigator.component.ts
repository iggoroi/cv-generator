import { Component, OnInit } from '@angular/core';

interface MenuItem {
  url:string;
  label:string;
  icon?:string;
}

@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  collapse = true;
  items:Array<MenuItem>=[];
  constructor() {
    this.items=[
      {
        url:"/menu",
        label:"Menu"
      },
      {
        url:"/information",
        label:"Information"
      },
      {
        url:"/experience",
        label:"Experience"
      },
      {
        url:"/education",
        label:"Education"
      },
      {
        url:"/license",
        label:"License"
      },
      {
        url:"/skill",
        label:"Skill"
      },
      {
        url: "/project",
        label: "Project"
      }
    ]
  }
}
