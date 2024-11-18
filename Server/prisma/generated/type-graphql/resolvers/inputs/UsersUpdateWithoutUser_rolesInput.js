"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateWithoutUser_rolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProjectsUpdateManyWithoutUserNestedInput_1 = require("../inputs/ProjectsUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsersUpdateWithoutUser_rolesInput = class UsersUpdateWithoutUser_rolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutUser_rolesInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutUser_rolesInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutUser_rolesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateWithoutUser_rolesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UsersUpdateWithoutUser_rolesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateManyWithoutUserNestedInput_1.ProjectsUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateManyWithoutUserNestedInput_1.ProjectsUpdateManyWithoutUserNestedInput)
], UsersUpdateWithoutUser_rolesInput.prototype, "project", void 0);
UsersUpdateWithoutUser_rolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpdateWithoutUser_rolesInput", {
        isAbstract: true
    })
], UsersUpdateWithoutUser_rolesInput);
exports.UsersUpdateWithoutUser_rolesInput = UsersUpdateWithoutUser_rolesInput;
