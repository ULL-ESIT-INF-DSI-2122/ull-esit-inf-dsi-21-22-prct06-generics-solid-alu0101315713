import {Fighter, efecto} from './fighter';

export type poder = 'Destructor';
/**
  * Clase Marvel
*/
export class Marvel extends Fighter {
  /**
  * Constructor de la clase Marvel
  * @param nombre nombre del luchador de Marvel
  * @param peso peso del luchador de Marvel
  * @param altura altura del luchador de Marvel
  * @param datos datos de ataque, velocidad, defensa y hp
  * @param universo universo al que pertenece luchador de Marvel
  * @param frase frase que dice el luchador de Marvel
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'Guerrero', salud, ataque, defensa, velocidad,
        'Marvel', frase);
  }
  getEfecto(luchador: Marvel): efecto {
    return 'Eficaz';
  }
}
