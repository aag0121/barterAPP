"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UsuarioService = (function () {
    function UsuarioService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3002/api/';
    }
    //Primero se define previamente aqui, despues en el component que sea
    UsuarioService.prototype.getUsuarios = function () {
        return this._http.get(this.url + 'usuarios').map(function (res) { return res.json(); });
    };
    //Informacion de un usuario
    UsuarioService.prototype.getUsuario = function (id) {
        return this._http.get(this.url + 'usuario/' + id).map(function (res) { return res.json(); });
    };
    //Añadir un usuario a la db
    UsuarioService.prototype.addUsuario = function (usuario) {
        var json = JSON.stringify(usuario);
        var params = json;
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        return this._http.post(this.url + 'usuario', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map