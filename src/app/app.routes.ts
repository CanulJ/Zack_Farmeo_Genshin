import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { TarjetasComponent } from './Pages/tarjetas/tarjetas.component';
import { RecomendacionesComponent } from './Pages/recomendaciones/recomendaciones.component';

export const routes: Routes = [

    {path: '',component:InicioComponent},

    {path: 'tarjetas',component:TarjetasComponent},

    {path: 'recomendaciones',component:RecomendacionesComponent},

];
