import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { TerminosComponent } from './paginas/terminos/terminos.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'acerca',
    component: AcercaComponent
  },
  {
    path: 'terminos',
    component: TerminosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
