let Paises = {}
let Id = {
    cont: 0
}

let Respuesta = {
    codigo: 200,
    error: false,
    mensaje: ''
}

class Pais {
    constructor(nombre, codigo_pais) {
        this.nombre = nombre
        this.codigo_pais = codigo_pais
        this.Id = Id.cont
    }
}

const nuevoPais = function (nombre, codigo_pais) {
    Paises[nombre] = new Pais (nombre, codigo_pais)
    Id++
}

const buscarPais = function (nombre) {
    if (Paises.hasOwnProperty(nombre)){
        return true
    }else {
        return false
    }

}

const borrarPais = function (nombre) {
    if (buscarPais(nombre)){
        delete Paises[nombre]
        return true
    }else {
        return false
    }
    
}

module.exports = {Paises, Respuesta, nuevoPais, borrarPais}