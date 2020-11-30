"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_wrapper_class_1 = __importDefault(require("jquery-wrapper-class"));
class Element extends jquery_wrapper_class_1.default {
    constructor(selector) {
        super(selector);
    }
}
exports.default = Element;
Element.window = new Element(window);
Element.document = new Element(document);
Element.body = new Element(document.body);
