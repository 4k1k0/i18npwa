import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule
  ]
})
export class LoginModule { }
