"use strict";
var ProjectsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsListRelationFilter_1 = require("../inputs/ComponentsListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PackagesListRelationFilter_1 = require("../inputs/PackagesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TablesListRelationFilter_1 = require("../inputs/TablesListRelationFilter");
const UsersRelationFilter_1 = require("../inputs/UsersRelationFilter");
let ProjectsWhereInput = ProjectsWhereInput_1 = class ProjectsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProjectsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProjectsWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProjectsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProjectsWhereInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProjectsWhereInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProjectsWhereInput.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesListRelationFilter_1.PackagesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesListRelationFilter_1.PackagesListRelationFilter)
], ProjectsWhereInput.prototype, "Package", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesListRelationFilter_1.TablesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesListRelationFilter_1.TablesListRelationFilter)
], ProjectsWhereInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersRelationFilter_1.UsersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersRelationFilter_1.UsersRelationFilter)
], ProjectsWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProjectsWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsListRelationFilter_1.ComponentsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsListRelationFilter_1.ComponentsListRelationFilter)
], ProjectsWhereInput.prototype, "Components", void 0);
ProjectsWhereInput = ProjectsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsWhereInput", {
        isAbstract: true
    })
], ProjectsWhereInput);
exports.ProjectsWhereInput = ProjectsWhereInput;
