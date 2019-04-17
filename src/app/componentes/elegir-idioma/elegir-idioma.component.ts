import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-elegir-idioma',
  templateUrl: './elegir-idioma.component.html',
  styleUrls: ['./elegir-idioma.component.scss']
})
export class ElegirIdiomaComponent implements OnInit {

  idioma: string;

  constructor(
    private translate: TranslateService
  ) {}

  ngOnInit() {
    if ( localStorage.getItem('language') ) {
      this.idioma = localStorage.getItem('language');
    }
  }

  setIdioma( idioma: string ) {
    if ( this.idioma === idioma ) {
      return;
    }
    this.idioma = idioma;
    this.translate.use(idioma);
    localStorage.setItem('language', idioma);
  }

}
