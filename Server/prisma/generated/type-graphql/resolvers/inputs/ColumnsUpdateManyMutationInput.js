"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let ColumnsUpdateManyMutationInput = class ColumnsUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateManyMutationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateManyMutationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateManyMutationInput.prototype, "constraint", void 0);
ColumnsUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsUpdateManyMutationInput", {
        isAbstract: true
    })
], ColumnsUpdateManyMutationInput);
exports.ColumnsUpdateManyMutationInput = ColumnsUpdateManyMutationInput;
