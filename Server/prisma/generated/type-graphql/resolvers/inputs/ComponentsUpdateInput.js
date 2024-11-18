"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssUpdateManyWithoutComponentNestedInput_1 = require("../inputs/CssUpdateManyWithoutComponentNestedInput");
const HtmlLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput");
const ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1 = require("../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TsLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/TsLinesUpdateManyWithoutComponentNestedInput");
let ComponentsUpdateInput = class ComponentsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComponentsUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateInput.prototype, "css", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput)
], ComponentsUpdateInput.prototype, "project", void 0);
ComponentsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateInput", {
        isAbstract: true
    })
], ComponentsUpdateInput);
exports.ComponentsUpdateInput = ComponentsUpdateInput;
