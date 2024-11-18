"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateWithoutCssInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput");
const ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1 = require("../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TsLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/TsLinesUpdateManyWithoutComponentNestedInput");
let ComponentsUpdateWithoutCssInput = class ComponentsUpdateWithoutCssInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComponentsUpdateWithoutCssInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutCssInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesUpdateManyWithoutComponentNestedInput_1.TsLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutCssInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput)
], ComponentsUpdateWithoutCssInput.prototype, "project", void 0);
ComponentsUpdateWithoutCssInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateWithoutCssInput", {
        isAbstract: true
    })
], ComponentsUpdateWithoutCssInput);
exports.ComponentsUpdateWithoutCssInput = ComponentsUpdateWithoutCssInput;
