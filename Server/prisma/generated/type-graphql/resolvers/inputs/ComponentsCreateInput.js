"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateNestedManyWithoutComponentInput_1 = require("../inputs/CssCreateNestedManyWithoutComponentInput");
const HtmlLinesCreateNestedManyWithoutComponentInput_1 = require("../inputs/HtmlLinesCreateNestedManyWithoutComponentInput");
const ProjectsCreateNestedOneWithoutComponentsInput_1 = require("../inputs/ProjectsCreateNestedOneWithoutComponentsInput");
const TsLinesCreateNestedManyWithoutComponentInput_1 = require("../inputs/TsLinesCreateNestedManyWithoutComponentInput");
let ComponentsCreateInput = class ComponentsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesCreateNestedManyWithoutComponentInput_1.HtmlLinesCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesCreateNestedManyWithoutComponentInput_1.HtmlLinesCreateNestedManyWithoutComponentInput)
], ComponentsCreateInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesCreateNestedManyWithoutComponentInput_1.TsLinesCreateNestedManyWithoutComponentInput)
], ComponentsCreateInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCreateNestedManyWithoutComponentInput_1.CssCreateNestedManyWithoutComponentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssCreateNestedManyWithoutComponentInput_1.CssCreateNestedManyWithoutComponentInput)
], ComponentsCreateInput.prototype, "css", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedOneWithoutComponentsInput_1.ProjectsCreateNestedOneWithoutComponentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedOneWithoutComponentsInput_1.ProjectsCreateNestedOneWithoutComponentsInput)
], ComponentsCreateInput.prototype, "project", void 0);
ComponentsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsCreateInput", {
        isAbstract: true
    })
], ComponentsCreateInput);
exports.ComponentsCreateInput = ComponentsCreateInput;
