import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conocenos',
  imports: [],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {

  constructor(private router: Router) {}

 Inicio(): void {
    this.router.navigate(['/inicio']);
  }

}
