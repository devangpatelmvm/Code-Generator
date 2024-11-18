"use strict";
var UsersWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const ProjectsListRelationFilter_1 = require("../inputs/ProjectsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const User_rolesRelationFilter_1 = require("../inputs/User_rolesRelationFilter");
let UsersWhereInput = UsersWhereInput_1 = class UsersWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsersWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], UsersWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersWhereInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersWhereInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsersWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UsersWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesRelationFilter_1.User_rolesRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesRelationFilter_1.User_rolesRelationFilter)
], UsersWhereInput.prototype, "user_roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], UsersWhereInput.prototype, "user_rolesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsListRelationFilter_1.ProjectsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsListRelationFilter_1.ProjectsListRelationFilter)
], UsersWhereInput.prototype, "project", void 0);
UsersWhereInput = UsersWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersWhereInput", {
        isAbstract: true
    })
], UsersWhereInput);
exports.UsersWhereInput = UsersWhereInput;
