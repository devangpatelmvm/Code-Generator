"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateWithoutHtmllineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateNestedManyWithoutComponentInput_1 = require("../inputs/CssCreateNestedManyWithoutComponentInput");
const ProjectsCreateNestedOneWithoutComponentsInput_1 = require("../inputs/ProjectsCreateNestedOneWithoutComponentsInput");
const TsLinesCreateNestedManyWithoutComponentInput_1 = require("../inputs/TsLinesCreateNestedManyWithoutComponentInput");
let ComponentsCreateWithoutHtmllineInput = class ComponentsCreateWithoutHtmllineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsCreateWithoutHtmllineInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput)
], ComponentsCreateWithoutHtmllineInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCreateNestedManyWithoutComponentInput_1.CssCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssCreateNestedManyWithoutComponentInput_1.CssCreateNestedManyWithoutComponentInput)
], ComponentsCreateWithoutHtmllineInput.prototype, "css", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedOneWithoutComponentsInput_1.ProjectsCreateNestedOneWithoutComponentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedOneWithoutComponentsInput_1.ProjectsCreateNestedOneWithoutComponentsInput)
], ComponentsCreateWithoutHtmllineInput.prototype, "project", void 0);
ComponentsCreateWithoutHtmllineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateWithoutHtmllineInput", {
        isAbstract: true
    })
], ComponentsCreateWithoutHtmllineInput);
exports.ComponentsCreateWithoutHtmllineInput = ComponentsCreateWithoutHtmllineInput;
