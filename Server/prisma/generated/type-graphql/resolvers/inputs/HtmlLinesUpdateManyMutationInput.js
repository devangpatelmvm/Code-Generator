"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let HtmlLinesUpdateManyMutationInput = class HtmlLinesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], HtmlLinesUpdateManyMutationInput.prototype, "line", void 0);
HtmlLinesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesUpdateManyMutationInput", {
        isAbstract: true
    })
], HtmlLinesUpdateManyMutationInput);
exports.HtmlLinesUpdateManyMutationInput = HtmlLinesUpdateManyMutationInput;
