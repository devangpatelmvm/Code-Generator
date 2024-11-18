"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesUpdateWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TsLinesUpdateWithoutComponentInput = class TsLinesUpdateWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TsLinesUpdateWithoutComponentInput.prototype, "line", void 0);
TsLinesUpdateWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesUpdateWithoutComponentInput", {
        isAbstract: true
    })
], TsLinesUpdateWithoutComponentInput);
exports.TsLinesUpdateWithoutComponentInput = TsLinesUpdateWithoutComponentInput;
