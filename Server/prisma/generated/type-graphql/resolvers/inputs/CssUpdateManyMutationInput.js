"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let CssUpdateManyMutationInput = class CssUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CssUpdateManyMutationInput.prototype, "content", void 0);
CssUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssUpdateManyMutationInput", {
        isAbstract: true
    })
], CssUpdateManyMutationInput);
exports.CssUpdateManyMutationInput = CssUpdateManyMutationInput;
