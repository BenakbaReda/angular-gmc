import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-son-receive',
  templateUrl: './son-receive.component.html',
  styleUrls: ['./son-receive.component.css']
})
export class SonReceiveComponent implements OnInit {
  @Input() NameParentColor:string ="unknown";

  DivBgColor:string ="WhiteSmoke";
  constructor() { }

  ngOnInit(): void {
  }

}
