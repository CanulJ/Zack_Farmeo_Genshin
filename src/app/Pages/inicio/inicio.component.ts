import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { RecomendacionesComponent } from '../recomendaciones/recomendaciones.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, MatButtonModule, TarjetasComponent, RecomendacionesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

constructor(private router: Router) {}

  conocenos(): void {
    this.router.navigate(['/conocenos']);
  }
}
