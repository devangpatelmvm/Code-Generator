"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateWithoutUser_rolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateNestedManyWithoutUserInput_1 = require("../inputs/ProjectsCreateNestedManyWithoutUserInput");
let UsersCreateWithoutUser_rolesInput = class UsersCreateWithoutUser_rolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutUser_rolesInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutUser_rolesInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutUser_rolesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutUser_rolesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UsersCreateWithoutUser_rolesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedManyWithoutUserInput_1.ProjectsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedManyWithoutUserInput_1.ProjectsCreateNestedManyWithoutUserInput)
], UsersCreateWithoutUser_rolesInput.prototype, "project", void 0);
UsersCreateWithoutUser_rolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersCreateWithoutUser_rolesInput", {
        isAbstract: true
    })
], UsersCreateWithoutUser_rolesInput);
exports.UsersCreateWithoutUser_rolesInput = UsersCreateWithoutUser_rolesInput;
