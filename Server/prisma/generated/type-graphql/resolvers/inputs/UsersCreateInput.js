"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateNestedManyWithoutUserInput_1 = require("../inputs/ProjectsCreateNestedManyWithoutUserInput");
const User_rolesCreateNestedOneWithoutUsersInput_1 = require("../inputs/User_rolesCreateNestedOneWithoutUsersInput");
let UsersCreateInput = class UsersCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UsersCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateNestedOneWithoutUsersInput_1.User_rolesCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCreateNestedOneWithoutUsersInput_1.User_rolesCreateNestedOneWithoutUsersInput)
], UsersCreateInput.prototype, "user_roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateNestedManyWithoutUserInput_1.ProjectsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCreateNestedManyWithoutUserInput_1.ProjectsCreateNestedManyWithoutUserInput)
], UsersCreateInput.prototype, "project", void 0);
UsersCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersCreateInput", {
        isAbstract: true
    })
], UsersCreateInput);
exports.UsersCreateInput = UsersCreateInput;
