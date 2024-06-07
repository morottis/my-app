import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,  HomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  p : string = 'sbam'; 
  valore :number = 4 ; 
  scritta_da_ricevere : string = ""; 

  Prendo_dati( valore : any)
  {
    console.log('prendo il dato'); 
    this.scritta_da_ricevere = valore ;
    this.p = this.scritta_da_ricevere; 

  }
 
}
