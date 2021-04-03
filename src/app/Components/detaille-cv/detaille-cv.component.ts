import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ItemCvService } from '../item-cv.service';
import { Personne } from '../Personne';

@Component({
  selector: 'app-detaille-cv',
  templateUrl: './detaille-cv.component.html',
  styleUrls: ['./detaille-cv.component.css']
})
export class DetailleCvComponent implements OnInit {
   
  
  @Input() DetailPersonne! :Personne;
 
  constructor() { }
  ngOnInit(): void {
    
  }
 
}
