import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives-ngif',
  templateUrl: './structural-directives-ngif.component.html',
  styleUrls: ['./structural-directives-ngif.component.css']
})
export class StructuralDirectivesNgifComponent implements OnInit {
  isToDisplay :boolean =true; 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){    
    console.log('old isToDisplay : '+this.isToDisplay)
    this.isToDisplay=!this.isToDisplay;
    console.log('new  isToDisplay : '+this.isToDisplay)
  }    
}
