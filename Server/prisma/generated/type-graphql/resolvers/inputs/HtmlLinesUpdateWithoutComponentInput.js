"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesUpdateWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let HtmlLinesUpdateWithoutComponentInput = class HtmlLinesUpdateWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], HtmlLinesUpdateWithoutComponentInput.prototype, "line", void 0);
HtmlLinesUpdateWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesUpdateWithoutComponentInput", {
        isAbstract: true
    })
], HtmlLinesUpdateWithoutComponentInput);
exports.HtmlLinesUpdateWithoutComponentInput = HtmlLinesUpdateWithoutComponentInput;
