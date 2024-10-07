"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Autos_1 = require("./Autos");
var Camiones_1 = require("./Camiones");
var Motos_1 = require("./Motos");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
//crear vehiculos
var auto1 = new Autos_1.Auto("Ford Fiesta", 2013, "MFM447");
var auto2 = new Autos_1.Auto("Renault Clio", 2011, "KEY413");
var camion1 = new Camiones_1.Camion("Scania", 2022, "ABF230");
var camion2 = new Camiones_1.Camion("Mercedes-Benz", 2018, "ZMX342");
var moto1 = new Motos_1.Moto("Motomel", 2023, "ABV335");
var moto2 = new Motos_1.Moto("Gilera", 2020, "XXS566");
//Nuevos vehiculos p/modificar
var nuevoAuto = new Autos_1.Auto("Fiat Palio", 2019, "RSR332");
var nuevoCamion = new Camiones_1.Camion("Volvo", 2012, "FRE223");
var nuevaMoto = new Motos_1.Moto("Smash", 2009, "GTR445");
var registro = new RegistroAutomotor_1.RegistroAut([auto1, auto2], [camion1, camion2], [moto1, moto2]);
registro.agregarAutos(auto1);
registro.agregarAutos(auto2);
console.log(registro.getlistaAutos);
//registro.modificarAuto("RSR332", nuevoAuto);
//console.log(registro.SetListaAutos);
//registro.eliminarAuto("KEY413");
//console.log(registro.SetListaAutos);
//Modificar Vehiculos
registro.modificarCamion("FRE223", nuevoCamion);
registro.modificarMoto("GTR445", nuevaMoto);
