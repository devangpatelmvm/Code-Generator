"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateOneRequiredWithoutHtmllineNestedInput_1 = require("../inputs/ComponentsUpdateOneRequiredWithoutHtmllineNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let HtmlLinesUpdateInput = class HtmlLinesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], HtmlLinesUpdateInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateOneRequiredWithoutHtmllineNestedInput_1.ComponentsUpdateOneRequiredWithoutHtmllineNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateOneRequiredWithoutHtmllineNestedInput_1.ComponentsUpdateOneRequiredWithoutHtmllineNestedInput)
], HtmlLinesUpdateInput.prototype, "component", void 0);
HtmlLinesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesUpdateInput", {
        isAbstract: true
    })
], HtmlLinesUpdateInput);
exports.HtmlLinesUpdateInput = HtmlLinesUpdateInput;
