"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    //Getters 
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    //Setters
    Camion.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Camion.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camion.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Camion;
}());
exports.Camion = Camion;
