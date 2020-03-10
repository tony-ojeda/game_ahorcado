import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  palabra = 'CUA';
  palabraOculta = '';
  letras = ['A','B','C','D','E','F','G','G','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V',
'T','U','V','W','X','Y','Z'];
  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }
}
