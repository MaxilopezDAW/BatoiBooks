import Module from './module.class.js';

export default class Modules {
  constructor() {
    this.data = [];
  }

  populate(datos) {
    this.data = datos.map(modulo => new Module(modulo.code, modulo.cliteral, modulo.vliteral, modulo.courseId));
  }

  toString() {
    let texto = `Modules: ${this.data.length}`;
    this.data.forEach(modulo => {
      texto += `\n${modulo.toString()}`;
    });

    return texto;
  }

  getModuleByCode(moduleCode) {
    const modulo = this.data.find((modulo) => modulo.code === moduleCode)
    if (!modulo) {
      throw new Error(`No existe el módulo con code ${moduleCode}`)
    }
    return modulo
  }
}