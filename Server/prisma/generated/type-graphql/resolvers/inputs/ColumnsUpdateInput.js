"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const TablesUpdateOneRequiredWithoutColumnNestedInput_1 = require("../inputs/TablesUpdateOneRequiredWithoutColumnNestedInput");
let ColumnsUpdateInput = class ColumnsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ColumnsUpdateInput.prototype, "constraint", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateOneRequiredWithoutColumnNestedInput_1.TablesUpdateOneRequiredWithoutColumnNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesUpdateOneRequiredWithoutColumnNestedInput_1.TablesUpdateOneRequiredWithoutColumnNestedInput)
], ColumnsUpdateInput.prototype, "table", void 0);
ColumnsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsUpdateInput", {
        isAbstract: true
    })
], ColumnsUpdateInput);
exports.ColumnsUpdateInput = ColumnsUpdateInput;
