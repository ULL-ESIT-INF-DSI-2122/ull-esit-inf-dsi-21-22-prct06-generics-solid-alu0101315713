export type efecto = 'Eficaz' | 'No Eficaz' | 'Normal';

export abstract class Fighter {
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: string,
    protected salud: number, protected ataque: number,
    protected defensa: number, protected velocidad: number,
    protected universo: string, protected frase?: string) {}
  /**
   * Nombre del luchador
  */
  getNombre() {
    return this.nombre;
  }
  /**
    * Altura del luchador
   */
  getAltura() {
    return this.altura;
  }
  /**
   * Peso del luchador
  */
  getPeso() {
    return this.peso;
  }
  /**
   * Tipo del luchador
   */
  getTipoluchador() {
    return this.tipo;
  }
  /**
  * salud del luchador
  */
  getSalud() {
    return this.salud;
  }
  /**
   * Ataque del luchador
   */
  getAtaque() {
    return this.ataque;
  }
  /**
   * Defensa del luchador
   */
  getDefensa() {
    return this.defensa;
  }
  /**
   * Velocidad del luchador
   */
  getVelocidad() {
    return this.velocidad;
  }

  getUniverso() {
    return this.universo;
  }
  getFrase() {
    return this.frase;
  }

  setSalud(valor: number) {
    this.salud = valor;
  }
  abstract getEfecto(luchador: any): efecto;
}
