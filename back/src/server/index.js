"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//console.log("hola");
const server = (0, express_1.default)();
server.listen(8080, () => {
    console.log("server listening");
});
