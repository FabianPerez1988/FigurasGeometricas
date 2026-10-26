import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonImg
} from '@ionic/angular';

import { Circulo } from '../../modelos/circulo';

/**
 * Componente encargado de mostrar el formulario
 * y calcular el perímetro de un círculo.
 */
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonImg
  ]
})
export class CirculoComponent implements OnInit {

  // Radio ingresado por el usuario en el formulario.
  radio: number | null = null;

  // Resultado del cálculo. Inicialmente no se muestra.
  perimetro: number | null = null;

  constructor() {}

  ngOnInit() {}

  /**
   * Calcula el perímetro cuando el usuario presiona el botón.
   *
   * Verifica que el radio sea mayor que cero y utiliza
   * la clase Circulo para realizar el cálculo.
   */
  calcularPerimetro() {

    if (this.radio !== null && this.radio > 0) {

      // Crea un objeto Circulo con el radio ingresado.
      const circulo = new Circulo(Number(this.radio));

      // Obtiene el perímetro utilizando el método de la clase.
      this.perimetro = circulo.calcularPerimetro();

    } else {

      // Si el radio no es válido, no muestra un resultado.
      this.perimetro = null;

    }

  }

}