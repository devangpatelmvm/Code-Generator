"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateOneRequiredWithoutTsLineNestedInput_1 = require("../inputs/ComponentsUpdateOneRequiredWithoutTsLineNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TsLinesUpdateInput = class TsLinesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TsLinesUpdateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateOneRequiredWithoutTsLineNestedInput_1.ComponentsUpdateOneRequiredWithoutTsLineNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateOneRequiredWithoutTsLineNestedInput_1.ComponentsUpdateOneRequiredWithoutTsLineNestedInput)
], TsLinesUpdateInput.prototype, "component", void 0);
TsLinesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesUpdateInput", {
        isAbstract: true
    })
], TsLinesUpdateInput);
exports.TsLinesUpdateInput = TsLinesUpdateInput;
