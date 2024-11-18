"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsUpdateManyWithoutTableNestedInput_1 = require("../inputs/ColumnsUpdateManyWithoutTableNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TablesUpdateWithoutProjectInput = class TablesUpdateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TablesUpdateWithoutProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsUpdateManyWithoutTableNestedInput_1.ColumnsUpdateManyWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsUpdateManyWithoutTableNestedInput_1.ColumnsUpdateManyWithoutTableNestedInput)
], TablesUpdateWithoutProjectInput.prototype, "column", void 0);
TablesUpdateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateWithoutProjectInput", {
        isAbstract: true
    })
], TablesUpdateWithoutProjectInput);
exports.TablesUpdateWithoutProjectInput = TablesUpdateWithoutProjectInput;
