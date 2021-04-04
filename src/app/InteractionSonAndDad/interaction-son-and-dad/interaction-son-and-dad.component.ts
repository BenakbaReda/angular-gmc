import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-son-and-dad',
  templateUrl: './interaction-son-and-dad.component.html',
  styleUrls: ['./interaction-son-and-dad.component.css']
})
export class InteractionSonAndDadComponent implements OnInit {

  DivBgColor :string ="yallow"
  constructor() { }

  ngOnInit(): void {
  }


  GetColorEvent(p: string) {
    this.DivBgColor=p;
    console.log(this.DivBgColor);
  }

}
