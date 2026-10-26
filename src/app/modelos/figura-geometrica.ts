/**
 * Clase abstracta que representa una figura geométrica.
 *
 * Esta clase sirve como base para las demás figuras
 * y permite aplicar el concepto de herencia.
 */
export abstract class FiguraGeometrica {

  // Almacena el nombre de la figura geométrica.
  private nombre: string;

  /**
   * Constructor de la clase.
   * @param nombre Nombre de la figura geométrica.
   */
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * Método abstracto para calcular el perímetro.
   *
   * Cada clase hija debe implementar su propia
   * fórmula para calcular el perímetro.
   */
  public abstract calcularPerimetro(): number;

}