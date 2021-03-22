import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {


   Name:string = "My Name";
   Profession:string = "my Job ";

   Desciption:string = "I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere";


  constructor() { }

  ngOnInit(): void {
  }

}
