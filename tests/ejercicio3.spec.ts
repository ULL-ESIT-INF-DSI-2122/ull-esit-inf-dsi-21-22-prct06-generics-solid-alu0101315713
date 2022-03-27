import 'mocha';
import {expect} from 'chai';
import {Mensaje} from '../src/ejercicio-3/msj';
import {Clave} from '../src/ejercicio-3/clave';
// import {Cifrado} from '../src/ejercicio-3/cifrado';*/
const msj = new Mensaje('HOLAESTOESUNAPRUEBA');
const clave = new Clave('CLAVE');
// const c = new Cifrado(msj, clave);
describe('Clase Mensaje', () => {
  it('Mensaje a encriptar', () => {
    return expect(msj.getMensaje()).to.be.equal('HOLAESTOESUNAPRUEBA');
  });
  it('Tamaño del mensaje', () => {
    return expect(msj.getTamañoMensaje()).to.be.equal(19);
  });
  it('Cantidad de caracteres del mensaje', () => {
    return expect(msj.getCarac(17)).to.be.equal('B');
  });
});
describe('Clase Clave', () => {
  it('Clave a encriptar', () => {
    return expect(clave.getClave()).to.be.equal('CLAVE');
  });
  it('Tamaño de clave', () => {
    return expect(clave.getTamañoClave()).to.be.equal(5);
  });
  it('Caracteres de clave', () => {
    return expect(clave.getCarac(4)).to.be.equal('E');
  });
});
/*
describe('Clase Cifrado César', () => {
  it('Mensaje a encriptar', () => {
    return expect(c.getMsj()).to.be.equal(Object (msj));
  });
  it('Clave para encriptar', () => {
    return expect(c.getClave()).to.be.equal(clave);
  });
  it('Alfabeto', () => {
    return expect(c.getAlfabeto()).to.be.equal(undefined);
  });
  it('Clave repetida', () => {
    return expect(c.generarClave(msj, 'CLAVE')).to.be.equal('CLAVECLAVE');
  });
  it('Mensaje encriptado', () => {
    return expect(c.encriptar(msj, clave)).to.be.equal(' ');
  });
  it('Mensaje desencriptado', () => {
    return expect(c.desencriptar(msj, clave)).to.be.equal('\u0000');
  });
});*/
