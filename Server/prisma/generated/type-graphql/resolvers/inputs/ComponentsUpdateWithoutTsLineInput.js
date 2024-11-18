"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateWithoutTsLineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssUpdateManyWithoutComponentNestedInput_1 = require("../inputs/CssUpdateManyWithoutComponentNestedInput");
const HtmlLinesUpdateManyWithoutComponentNestedInput_1 = require("../inputs/HtmlLinesUpdateManyWithoutComponentNestedInput");
const ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1 = require("../inputs/ProjectsUpdateOneRequiredWithoutComponentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ComponentsUpdateWithoutTsLineInput = class ComponentsUpdateWithoutTsLineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ComponentsUpdateWithoutTsLineInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesUpdateManyWithoutComponentNestedInput_1.HtmlLinesUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutTsLineInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssUpdateManyWithoutComponentNestedInput_1.CssUpdateManyWithoutComponentNestedInput)
], ComponentsUpdateWithoutTsLineInput.prototype, "css", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateOneRequiredWithoutComponentsNestedInput_1.ProjectsUpdateOneRequiredWithoutComponentsNestedInput)
], ComponentsUpdateWithoutTsLineInput.prototype, "project", void 0);
ComponentsUpdateWithoutTsLineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateWithoutTsLineInput", {
        isAbstract: true
    })
], ComponentsUpdateWithoutTsLineInput);
exports.ComponentsUpdateWithoutTsLineInput = ComponentsUpdateWithoutTsLineInput;
