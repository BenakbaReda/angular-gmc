import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-ng-styl',
  templateUrl: './attribute-directives-ng-styl.component.html',
  styleUrls: ['./attribute-directives-ng-styl.component.css']
})
export class AttributeDirectivesNgStylComponent implements OnInit {
  
  FontNameList! : string[];
  SelectedFont! :string;

  CurrentColor!:string; 
  CurrentSize!:number; 
  
  constructor() {
    this.FontNameList = [
      "serif",
      "sans-serif",
      "monospace",
      "cursive",
      "fantasy",
      "system-ui",
      "emoji",
      "math",
      "fangsong"
   
    ]
    this.SelectedFont=this.FontNameList[1];
    this.CurrentColor="black";
    this.CurrentSize=25;
   }

  ngOnInit(): void {
  }
   getFontSize(): string {
      return  this.CurrentSize +"px";
  }
  getFontColor(): string {
    return  this.CurrentColor ;
}
  getFontFamilly(): string {
    return  this.SelectedFont ;
}

}
