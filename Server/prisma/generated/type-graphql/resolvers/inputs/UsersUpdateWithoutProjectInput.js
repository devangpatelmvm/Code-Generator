"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const User_rolesUpdateOneWithoutUsersNestedInput_1 = require("../inputs/User_rolesUpdateOneWithoutUsersNestedInput");
let UsersUpdateWithoutProjectInput = class UsersUpdateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutProjectInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutProjectInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutProjectInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutProjectInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UsersUpdateWithoutProjectInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpdateOneWithoutUsersNestedInput_1.User_rolesUpdateOneWithoutUsersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesUpdateOneWithoutUsersNestedInput_1.User_rolesUpdateOneWithoutUsersNestedInput)
], UsersUpdateWithoutProjectInput.prototype, "user_roles", void 0);
UsersUpdateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpdateWithoutProjectInput", {
        isAbstract: true
    })
], UsersUpdateWithoutProjectInput);
exports.UsersUpdateWithoutProjectInput = UsersUpdateWithoutProjectInput;
