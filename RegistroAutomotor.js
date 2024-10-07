"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAut = void 0;
var RegistroAut = /** @class */ (function () {
    function RegistroAut(listaAutos, listaCamiones, listaMotos) {
        this.listaAutos = [];
        this.listaCamiones = [];
        this.listaMotos = [];
    }
    //Getters
    RegistroAut.prototype.getlistaAutos = function () {
        return this.listaAutos;
    };
    RegistroAut.prototype.getlistaCamiones = function () {
        return this.listaCamiones;
    };
    RegistroAut.prototype.getlistaMotos = function () {
        return this.listaMotos;
    };
    //Setters
    RegistroAut.prototype.SetListaAutos = function (auto) {
        this.listaAutos = auto;
    };
    RegistroAut.prototype.SetListaCamiones = function (camion) {
        this.listaCamiones = camion;
    };
    RegistroAut.prototype.SetListaMotos = function (moto) {
        this.listaMotos = moto;
    };
    //Agregar vehiculos a la listas
    RegistroAut.prototype.agregarAutos = function (auto) {
        this.listaAutos.push(auto);
    };
    RegistroAut.prototype.agregarCamiones = function (camion) {
        this.listaCamiones.push(camion);
    };
    RegistroAut.prototype.agregarMotos = function (moto) {
        this.listaMotos.push(moto);
    };
    //Eliminar Vehiculos de la lista
    RegistroAut.prototype.eliminarAuto = function (patente) {
        this.listaAutos = this.listaAutos.filter(function (auto) { return auto.getPatente() !== patente; });
    };
    RegistroAut.prototype.eliminarCamion = function (patente) {
        this.listaCamiones = this.listaCamiones.filter(function (camion) { return camion.getPatente() !== patente; });
    };
    RegistroAut.prototype.eliminarMotos = function (patente) {
        this.listaMotos = this.listaMotos.filter(function (moto) { return moto.getPatente() !== patente; });
    };
    //Modificar vehiculos 
    RegistroAut.prototype.modificarAuto = function (patente, nuevoAuto) {
        var index = this.listaAutos.findIndex(function (auto) { return auto.getPatente() === patente; });
        if (index !== -1) {
            this.listaAutos[index] = nuevoAuto;
        }
    };
    RegistroAut.prototype.modificarCamion = function (patente, nuevoCamion) {
        var index = this.listaCamiones.findIndex(function (camion) { return camion.getPatente() === patente; });
        if (index !== -1) {
            this.listaCamiones[index] = nuevoCamion;
        }
    };
    RegistroAut.prototype.modificarMoto = function (patente, nuevaMoto) {
        var index = this.listaMotos.findIndex(function (moto) { return moto.getPatente() === patente; });
        if (index !== -1) {
            this.listaMotos[index] = nuevaMoto;
        }
    };
    return RegistroAut;
}());
exports.RegistroAut = RegistroAut;
