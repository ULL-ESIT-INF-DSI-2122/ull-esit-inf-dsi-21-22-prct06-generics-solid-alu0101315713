import {Fighter, efecto} from './fighter';

export type poder = 'Poderoso' | 'Agil';
/**
  * Clase DC
*/
export class DC extends Fighter {
  /**
  * Constructor de la clase DC
  * @param nombre nombre del luchador de DC
  * @param peso peso del luchador de DC
  * @param altura altura del luchador de DC
  * @param datos datos de ataque, velocidad, defensa y hp
  * @param universo universo al que pertenece luchador de DC
  * @param frase frase que dice el luchador de DC
  */
  constructor(protected nombre: string, protected altura: number,
    protected peso: number, protected tipo: poder, protected salud: number,
    protected ataque: number, protected defensa: number,
    protected velocidad: number, frase?: string) {
    super(nombre, altura, peso, 'Guerrero', salud, ataque, defensa, velocidad,
        'DC Comics', frase);
  }
  getEfecto(luchador: DC): efecto {
    return 'Normal';
  }
}
