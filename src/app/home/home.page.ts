import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonSelect,
  IonSelectOption
} from '@ionic/angular';

// Importamos los componentes de las figuras geométricas.
import { CirculoComponent } from '../componentes/circulo/circulo.component';
import { TrianguloComponent } from '../componentes/triangulo/triangulo.component';

/**
 * Página principal de la aplicación.
 *
 * Permite seleccionar una figura geométrica
 * y mostrar el componente correspondiente.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    TrianguloComponent
  ]
})
export class HomePage {

  /**
   * Almacena la figura seleccionada por el usuario.
   *
   * Su valor se actualiza mediante el evento ionChange
   * del selector ubicado en home.page.html.
   *
   * Angular utiliza esta variable junto con *ngIf
   * para mostrar el componente correspondiente.
   */
  figuraSeleccionada: string = '';

  constructor() {}

}