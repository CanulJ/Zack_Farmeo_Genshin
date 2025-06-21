import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recomendaciones',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './recomendaciones.component.html',
  styleUrl: './recomendaciones.component.css'
})
export class RecomendacionesComponent {
recomendaciones = [
    {
      titulo: 'Vincula tu cuenta',
      descripcion: 'Se recomienda vincular tu cuenta a un correo externo para mayor seguridad.'
    },
    {
      titulo: 'Verifica tus datos',
      descripcion: 'Antes de solicitar un servicio, asegúrate de que tus datos están correctos.'
    },
    {
      titulo: 'Uso responsable',
      descripcion: 'Evita compartir tu cuenta con terceros para mantenerla segura.'
    },
    {
      titulo: 'Cambiar contraseña',
      descripcion: 'Después de recibir tu servicio, cambia la contraseña por seguridad.'
    }
  ];

}
