import { Component, Input, Output , EventEmitter } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() data : any ;
   
  @Output() evento = new EventEmitter<string>(); 

  scritta_da_emettere : string = "dato emesso da Homecomponent"; 

  cliccato()
  {
    this.evento.emit(this.scritta_da_emettere); 
  }

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  scritta : string = 'search'; 
  cont : number = 0 ; 

  verifica(): void
  { 
    this.cont++ ; 
    if( this.cont%2 == 0 )
      {
        this.scritta = 'search'; 
      }
      else
      {
        this.scritta = this.data;
      }  
    console.log(this.data); 
  }

  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
