import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ElegirIdiomaComponent } from './elegir-idioma/elegir-idioma.component';

@NgModule({
  declarations: [
    CabeceraComponent,
    FooterComponent,
    ElegirIdiomaComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    CabeceraComponent,
    FooterComponent,
    ElegirIdiomaComponent
  ],
})
export class ComponentesModule { }
