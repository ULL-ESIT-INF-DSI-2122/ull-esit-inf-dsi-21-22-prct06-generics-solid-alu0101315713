import {Fighter, efecto} from './fighter';

export type poder = 'Lado oscuro' | 'Jedi';
/**
  * Clase StarWars
*/
export class StarWars extends Fighter {
  /**
  * Constructor de la clase StarWars
  * @param nombre nombre del luchador de StarWars
  * @param peso peso del luchador de StarWars
  * @param altura altura del luchador de StarWars
  * @param datos datos de ataque, velocidad, defensa y hp
  * @param universo universo al que pertenece luchador de StarWars
  * @param frase frase que dice el luchador de StarWars
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'Magia', salud, ataque, defensa, velocidad, 'Star Wars', frase);
  }
  getEfecto(luchador: StarWars): efecto {
    return 'Normal';
  }
}
