"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateOneRequiredWithoutCssNestedInput_1 = require("../inputs/ComponentsUpdateOneRequiredWithoutCssNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let CssUpdateInput = class CssUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CssUpdateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateOneRequiredWithoutCssNestedInput_1.ComponentsUpdateOneRequiredWithoutCssNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateOneRequiredWithoutCssNestedInput_1.ComponentsUpdateOneRequiredWithoutCssNestedInput)
], CssUpdateInput.prototype, "component", void 0);
CssUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssUpdateInput", {
        isAbstract: true
    })
], CssUpdateInput);
exports.CssUpdateInput = CssUpdateInput;
