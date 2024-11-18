"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProjectsUpdateManyWithoutUserNestedInput_1 = require("../inputs/ProjectsUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const User_rolesUpdateOneWithoutUsersNestedInput_1 = require("../inputs/User_rolesUpdateOneWithoutUsersNestedInput");
let UsersUpdateInput = class UsersUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsersUpdateInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UsersUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_rolesUpdateOneWithoutUsersNestedInput_1.User_rolesUpdateOneWithoutUsersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", User_rolesUpdateOneWithoutUsersNestedInput_1.User_rolesUpdateOneWithoutUsersNestedInput)
], UsersUpdateInput.prototype, "user_roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateManyWithoutUserNestedInput_1.ProjectsUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateManyWithoutUserNestedInput_1.ProjectsUpdateManyWithoutUserNestedInput)
], UsersUpdateInput.prototype, "project", void 0);
UsersUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersUpdateInput", {
        isAbstract: true
    })
], UsersUpdateInput);
exports.UsersUpdateInput = UsersUpdateInput;
