import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';

import { ComponentesModule } from '../componentes/componentes.module';

import { TranslateModule } from '@ngx-translate/core';


import { PaginasComponent } from './paginas.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { TerminosComponent } from './terminos/terminos.component';

@NgModule({
  declarations: [
    PaginasComponent,
    InicioComponent,
    AcercaComponent,
    TerminosComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ComponentesModule,
    TranslateModule
  ]
})
export class PaginasModule { }
