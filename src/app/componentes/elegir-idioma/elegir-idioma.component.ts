import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-elegir-idioma',
  templateUrl: './elegir-idioma.component.html',
  styleUrls: ['./elegir-idioma.component.scss']
})
export class ElegirIdiomaComponent implements OnInit {

  idioma = 'en';

  constructor(
    private translate: TranslateService
  ) {}

  ngOnInit() {
  }

  setIdioma( idioma: string ) {
    if ( this.idioma === idioma ) return;
    this.idioma = idioma;
    this.translate.use(idioma);
  }

}
