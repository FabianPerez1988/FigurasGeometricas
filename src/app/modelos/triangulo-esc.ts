import { FiguraGeometrica } from './figura-geometrica';

/**
 * Clase que representa un triángulo escaleno.
 *
 * Hereda de FiguraGeometrica y permite calcular
 * el perímetro mediante la suma de sus tres lados.
 */
export class TrianguloEscaleno extends FiguraGeometrica {

  // Atributos privados que almacenan las medidas del triángulo.
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  /**
   * Constructor de la clase TrianguloEscaleno.
   *
   * @param ladoA Medida del primer lado en centímetros.
   * @param ladoB Medida del segundo lado en centímetros.
   * @param ladoC Medida del tercer lado en centímetros.
   */
  constructor(ladoA: number, ladoB: number, ladoC: number) {

    // Llama al constructor de la clase padre.
    super('Triángulo Escaleno');

    // Asigna las medidas recibidas a los atributos privados.
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  /**
   * Calcula el perímetro del triángulo.
   *
   * Fórmula: P = ladoA + ladoB + ladoC
   *
   * @returns Perímetro del triángulo en centímetros.
   */
  public calcularPerimetro(): number {

    return this.ladoA + this.ladoB + this.ladoC;

  }

}