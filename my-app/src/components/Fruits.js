"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fruits_1 = __importDefault(require("@a/core-lib/fruits"));
const Fruits = ({ name }) => {
    console.log(fruits_1.default, name);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("h1", { children: fruits_1.default[name] }) }));
};
exports.default = Fruits;
