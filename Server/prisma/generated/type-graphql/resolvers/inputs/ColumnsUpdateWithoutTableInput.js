"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsUpdateWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let ColumnsUpdateWithoutTableInput = class ColumnsUpdateWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateWithoutTableInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateWithoutTableInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateWithoutTableInput.prototype, "constraint", void 0);
ColumnsUpdateWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsUpdateWithoutTableInput", {
        isAbstract: true
    })
], ColumnsUpdateWithoutTableInput);
exports.ColumnsUpdateWithoutTableInput = ColumnsUpdateWithoutTableInput;
