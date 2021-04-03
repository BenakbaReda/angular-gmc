import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-dad-and-son',
  templateUrl: './interaction-dad-and-son.component.html',
  styleUrls: ['./interaction-dad-and-son.component.css']
})
export class InteractionDadAndSonComponent implements OnInit {

  selectedColor : ColorID;
  ColorObj:Array<ColorID> = [
    {id: 1, name: "lavender"},
    {id: 2, name: "Blue"},
    {id: 3, name: "Indigo"},
    {id: 4, name: "LightCoral"},
    {id: 5, name: "LightSalmon"}
];



  constructor( ) {
    this.selectedColor = this.ColorObj[0];
   }

  ngOnInit(): void {
  }



}


interface ColorID{
  id:number;
  name:string;
}
