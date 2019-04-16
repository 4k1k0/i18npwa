import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
  }

}
