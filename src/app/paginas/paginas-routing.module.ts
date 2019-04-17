import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PaginasComponent } from './paginas.component';

const routes: Routes = [
  {
    path: '',
    component: PaginasComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'about',
        component: AcercaComponent
      },
      {
        path: 'terms',
        component: TerminosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
