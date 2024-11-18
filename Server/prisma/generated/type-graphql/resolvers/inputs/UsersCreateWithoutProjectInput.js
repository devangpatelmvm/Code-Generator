"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_rolesCreateNestedOneWithoutUsersInput_1 = require("../inputs/User_rolesCreateNestedOneWithoutUsersInput");
let UsersCreateWithoutProjectInput = class UsersCreateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutProjectInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutProjectInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutProjectInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersCreateWithoutProjectInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UsersCreateWithoutProjectInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesCreateNestedOneWithoutUsersInput_1.User_rolesCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesCreateNestedOneWithoutUsersInput_1.User_rolesCreateNestedOneWithoutUsersInput)
], UsersCreateWithoutProjectInput.prototype, "user_roles", void 0);
UsersCreateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersCreateWithoutProjectInput", {
        isAbstract: true
    })
], UsersCreateWithoutProjectInput);
exports.UsersCreateWithoutProjectInput = UsersCreateWithoutProjectInput;
