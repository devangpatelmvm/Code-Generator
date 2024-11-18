"use strict";
var ComponentsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssListRelationFilter_1 = require("../inputs/CssListRelationFilter");
const HtmlLinesListRelationFilter_1 = require("../inputs/HtmlLinesListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProjectsRelationFilter_1 = require("../inputs/ProjectsRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TsLinesListRelationFilter_1 = require("../inputs/TsLinesListRelationFilter");
let ComponentsWhereInput = ComponentsWhereInput_1 = class ComponentsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ComponentsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ComponentsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesListRelationFilter_1.HtmlLinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesListRelationFilter_1.HtmlLinesListRelationFilter)
], ComponentsWhereInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesListRelationFilter_1.TsLinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesListRelationFilter_1.TsLinesListRelationFilter)
], ComponentsWhereInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssListRelationFilter_1.CssListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssListRelationFilter_1.CssListRelationFilter)
], ComponentsWhereInput.prototype, "css", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsRelationFilter_1.ProjectsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsRelationFilter_1.ProjectsRelationFilter)
], ComponentsWhereInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ComponentsWhereInput.prototype, "projectId", void 0);
ComponentsWhereInput = ComponentsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsWhereInput", {
        isAbstract: true
    })
], ComponentsWhereInput);
exports.ComponentsWhereInput = ComponentsWhereInput;
