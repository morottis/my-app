import { CommonModule, NgFor ,  } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule , NgFor],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',

})
export class HousingLocationComponent {
  testo :Array<string> =  ['string 2 ' , 'strin3', 'string4']; 
  
}
/* figlio di home perché il suo selector  viene specificato all' interno dell html del home*/