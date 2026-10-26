import { FiguraGeometrica } from './figura-geometrica';

/**
 * Clase que representa un círculo.
 *
 * Hereda de FiguraGeometrica e implementa
 * el cálculo de su perímetro.
 */
export class Circulo extends FiguraGeometrica {

  // Almacena el radio del círculo.
  private radio: number;

  /**
   * Constructor de la clase Circulo.
   * @param radio Radio del círculo en centímetros.
   */
  constructor(radio: number) {

    // Llama al constructor de la clase padre.
    super('Círculo');

    this.radio = radio;
  }

  /**
   * Calcula el perímetro del círculo.
   *
   * Fórmula: P = 2 × π × radio
   *
   * @returns Perímetro del círculo en centímetros.
   */
  public calcularPerimetro(): number {

    return 2 * Math.PI * this.radio;

  }

}