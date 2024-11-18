"use strict";
var PackagesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const ProjectsRelationFilter_1 = require("../inputs/ProjectsRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let PackagesWhereInput = PackagesWhereInput_1 = class PackagesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PackagesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PackagesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PackagesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PackagesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PackagesWhereInput.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsRelationFilter_1.ProjectsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsRelationFilter_1.ProjectsRelationFilter)
], PackagesWhereInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PackagesWhereInput.prototype, "projectId", void 0);
PackagesWhereInput = PackagesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesWhereInput", {
        isAbstract: true
    })
], PackagesWhereInput);
exports.PackagesWhereInput = PackagesWhereInput;
