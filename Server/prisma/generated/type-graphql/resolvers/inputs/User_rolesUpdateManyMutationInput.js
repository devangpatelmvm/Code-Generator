"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let User_rolesUpdateManyMutationInput = class User_rolesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], User_rolesUpdateManyMutationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], User_rolesUpdateManyMutationInput.prototype, "permissions", void 0);
User_rolesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("User_rolesUpdateManyMutationInput", {
        isAbstract: true
    })
], User_rolesUpdateManyMutationInput);
exports.User_rolesUpdateManyMutationInput = User_rolesUpdateManyMutationInput;
