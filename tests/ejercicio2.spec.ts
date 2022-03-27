import 'mocha';
import {expect} from 'chai';
// import {Series} from '../src/ejercicio-2/series';
import {Peliculas} from '../src/ejercicio-2/pelis';
/* import {Documentales} from '../src/ejercicio-2/doc';
import {ColeccionSeries} from '../src/ejercicio-2/cols';
import {ColeccionPeliculas} from '../src/ejercicio-2/colp';
import {ColeccionDocumentales} from '../src/ejercicio-2/cold';*/

const peli1 = new Peliculas('El gigante de hierro', 'Brad Bird', ['Vin Diesel', 'Jennifer Aniston', 'Eli Marienthal'], ['Drama', 'Comedia', 'Animación'], 1999);
const peli2 = new Peliculas('Titanic', 'James Cameron', ['Kate Winsconst', 'Leonardo DiCaprio'], ['Romance', 'Drama', 'Histórico'], 1997);
const peli3 = new Peliculas('UP', 'Pete Docter', ['Edward Asner', 'Christopher Plummer'], ['Animación'], 2009);
/*
const serie1 = new Series('Vis a Vis', 'Daniel Écija', ['Suspense', 'Policiaco', 'Drama', 'Thriller'], 1996);
const serie2 = new Series('Fullmetal Alchemist', 'Hiromu Arakawa', ['Drama', 'Fantasía', 'Aventura'], 2001);
const serie3 = new Series('The Legend of Vox Machina', 'Matthew Mercer', ['Acción', 'Fantasía', 'Aventura'], 2022);

const doc1 = new Documentales('Dinosaurios', 'Robert Guenette', ['Naturaleza'], 2013);
const doc2 = new Documentales('Blackfish', 'Gabriela Cowperthwaite', ['Naturaleza'], 1985);

const colseries = new ColeccionSeries([serie1, serie2, serie3]);
const colpeli = new ColeccionPeliculas([peli2, peli1, peli3]);
const coldoc = new ColeccionDocumentales([doc1, doc2]);
*/
describe('Clase Películas', () => {
  it('Nombre de la pelicula', () => {
    return expect(peli1.getNombre()).to.be.equal('El gigante de hierro');
  });
  it('Nombre del director de la pelicula', () => {
    return expect(peli1.getAutor()).to.be.equal('Brad Bird');
  });
  it('Actores de la pelicula', () => {
    return expect(peli3.getActores()).to.be.eql(['Edward Asner', 'Christopher Plummer']);
  });
  it('Géneros de la pelicula', () => {
    return expect(peli3.getGenero()).to.be.eql(['Animación']);
  });
  it('Año de la pelicula', () => {
    return expect(peli3.getAño()).to.be.equal(2009);
  });
});
/*
describe('Clase Series', () => {
  it('Nombre de la serie', () => {
    return expect(serie2.getNombre()).to.be.equal('Fullmetal Alchemist');
  });
  it('Nombre del autor de la serie', () => {
    return expect(serie2.getAutor()).to.be.equal('Hiromu Arakawa');
  });
  it('Géneros de la serie', () => {
    return expect(serie3.getGenero()).to.be.eql(['Acción', 'Fantasía', 'Aventura']);
  });
  it('Año de la serie', () => {
    return expect(serie3.getAño()).to.be.equal(2022);
  });
});

describe('Clase Documentales', () => {
  it('Nombre del documental', () => {
    return expect(doc1.getNombre()).to.be.equal('Dinosaurios');
  });
  it('Nombre del director del documental', () => {
    return expect(doc1.getDirector()).to.be.equal('Robert Guenette');
  });
  it('Géneros del documental', () => {
    return expect(doc1.getGenero()).to.be.eql(['Naturaleza']);
  });
  it('Año del documental', () => {
    return expect(doc1.getAño()).to.be.equal(2013);
  });
});

describe('Colección de series', () => {
  it('Serie encontrada por nombre', () => {
    return expect(colseries.getNombreVideo('Vis a Vis')).to.be.eql(undefined);
  });
  it('Serie encontrada por año', () => {
    return expect(colseries.getAñoVideo(2001)).to.be.eql(undefined);
  });
  it('Serie encontrada por autor', () => {
    return expect(colseries.getAutorVideo('Hiromu Arakawa')).to.be.eql(undefined);
  });
});

describe('Colección de peliculas', () => {
  it('Pelicula encontrada por el nombre', () => {
    return expect(colpeli.getNombreVideo('UP')).to.be.eql(undefined);
  });
  it('Pelicula encontrada por el año', () => {
    return expect(colpeli.getAñoVideo(2009)).to.be.eql(undefined);
  });
  it('Pelicula encontrada por el director', () => {
    return expect(colpeli.getAutorVideo('Brad Bird')).to.be.eql(undefined);
  });
});

describe('Colección de documentales de la plataforma', () => {
  it('Documental encontrado por nombre', () => {
    return expect(coldoc.getNombreVideo('Blackfish')).to.be.eql(undefined);
  });
  it('Documental encontrado por el año', () => {
    return expect(coldoc.getAñoVideo(2013)).to.be.eql(undefined);
  });
  it('cDocumental encontrado por el director', () => {
    return expect(coldoc.getAutorVideo('Gabriela Cowperthwaite')).to.be.eql(undefined);
  });
});
*/