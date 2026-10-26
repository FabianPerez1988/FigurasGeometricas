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

import { TrianguloEscaleno } from '../../modelos/triangulo-esc';

/**
 * Componente encargado de mostrar el formulario
 * y calcular el perímetro de un triángulo.
 */
@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
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
export class TrianguloComponent implements OnInit {

  // Medidas ingresadas por el usuario.
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;

  // Resultado del cálculo. Inicialmente permanece oculto.
  perimetro: number | null = null;

  constructor() {}

  ngOnInit() {}

  /**
   * Calcula el perímetro cuando el usuario presiona el botón.
   *
   * Comprueba que los tres lados sean mayores que cero
   * y utiliza la clase TrianguloEscaleno para sumar
   * las medidas ingresadas.
   */
  calcularPerimetro() {

    if (
      this.ladoA !== null && this.ladoA > 0 &&
      this.ladoB !== null && this.ladoB > 0 &&
      this.ladoC !== null && this.ladoC > 0
    ) {

      // Crea un objeto con las medidas ingresadas.
      const triangulo = new TrianguloEscaleno(
        Number(this.ladoA),
        Number(this.ladoB),
        Number(this.ladoC)
      );

      // Ejecuta el método que calcula el perímetro.
      this.perimetro = triangulo.calcularPerimetro();

    } else {

      // Si alguna medida no es válida, oculta el resultado.
      this.perimetro = null;

    }

  }

}