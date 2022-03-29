import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './views/acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { ListadoComponent } from './views/listado/listado.component';
import { LoginComponent } from './views/login/login.component';
import { FrontComponent } from './views/front/front.component';
import { DetallesEntradaComponent } from './views/detalles-entrada/detalles-entrada.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes:Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'front', component: FrontComponent, children:[
    {path: 'listado', component: ListadoComponent},
    {path: 'nosotros', component: AcercaDeComponent},
    {path: 'detalle-entrada/:id', component: DetallesEntradaComponent},
  ]},
  {path: 'dashboard', loadChildren: ()=>import('src/app/views/dashboard/dashboard.module').then((module)=>module.DashboardModule), canActivate:[AuthGuard]},
  {path: '', redirectTo: 'front/listado', pathMatch: 'full'}, //'full' completa la ruta al nav
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
