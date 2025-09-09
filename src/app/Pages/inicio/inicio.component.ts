import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { ProcesoComponent } from '../proceso/proceso.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, MatButtonModule, TarjetasComponent, ProcesoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

constructor(private router: Router) {}

  conocenos(): void {
    this.router.navigate(['/conocenos']);
  }
}
