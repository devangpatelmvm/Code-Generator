"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssOrderByRelationAggregateInput_1 = require("../inputs/CssOrderByRelationAggregateInput");
const HtmlLinesOrderByRelationAggregateInput_1 = require("../inputs/HtmlLinesOrderByRelationAggregateInput");
const ProjectsOrderByWithRelationInput_1 = require("../inputs/ProjectsOrderByWithRelationInput");
const TsLinesOrderByRelationAggregateInput_1 = require("../inputs/TsLinesOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ComponentsOrderByWithRelationInput = class ComponentsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HtmlLinesOrderByRelationAggregateInput_1.HtmlLinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HtmlLinesOrderByRelationAggregateInput_1.HtmlLinesOrderByRelationAggregateInput)
], ComponentsOrderByWithRelationInput.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TsLinesOrderByRelationAggregateInput_1.TsLinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TsLinesOrderByRelationAggregateInput_1.TsLinesOrderByRelationAggregateInput)
], ComponentsOrderByWithRelationInput.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssOrderByRelationAggregateInput_1.CssOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssOrderByRelationAggregateInput_1.CssOrderByRelationAggregateInput)
], ComponentsOrderByWithRelationInput.prototype, "css", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsOrderByWithRelationInput_1.ProjectsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsOrderByWithRelationInput_1.ProjectsOrderByWithRelationInput)
], ComponentsOrderByWithRelationInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsOrderByWithRelationInput.prototype, "projectId", void 0);
ComponentsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsOrderByWithRelationInput", {
        isAbstract: true
    })
], ComponentsOrderByWithRelationInput);
exports.ComponentsOrderByWithRelationInput = ComponentsOrderByWithRelationInput;
