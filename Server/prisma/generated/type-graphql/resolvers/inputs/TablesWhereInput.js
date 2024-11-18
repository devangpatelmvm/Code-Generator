"use strict";
var TablesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsListRelationFilter_1 = require("../inputs/ColumnsListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProjectsRelationFilter_1 = require("../inputs/ProjectsRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TablesWhereInput = TablesWhereInput_1 = class TablesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TablesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TablesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsRelationFilter_1.ProjectsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsRelationFilter_1.ProjectsRelationFilter)
], TablesWhereInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TablesWhereInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsListRelationFilter_1.ColumnsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsListRelationFilter_1.ColumnsListRelationFilter)
], TablesWhereInput.prototype, "column", void 0);
TablesWhereInput = TablesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesWhereInput", {
        isAbstract: true
    })
], TablesWhereInput);
exports.TablesWhereInput = TablesWhereInput;
