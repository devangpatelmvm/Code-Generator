"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesCreateWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HtmlLinesCreateWithoutComponentInput = class HtmlLinesCreateWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesCreateWithoutComponentInput.prototype, "line", void 0);
HtmlLinesCreateWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesCreateWithoutComponentInput", {
        isAbstract: true
    })
], HtmlLinesCreateWithoutComponentInput);
exports.HtmlLinesCreateWithoutComponentInput = HtmlLinesCreateWithoutComponentInput;
