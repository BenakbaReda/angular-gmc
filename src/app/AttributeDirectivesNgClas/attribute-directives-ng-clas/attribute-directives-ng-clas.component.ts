import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-ng-clas',
  templateUrl: './attribute-directives-ng-clas.component.html',
  styleUrls: ['./attribute-directives-ng-clas.component.css']
})
export class AttributeDirectivesNgClasComponent implements OnInit {

  isTheme01 : boolean=false;
  isTheme02 : boolean=false;
  isTheme03 : boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  OnClick_Theme01(): void {
    this.isTheme01 =true; this.isTheme02 =false; this.isTheme03 =false;

  }
  OnClick_Theme02(): void {
    this.isTheme01 =false; this.isTheme02 =true; this.isTheme03 =false;
  }
  OnClick_Theme03(): void {
    this.isTheme01 =false; this.isTheme02 =false; this.isTheme03 =true;
  }
}
