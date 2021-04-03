import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemCvService } from '../item-cv.service';
import { Personne } from '../Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() ItemCv! :Personne;
  // send data to parent .this example the parent is CV list 
  @Output() DetailItemEvent = new EventEmitter<Personne>();
  
  constructor( ) { }

  ngOnInit(): void {
     
  }

  onDetailleClick(): void  {
     this.DetailItemEvent.emit(this.ItemCv);
  }


}
