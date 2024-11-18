"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsOrderByRelationAggregateInput_1 = require("../inputs/ProjectsOrderByRelationAggregateInput");
const User_rolesOrderByWithRelationInput_1 = require("../inputs/User_rolesOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UsersOrderByWithRelationInput = class UsersOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithRelationInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithRelationInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithRelationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesOrderByWithRelationInput_1.User_rolesOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesOrderByWithRelationInput_1.User_rolesOrderByWithRelationInput)
], UsersOrderByWithRelationInput.prototype, "user_roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithRelationInput.prototype, "user_rolesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsOrderByRelationAggregateInput_1.ProjectsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsOrderByRelationAggregateInput_1.ProjectsOrderByRelationAggregateInput)
], UsersOrderByWithRelationInput.prototype, "project", void 0);
UsersOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersOrderByWithRelationInput", {
        isAbstract: true
    })
], UsersOrderByWithRelationInput);
exports.UsersOrderByWithRelationInput = UsersOrderByWithRelationInput;
