"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    //Getters 
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    //Setters
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Auto;
}());
exports.Auto = Auto;
