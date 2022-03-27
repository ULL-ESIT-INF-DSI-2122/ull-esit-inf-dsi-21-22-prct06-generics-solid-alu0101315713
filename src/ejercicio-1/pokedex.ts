export class Pokedex<T> {
  public datos: T[] = [];

  constructor() {}

  guardar(...luchadores: T[]) {
    luchadores.forEach((entrada) => {
      this.datos.push(entrada);
    });
  }

  eliminar(...luchadores: T[]): void {
    let contador = 0;
    luchadores.forEach((luchador) => {
      contador = 0;
      this.datos.forEach((luchadoresguardados) => {
        contador++;
        if (luchador === luchadoresguardados) {
          this.datos.splice(contador, 1);
        }
      });
    });
  }
}
