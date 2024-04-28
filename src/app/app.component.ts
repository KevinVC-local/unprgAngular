import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'evaluation-model';
  public loadingTable = true;

  public iterador = [
    {
      name: 'nombre 01',
      lastName: 'las name 01',
      year: 2000
    },
    {
      name: 'nombre 02',
      lastName: 'las name 02',
      year: 2002
    },
    {
      name: 'nombre 03',
      lastName: 'las name 03',
      year: 2002
    },
    {
      name: 'nombre 04',
      lastName: 'las name 04',
      year: 2003
    },
  ]
}
