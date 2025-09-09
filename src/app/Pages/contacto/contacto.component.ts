import { Component, Inject, inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  standalone: true
})
export class ContactoComponent {

  paqueteSeleccionado: string = '';

  private _bottomSheetRef = inject(MatBottomSheetRef<ContactoComponent>);

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    // Capturamos el paquete recibido al abrir el BottomSheet
    this.paqueteSeleccionado = data?.paqueteSeleccionado ?? 'General';
  }

  cerrar(): void {
    this._bottomSheetRef.dismiss();
  }

  get whatsappLink(): string {
    const texto = `¡Hola! Quiero más información del paquete: ${this.paqueteSeleccionado}`;
    return `https://api.whatsapp.com/send?phone=529936024613&text=${encodeURIComponent(texto)}`;
  }

}
