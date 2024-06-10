import { Component } from '@angular/core';
import { PrimoServiceService } from '../service/primo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  valore_da_passare : any  = 'NULLO'; 

  constructor(private primo_servizio : PrimoServiceService , private route : ActivatedRoute)
  {
    this.valore_da_passare = primo_servizio.scritta_da_prendere; 
    console.log(primo_servizio.scritta_da_prendere); 
    this.valore_da_passare = route.snapshot.paramMap.get('id'); 
  }
}
