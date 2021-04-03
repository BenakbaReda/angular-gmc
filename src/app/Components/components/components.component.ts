import { Component, OnInit } from '@angular/core';
import { Personne } from '../Personne';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  seletedPersonne! : Personne;
  
  constructor() { }

  ngOnInit(): void {
  }

  DetailHandler(p: Personne) {
    this.seletedPersonne = p;
    console.log(this.seletedPersonne);
     
  }
}
