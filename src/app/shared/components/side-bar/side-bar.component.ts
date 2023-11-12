import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  //variables 
  //Public: podria no definirse, y dejarse asi, ya que lo toma implicitamente. Puede usarse en el componente HtML
  //Private: debe definirse, y este marca a esta variable para SOLO usarla en este archivo.

  public linksMenu: Array<any> = [ 
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Buscar',
      icon: 'uil-search'
    },
  ];

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {
    defaultOptions: [],
    accessLink: []
  };

  customOptions: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    //TODO es un ciclo, que se utiliza para las llamadas a APIs

    this.mainMenu.defaultOptions = [
      {
        name:'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name:'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name:'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ];

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ];
    
    
  }
}
