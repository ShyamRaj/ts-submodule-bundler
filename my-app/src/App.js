"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const Fruits_js_1 = __importDefault(require("./components/Fruits.js"));
function App() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", children: (0, jsx_runtime_1.jsxs)("header", { className: "App-header", children: [(0, jsx_runtime_1.jsx)(Fruits_js_1.default, { name: "a" }), (0, jsx_runtime_1.jsx)(Fruits_js_1.default, { name: "b" })] }) }));
}
exports.default = App;
