"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsersUpdateManyWithoutUser_rolesNestedInput_1 = require("../inputs/UsersUpdateManyWithoutUser_rolesNestedInput");
let User_rolesUpdateInput = class User_rolesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], User_rolesUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], User_rolesUpdateInput.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersUpdateManyWithoutUser_rolesNestedInput_1.UsersUpdateManyWithoutUser_rolesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersUpdateManyWithoutUser_rolesNestedInput_1.UsersUpdateManyWithoutUser_rolesNestedInput)
], User_rolesUpdateInput.prototype, "users", void 0);
User_rolesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesUpdateInput", {
        isAbstract: true
    })
], User_rolesUpdateInput);
exports.User_rolesUpdateInput = User_rolesUpdateInput;
