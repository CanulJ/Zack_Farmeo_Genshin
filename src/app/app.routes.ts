import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { TarjetasComponent } from './Pages/tarjetas/tarjetas.component';
import { RecomendacionesComponent } from './Pages/recomendaciones/recomendaciones.component';
import { ConocenosComponent } from './Pages/conocenos/conocenos.component';

export const routes: Routes = [

    {path: '',component:InicioComponent},

    {path: 'inicio',component:InicioComponent},

    {path: 'tarjetas',component:TarjetasComponent},

    {path: 'recomendaciones',component:RecomendacionesComponent},

    {path: 'conocenos',component:ConocenosComponent}

];
