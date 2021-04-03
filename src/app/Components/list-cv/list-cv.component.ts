import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemCvService } from '../item-cv.service';
 
import { Personne } from '../Personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
 
  ListCv! : Personne[] ;
  seletedPersonne! : Personne;
   // send data to parent .this example the parent is CV list 
   @Output() seletedItemEvent = new EventEmitter<Personne>();
  

  constructor(private CvService: ItemCvService  ) { }

  ngOnInit(): void {
   this.ListCv = this.CvService.getPersonnes();
  }
  

   DetailHandler(p: Personne) {
    this.seletedPersonne = p;
    console.log(this.seletedPersonne);
    this.seletedItemEvent.emit(this.seletedPersonne);
  }


  

}
