"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateWithoutHtmllineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssUpdateManyWithoutComponentNestedInput_1 = require("../inputs/CssUpdateManyWithoutComponentNestedInput");
const ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1 = require("../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TsLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/TsLinesUpdateManyWithoutComponentNestedInput");
let ComponentsUpdateWithoutHtmllineInput = class ComponentsUpdateWithoutHtmllineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComponentsUpdateWithoutHtmllineInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutHtmllineInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutHtmllineInput.prototype, "css", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput)
], ComponentsUpdateWithoutHtmllineInput.prototype, "project", void 0);
ComponentsUpdateWithoutHtmllineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateWithoutHtmllineInput", {
        isAbstract: true
    })
], ComponentsUpdateWithoutHtmllineInput);
exports.ComponentsUpdateWithoutHtmllineInput = ComponentsUpdateWithoutHtmllineInput;
