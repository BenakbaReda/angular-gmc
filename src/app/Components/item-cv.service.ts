import { Injectable } from '@angular/core';
import { Personne } from './Personne';

@Injectable({
  providedIn: 'root'
})
export class ItemCvService {
  ListPersonnes : Personne[]= [];
 
  constructor() { 
    this.ListPersonnes = [
      new Personne(1,"Ali","Bouyahya",
                      36,123456,"Top students",
                      "Ain BENIAN")               
      ,new Personne(2, "AMINE ","Jaja",
                      25,2514785,"Electricien",
                      "Cheraga")              
      ,new Personne(3, "Mohamed ","Walou!",
                      25,2514785,"chomage",
                      "Cheraga")              
      ,new Personne(4, "Toufik ","Jaja",
                      25,2514785,"Electricien",
                      "Beni massous") 
                  ]
  }

  getPersonneById(id:number) :Personne | undefined     {
    const p =  this.ListPersonnes.find(elm => elm.id == id);
    return p;
  }
  getPersonnes() :Personne[]      {
    
    return this.ListPersonnes;
  }

}
