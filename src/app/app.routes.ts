import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { TarjetasComponent } from './Pages/tarjetas/tarjetas.component';
import { ProcesoComponent } from './Pages/proceso/proceso.component';

export const routes: Routes = [

    {path: '',component:InicioComponent},

    {path: 'inicio',component:InicioComponent},

    {path: 'tarjetas',component:TarjetasComponent},

    {path: 'proceso',component:ProcesoComponent}

];
