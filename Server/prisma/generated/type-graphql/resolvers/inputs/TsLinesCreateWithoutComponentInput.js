"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesCreateWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLinesCreateWithoutComponentInput = class TsLinesCreateWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesCreateWithoutComponentInput.prototype, "line", void 0);
TsLinesCreateWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesCreateWithoutComponentInput", {
        isAbstract: true
    })
], TsLinesCreateWithoutComponentInput);
exports.TsLinesCreateWithoutComponentInput = TsLinesCreateWithoutComponentInput;
