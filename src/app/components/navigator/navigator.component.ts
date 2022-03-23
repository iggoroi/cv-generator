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
        url:"/informations",
        label:"Informations"
      },
      {
        url:"/experiences",
        label:"Experiences"
      },
      {
        url:"/education",
        label:"Education"
      },
      {
        url:"/skills",
        label:"Skills"
      },
      {
        url: "/projects",
        label: "Projects"
      },
      {
        url: "/languages",
        label: "Languages"
      }
    ]
  }
}
