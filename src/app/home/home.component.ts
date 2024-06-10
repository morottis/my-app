import { Component, Input, Output , EventEmitter } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { PrimoServiceService } from '../service/primo-service.service';
import { ActivatedRoute } from '@angular/router';

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
  title :string ; 
  scritta_per_about :string = 'SCRITTA PROVENIENETE DA HOMEPAGE'; 

  get Title() {
    return this.title
  }
  constructor( private primo_servizio : PrimoServiceService , private route:  ActivatedRoute)
  {
    this.title = primo_servizio.titolo; 
    primo_servizio.scritta_da_prendere = this.scritta_per_about; 
    console.log(primo_servizio.scritta_da_prendere);  
    console.log(this.route.snapshot.paramMap.get('id'));// stampo id 
  }

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
