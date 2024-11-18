"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateWithoutCssInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HtmlLinesCreateNestedManyWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateNestedManyWithoutComponentInput");
const ProjectsCreateNestedOneWithoutComponentsInput_1 = require("../inputs/ProjectsCreateNestedOneWithoutComponentsInput");
const TsLinesCreateNestedManyWithoutComponentInput_1 = require("../inputs/TsLinesCreateNestedManyWithoutComponentInput");
let ComponentsCreateWithoutCssInput = class ComponentsCreateWithoutCssInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsCreateWithoutCssInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCreateNestedManyWithoutComponentInput_1.HtmlLinesCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesCreateNestedManyWithoutComponentInput_1.HtmlLinesCreateNestedManyWithoutComponentInput)
], ComponentsCreateWithoutCssInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput)
], ComponentsCreateWithoutCssInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedOneWithoutComponentsInput_1.ProjectsCreateNestedOneWithoutComponentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedOneWithoutComponentsInput_1.ProjectsCreateNestedOneWithoutComponentsInput)
], ComponentsCreateWithoutCssInput.prototype, "project", void 0);
ComponentsCreateWithoutCssInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateWithoutCssInput", {
        isAbstract: true
    })
], ComponentsCreateWithoutCssInput);
exports.ComponentsCreateWithoutCssInput = ComponentsCreateWithoutCssInput;
