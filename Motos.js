"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    //Getters 
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    //Setters
    Moto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Moto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Moto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Moto;
}());
exports.Moto = Moto;
