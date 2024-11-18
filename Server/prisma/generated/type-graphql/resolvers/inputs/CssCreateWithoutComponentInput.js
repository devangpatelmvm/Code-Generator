"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssCreateWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CssCreateWithoutComponentInput = class CssCreateWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssCreateWithoutComponentInput.prototype, "content", void 0);
CssCreateWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssCreateWithoutComponentInput", {
        isAbstract: true
    })
], CssCreateWithoutComponentInput);
exports.CssCreateWithoutComponentInput = CssCreateWithoutComponentInput;
