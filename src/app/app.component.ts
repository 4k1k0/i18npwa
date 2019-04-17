import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idiomaspwa';

  constructor(
    private translate: TranslateService
  ) {
    let language = 'en';
    if ( localStorage.getItem('language') ) {
      language = localStorage.getItem('language');
    }
    translate.setDefaultLang(language);
    translate.use(language);
  }

}