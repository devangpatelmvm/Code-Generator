"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUpdateWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let CssUpdateWithoutComponentInput = class CssUpdateWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CssUpdateWithoutComponentInput.prototype, "content", void 0);
CssUpdateWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssUpdateWithoutComponentInput", {
        isAbstract: true
    })
], CssUpdateWithoutComponentInput);
exports.CssUpdateWithoutComponentInput = CssUpdateWithoutComponentInput;
