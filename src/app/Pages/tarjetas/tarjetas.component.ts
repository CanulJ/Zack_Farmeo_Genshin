import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-tarjetas',
  imports: [],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

private _bottomSheet = inject(MatBottomSheet);

 abrirContacto(nombrePaquete: string): void {
  this._bottomSheet.open(ContactoComponent, {
    data: { paqueteSeleccionado: nombrePaquete }
  });
}


}
