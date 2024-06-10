import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrimoServiceService {

  titolo : string = 'primo servizio da stampare '; 
  scritta_da_prendere : string = 'NULLO'; 
  constructor() { }

}
