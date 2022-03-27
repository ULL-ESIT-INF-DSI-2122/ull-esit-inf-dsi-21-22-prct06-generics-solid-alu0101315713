import {Fighter, efecto} from './fighter';

export type poder = 'Poderoso';
/**
  * Clase DragonBall
*/
export class DragonBall extends Fighter {
  /**
  * Constructor de la clase DragonBall
  * @param nombre nombre del luchador de DragonBall
  * @param peso peso del luchador de DragonBall
  * @param altura altura del luchador de DragonBall
  * @param datos datos de ataque, velocidad, defensa y hp
  * @param universo universo al que pertenece luchador de DragonBall
  * @param frase frase que dice el luchador de DragonBall
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'Magia', salud, ataque, defensa, velocidad,
        'Dragon Ball', frase);
  }
  getEfecto(luchador: DragonBall): efecto {
    return 'Eficaz';
  }
}
