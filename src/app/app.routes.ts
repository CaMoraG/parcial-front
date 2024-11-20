import { Routes } from '@angular/router';
import { MostrarRegistrosComponent } from './components/mostrar-registros/mostrar-registros.component';
import { AgregarRegistrosComponent } from './components/agregar-registros/agregar-registros.component';

export const routes: Routes = [
    {path: '', redirectTo: 'mostrar-registros', pathMatch: 'full'},
    {path: 'mostrar-registros', component: MostrarRegistrosComponent},
    {path: 'agregar-registros', component: AgregarRegistrosComponent}
];
