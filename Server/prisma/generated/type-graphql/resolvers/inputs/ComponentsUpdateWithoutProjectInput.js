"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssUpdateManyWithoutComponentNestedInput_1 = require("../inputs/CssUpdateManyWithoutComponentNestedInput");
const HtmlLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TsLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/TsLinesUpdateManyWithoutComponentNestedInput");
let ComponentsUpdateWithoutProjectInput = class ComponentsUpdateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComponentsUpdateWithoutProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutProjectInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutProjectInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutProjectInput.prototype, "css", void 0);
ComponentsUpdateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateWithoutProjectInput", {
        isAbstract: true
    })
], ComponentsUpdateWithoutProjectInput);
exports.ComponentsUpdateWithoutProjectInput = ComponentsUpdateWithoutProjectInput;
