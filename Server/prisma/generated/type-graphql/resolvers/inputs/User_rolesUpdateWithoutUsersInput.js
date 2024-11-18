"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesUpdateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let User_rolesUpdateWithoutUsersInput = class User_rolesUpdateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], User_rolesUpdateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], User_rolesUpdateWithoutUsersInput.prototype, "permissions", void 0);
User_rolesUpdateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesUpdateWithoutUsersInput", {
        isAbstract: true
    })
], User_rolesUpdateWithoutUsersInput);
exports.User_rolesUpdateWithoutUsersInput = User_rolesUpdateWithoutUsersInput;
