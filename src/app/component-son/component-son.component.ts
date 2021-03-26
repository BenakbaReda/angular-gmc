import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-son',
  templateUrl: './component-son.component.html',
  styleUrls: ['./component-son.component.css']
})
export class ComponentSonComponent implements OnInit {

  @Input() NameParentColor:string ="unknown";

  DivBgColor:string ="WhiteSmoke";

  
  constructor() { }

  ngOnInit(): void {
  }

}
